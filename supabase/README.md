# Supabase setup (CRM data + auth)

Until these steps are done, the CRM runs on a **dev-only cookie login** so the UI
still previews locally. Once configured, the app uses real Supabase auth + data.

## 1. Create a project
Create a project at [supabase.com](https://supabase.com). From **Project Settings → API**, copy the **Project URL** and the **anon public** key.

## 2. Add environment variables
In `.env.local` (copy from `.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

## 3. Apply the schema
Either with the Supabase CLI (recommended):

```bash
supabase link --project-ref <your-project-ref>
supabase db push          # applies migrations/
psql "$DATABASE_URL" -f supabase/seed.sql   # optional sample data
```

…or paste the contents of `migrations/20260623000000_init.sql` (then `seed.sql`)
into the project's **SQL Editor** and run them.

## 4. Create a user
**Authentication → Users → Add user** (email + password). A `profiles` row is
created automatically by the `on_auth_user_created` trigger. Promote yourself to
admin in the **SQL Editor**:

```sql
update profiles set role = 'admin'
where id = (select id from auth.users where email = 'you@example.com');
```

## 5. Restart
Restart `next dev`. The login page now shows the real email/password form, the
proxy enforces the Supabase session, and `verifySession()` loads your profile.

## Notes
- After changing the schema, regenerate TypeScript types and add the `<Database>`
  generic to the Supabase clients for typed queries:
  `supabase gen types typescript --linked > lib/supabase/types.ts`
- RLS currently grants any authenticated user full access (all CRM users are
  staff). Tighten by role as workflows are built (Phase 3+).
