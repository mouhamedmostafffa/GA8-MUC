// Supabase Edge Function: send-push
// Delivers the alerts each device uploaded (class reminders, morning summary, exams, prayers)
// even when the app is closed. It runs once a minute and sends whatever is due.
//
// One-time setup:
//   1) npx web-push generate-vapid-keys
//   2) supabase secrets set VAPID_PUBLIC_KEY=<public> VAPID_PRIVATE_KEY=<private> \
//        VAPID_SUBJECT=mailto:you@example.com CRON_SECRET=<any long random string>
//   3) supabase functions deploy send-push --no-verify-jwt
//   4) Admin page > Settings > "Push notifications": paste the public key, Save.
//   5) SQL editor (enable the pg_cron and pg_net extensions first):
//        select cron.schedule('send-push', '* * * * *', $$
//          select net.http_post(
//            url     := 'https://<project-ref>.supabase.co/functions/v1/send-push',
//            headers := '{"x-cron-secret":"<CRON_SECRET>"}'::jsonb
//          ) $$);
import { createClient } from 'npm:@supabase/supabase-js@2';
import webpush from 'npm:web-push@3.6.7';

webpush.setVapidDetails(
  Deno.env.get('VAPID_SUBJECT')!,
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!,
);
const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
const LATE_MS = 10 * 60 * 1000; // never deliver an alert that is more than 10 minutes late

Deno.serve(async (req) => {
  if (req.headers.get('x-cron-secret') !== Deno.env.get('CRON_SECRET')) {
    return new Response('forbidden', { status: 403 });
  }
  const now = Date.now();
  const { data: subs, error } = await admin
    .from('push_subscriptions')
    .select('id,endpoint,p256dh,auth,schedule,last_run')
    .not('next_at', 'is', null)
    .lte('next_at', new Date(now).toISOString())
    .limit(500);
  if (error) return new Response(error.message, { status: 500 });

  let sent = 0, removed = 0, failed = 0;
  await Promise.all((subs || []).map(async (s) => {
    const items: { at: string; title: string; body: string; tag: string }[] = Array.isArray(s.schedule) ? s.schedule : [];
    const last = s.last_run ? Date.parse(s.last_run) : 0;
    const due = items.filter((i) => { const t = Date.parse(i.at); return t <= now && t > now - LATE_MS && t > last; });
    let gone = false;
    for (const it of due) {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          JSON.stringify({ title: it.title, body: it.body, tag: it.tag, url: './index.html' }),
          { TTL: 600, urgency: 'high' },
        );
        sent++;
      } catch (e) {
        const code = (e as { statusCode?: number })?.statusCode;
        if (code === 404 || code === 410) { gone = true; break; }
        failed++;
      }
    }
    if (gone) { await admin.from('push_subscriptions').delete().eq('id', s.id); removed++; return; }
    const upcoming = items.map((i) => Date.parse(i.at)).filter((t) => t > now).sort((a, b) => a - b)[0];
    await admin.from('push_subscriptions')
      .update({ last_run: new Date(now).toISOString(), next_at: upcoming ? new Date(upcoming).toISOString() : null })
      .eq('id', s.id);
  }));

  return new Response(JSON.stringify({ checked: subs?.length || 0, sent, removed, failed }), { headers: { 'content-type': 'application/json' } });
});
