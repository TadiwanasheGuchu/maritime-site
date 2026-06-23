import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSupabaseConfigured } from "./lib/supabase/config";
import { updateSession } from "./lib/supabase/proxy";
import { SESSION_COOKIE } from "./lib/auth-constants";

/**
 * Next.js 16 renamed Middleware to Proxy. This runs before matched requests.
 *
 * Optimistic check only — the authoritative check lives server-side in
 * app/(app)/layout.tsx via verifySession(). Never trust this alone.
 */
function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export async function proxy(request: NextRequest) {
  if (isSupabaseConfigured) {
    // Refresh the Supabase session and optimistically gate on the user.
    const { response, user } = await updateSession(request);
    if (!user) return redirectToLogin(request);
    return response;
  }

  // Dev fallback (no Supabase configured): cookie-presence check.
  if (!request.cookies.has(SESSION_COOKIE)) return redirectToLogin(request);
  return NextResponse.next();
}

// Only guard the CRM routes. The public marketing site is left untouched.
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/clients/:path*",
    "/invoices/:path*",
    "/incidents/:path*",
  ],
};
