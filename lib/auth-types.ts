// Shared type for the sign-in form (kept out of the "use server" action file,
// which may only export async functions).

export type SignInState = { error?: string };

export const SIGN_IN_INITIAL_STATE: SignInState = {};
