import Image from "next/image";
import { signInDev } from "@/lib/auth-actions";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="crm-theme min-h-screen grid place-items-center bg-surface-container-low px-4">
      <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-lg p-10 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <Image
            src="/monarch-logo.png"
            alt="Monarch Lifeguard"
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
            Monarch CRM
          </h1>
          <p className="text-sm text-on-surface-variant">
            Sign in to access the operations dashboard.
          </p>
        </div>

        {isSupabaseConfigured ? (
          <LoginForm />
        ) : (
          <form action={signInDev} className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-primary text-on-primary text-sm font-semibold uppercase tracking-wider py-3 rounded-md hover:bg-primary-container transition-colors"
            >
              Continue (dev sign-in)
            </button>
            <p className="text-xs text-on-surface-variant/70 text-center">
              Supabase isn&apos;t configured yet, so this dev-only bypass is
              shown. Add Supabase env vars to enable real sign-in.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
