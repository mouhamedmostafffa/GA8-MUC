// Optional Supabase Edge Function: "admin-users"
// Lets an admin create or delete an account directly from the admin page.
// Not required for the app to work — self-signup + promoting/deleting via the
// Accounts tab already covers almost everything. Only set this up if you
// specifically want the admin to be able to type in someone's details and
// create their account for them, or permanently delete one.
//
// WHY THIS HAS TO BE A SEPARATE FUNCTION:
// Creating or deleting another person's login requires Supabase's "service role"
// key, which can bypass every permission check in the database. That key must
// NEVER be placed in index.html/admin.html — anyone could open the browser
// dev tools and steal it. An Edge Function runs on Supabase's servers, so the
// key lives there as a secret and never reaches the browser.
//
// SETUP (Supabase dashboard, no command line needed):
//  1. Edge Functions (left sidebar) → Deploy a new function → name it exactly
//     "admin-users" → paste this whole file as its code → Deploy.
//  2. Edge Functions → admin-users → Secrets → add:
//       SUPABASE_URL             = your project URL (same one used in CS_CONFIG)
//       SUPABASE_SERVICE_ROLE_KEY= Project Settings → API → service_role key
//     (service_role is a DIFFERENT, longer key than the "anon" one — keep it
//     out of index.html/admin.html entirely.)
//  3. That's it. The "+ Create account" / "Delete" actions in the admin page's
//     Accounts tab will start working once this is deployed.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

function cors(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, content-type',
    },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return cors({});
  try {
    const authHeader = req.headers.get('Authorization') || '';
    const callerToken = authHeader.replace('Bearer ', '');
    if (!callerToken) return cors({ error: 'Not signed in' }, 401);

    // service-role client: full access, used only after we've verified the caller is an admin
    const admin = createClient(SUPABASE_URL, SERVICE_KEY);

    // verify the CALLER (using their own token) is actually an admin before doing anything
    const { data: callerUser, error: callerErr } = await admin.auth.getUser(callerToken);
    if (callerErr || !callerUser?.user) return cors({ error: 'Invalid session' }, 401);
    const { data: callerProfile } = await admin.from('profiles').select('role').eq('id', callerUser.user.id).single();
    if (!callerProfile || callerProfile.role !== 'admin') return cors({ error: 'Admins only' }, 403);

    const body = await req.json();

    if (body.action === 'create') {
      const { name, phone, password, group_key, role } = body;
      if (!name || !phone || !password) return cors({ error: 'name, phone and password are required' }, 400);
      const { data, error } = await admin.auth.admin.createUser({
        phone, password, phone_confirm: true,
        user_metadata: { name, group_key: group_key || null },
      });
      if (error) return cors({ error: error.message }, 400);
      if (role && role !== 'student') {
        await admin.from('profiles').update({ role }).eq('id', data.user!.id);
      }
      return cors({ ok: true, id: data.user!.id });
    }

    if (body.action === 'delete') {
      const { id } = body;
      if (!id) return cors({ error: 'id is required' }, 400);
      const { error } = await admin.auth.admin.deleteUser(id);
      if (error) return cors({ error: error.message }, 400);
      return cors({ ok: true });
    }

    return cors({ error: 'Unknown action' }, 400);
  } catch (e) {
    return cors({ error: String(e) }, 500);
  }
});
