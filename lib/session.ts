import { cache } from "react";
import { cookies } from "next/headers";
import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import { SESSION_COOKIE } from "./auth-constants";

export type Session = {
  userId: string;
  name: string;
  role: "admin" | "staff";
} | null;

/**
 * Authoritative auth gate for the CRM (proxy.ts is only an optimistic
 * pre-check). Called from app/(app)/layout.tsx and reusable in any CRM data
 * fetch. Wrapped in React `cache` so it runs at most once per request.
 */
export const verifySession = cache(async (): Promise<Session> => {
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, role")
      .eq("id", user.id)
      .single();

    return {
      userId: user.id,
      name: profile?.full_name ?? user.email ?? "User",
      role: profile?.role === "admin" ? "admin" : "staff",
    };
  }

  // Dev-only fallback so the CRM previews before Supabase exists.
  // Never bypasses auth in production.
  if (process.env.NODE_ENV === "production") return null;
  const cookieStore = await cookies();
  if (!cookieStore.get(SESSION_COOKIE)?.value) return null;
  return { userId: "dev-1", name: "Dev User", role: "admin" };
});
