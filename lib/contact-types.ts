// Shared types for the contact form. Kept out of the "use server" action file
// (which may only export async functions) so both client and server can import.

export type ContactValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof ContactValues, string>>;
  values?: ContactValues;
};

export const CONTACT_INITIAL_STATE: ContactState = { ok: false };
