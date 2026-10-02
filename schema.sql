-- ============================================================================
-- C.S Schedule — backend schema
-- Run this ONCE in Supabase: Dashboard → SQL Editor → New query → paste all
-- of this → Run. Safe to re-run (uses "if not exists" / "or replace" where
-- it matters); it will error harmlessly on tables that already exist.
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- 1) profiles — one row per account, extends Supabase's built-in auth.users
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  name           text not null,
  phone          text not null default '',
  group_key      text,                       -- e.g. 'GA8' — null for admin accounts
  role           text not null default 'student' check (role in ('student','rep','admin')),
  created_at     timestamptz not null default now(),
  last_login_at  timestamptz,
  last_active_at timestamptz
);

-- true if the CURRENT logged-in user is an admin
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

-- true if the current user may edit group g's official timetable
-- (an admin can edit any group; a rep can edit only their own group)
create or replace function public.can_edit_group(g text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(
    select 1 from profiles
    where id = auth.uid()
      and (role = 'admin' or (role = 'rep' and group_key = g))
  );
$$;

alter table public.profiles enable row level security;
drop policy if exists "read own profile"        on public.profiles;
drop policy if exists "admins read all profiles" on public.profiles;
drop policy if exists "update own profile"       on public.profiles;
drop policy if exists "admins update any profile" on public.profiles;
drop policy if exists "admins delete profile"    on public.profiles;
create policy "read own profile"         on public.profiles for select using (id = auth.uid());
create policy "admins read all profiles" on public.profiles for select using (is_admin());
create policy "update own profile"       on public.profiles for update using (id = auth.uid());
create policy "admins update any profile" on public.profiles for update using (is_admin());
create policy "admins delete profile"    on public.profiles for delete using (is_admin());

-- auto-create a profile row right after someone signs up (name/group_key come
-- from the "data" object passed into supabase.auth.signUp())
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name, phone, group_key)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', ''),
    coalesce(new.phone, ''),
    new.raw_user_meta_data->>'group_key'
  );
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 2) lectures — the ONE official timetable per group (replaces the old
--    hardcoded list in index.html). Any signed-in student can read every
--    group; only an admin (any group) or a rep (their own group only) can
--    write.
-- ---------------------------------------------------------------------------
create table if not exists public.lectures (
  id          uuid primary key default gen_random_uuid(),
  group_key   text not null,
  day         text not null check (day in ('sat','sun','mon','tue','wed','thu')),
  period      int  not null check (period between 1 and 4),
  code        text not null,                 -- course code, e.g. 'BSC111'
  type        text not null,                 -- Lecture / Laboratory / Exercise / Section / Community Activity
  room        text not null default '',
  staff       text not null default '',
  staff_ar    text not null default '',
  alt         jsonb,                         -- odd/even alternate session, same shape minus day/period/code
  updated_by  uuid references public.profiles(id),
  updated_at  timestamptz not null default now()
);
create index if not exists lectures_group_idx on public.lectures(group_key);

alter table public.lectures enable row level security;
drop policy if exists "read lectures"        on public.lectures;
drop policy if exists "write own-group lectures" on public.lectures;
-- public read: browsing the timetable never requires an account, same as before
create policy "read lectures" on public.lectures
  for select using (true);
create policy "write own-group lectures" on public.lectures
  for all using (can_edit_group(group_key)) with check (can_edit_group(group_key));

-- ---------------------------------------------------------------------------
-- 3) courses — code -> display titles (small reference table, admin-editable)
-- ---------------------------------------------------------------------------
create table if not exists public.courses (
  code      text primary key,
  title_en  text not null,
  title_ar  text not null
);
alter table public.courses enable row level security;
drop policy if exists "read courses"  on public.courses;
drop policy if exists "admin writes courses" on public.courses;
create policy "read courses" on public.courses for select using (true);
create policy "admin writes courses" on public.courses for all using (is_admin()) with check (is_admin());

-- ---------------------------------------------------------------------------
-- 4) notes — a student's private note attached to one official lecture
-- ---------------------------------------------------------------------------
create table if not exists public.notes (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  lecture_id  uuid not null references public.lectures(id) on delete cascade,
  text        text not null default '',
  updated_at  timestamptz not null default now(),
  unique(user_id, lecture_id)
);
alter table public.notes enable row level security;
drop policy if exists "own notes only" on public.notes;
create policy "own notes only" on public.notes
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- 5) personal_events — a student's own extra items (e.g. private tutoring),
--    visible only to them, layered on top of the official timetable
-- ---------------------------------------------------------------------------
create table if not exists public.personal_events (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  day         text not null check (day in ('sat','sun','mon','tue','wed','thu')),
  period      int  not null check (period between 1 and 4),
  title       text not null,
  room        text not null default '',
  note        text not null default '',
  created_at  timestamptz not null default now()
);
alter table public.personal_events enable row level security;
drop policy if exists "own personal events only" on public.personal_events;
create policy "own personal events only" on public.personal_events
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- 6) attendance — per user, per lecture, per calendar week (mirrors the old
--    localStorage "isoWeekNum" behaviour, just synced now)
-- ---------------------------------------------------------------------------
create table if not exists public.attendance (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  lecture_id  uuid not null references public.lectures(id) on delete cascade,
  week_num    int not null,
  present     boolean not null default true,
  marked_at   timestamptz not null default now(),
  unique(user_id, lecture_id, week_num)
);
alter table public.attendance enable row level security;
drop policy if exists "own attendance only" on public.attendance;
create policy "own attendance only" on public.attendance
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- 7) announcements — admin can broadcast a short-lived text message to
--    everyone or to one group. Public read (no login needed) so it's useful
--    even to someone who hasn't made an account yet.
-- ---------------------------------------------------------------------------
create table if not exists public.announcements (
  id          uuid primary key default gen_random_uuid(),
  group_key   text,                 -- null = visible to everyone
  message     text not null,
  created_by  uuid references public.profiles(id),
  created_at  timestamptz not null default now(),
  expires_at  timestamptz
);
alter table public.announcements enable row level security;
drop policy if exists "read announcements" on public.announcements;
drop policy if exists "admin writes announcements" on public.announcements;
create policy "read announcements" on public.announcements for select using (true);
create policy "admin writes announcements" on public.announcements for all using (is_admin()) with check (is_admin());

-- ---------------------------------------------------------------------------
-- 8) links — a standing list of links/resources for the batch (WhatsApp
--    group, Drive folder, forms...), admin-managed, public read like the
--    timetable itself, sorted by order_index then newest first
-- ---------------------------------------------------------------------------
create table if not exists public.links (
  id           uuid primary key default gen_random_uuid(),
  group_key    text,                 -- null = visible to everyone
  title        text not null,
  url          text not null,
  emoji        text not null default '🔗',
  order_index  int not null default 0,
  created_by   uuid references public.profiles(id),
  created_at   timestamptz not null default now()
);
alter table public.links enable row level security;
drop policy if exists "read links" on public.links;
drop policy if exists "admin writes links" on public.links;
create policy "read links" on public.links for select using (true);
create policy "admin writes links" on public.links for all using (is_admin()) with check (is_admin());

-- ---------------------------------------------------------------------------
-- "last_active_at" housekeeping — updated automatically whenever a student
-- writes a note / attendance mark / personal event (used by the simple
-- activity view in the admin page)
-- ---------------------------------------------------------------------------
create or replace function public.touch_last_active() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.profiles set last_active_at = now() where id = auth.uid();
  return new;
end; $$;
drop trigger if exists touch_active_notes on public.notes;
drop trigger if exists touch_active_att   on public.attendance;
drop trigger if exists touch_active_evt   on public.personal_events;
create trigger touch_active_notes after insert or update on public.notes
  for each row execute function public.touch_last_active();
create trigger touch_active_att after insert or update on public.attendance
  for each row execute function public.touch_last_active();
create trigger touch_active_evt after insert on public.personal_events
  for each row execute function public.touch_last_active();

-- ============================================================================
-- Done. Next: Authentication → Providers → Phone → turn OFF "Enable phone
-- confirmations" (no SMS is sent or required this way), then create your own
-- admin account by signing up once through the app and running:
--   update public.profiles set role = 'admin' where phone = '+20XXXXXXXXXX';
-- in the SQL editor.
-- ============================================================================
