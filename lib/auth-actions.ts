"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import { SESSION_COOKIE } from "./auth-constants";
import type { SignInState } from "./auth-types";

/** Real sign-in via Supabase (email + password). */
export async function signIn(
  _prev: SignInState,
  formData: FormData
): Promise<SignInState> {
  if (!isSupabaseConfigured) {
    return {
      error:
        "Authentication isn't configured yet. Add Supabase env vars (see .env.example).",
    };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  redirect("/dashboard");
}

/** Dev-only sign-in used before Supabase is configured (no-op in production). */
export async function signInDev() {
  if (process.env.NODE_ENV === "production") return;
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "dev", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/dashboard");
}

export async function signOut() {
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/login");
}
