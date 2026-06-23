"use client";

import { useActionState } from "react";
import { signIn } from "@/lib/auth-actions";
import { SIGN_IN_INITIAL_STATE } from "@/lib/auth-types";

const inputClass =
  "h-10 bg-surface-container-lowest border border-outline-variant rounded-md px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    signIn,
    SIGN_IN_INITIAL_STATE
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state.error && (
        <p role="alert" className="text-sm text-error">
          {state.error}
        </p>
      )}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-on-surface">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="password"
          className="text-sm font-medium text-on-surface"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-primary text-on-primary text-sm font-semibold uppercase tracking-wider py-3 rounded-md hover:bg-primary-container transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
