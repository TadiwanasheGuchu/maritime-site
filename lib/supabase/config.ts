export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * Whether real Supabase auth/data is configured. When false, the CRM falls back
 * to a dev-only cookie session (non-production) so the UI still previews locally
 * before the Supabase project exists. See lib/session.ts and lib/auth-actions.ts.
 */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
