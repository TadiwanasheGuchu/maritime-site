"use server";

import { z } from "zod";
import { sendContactEmail } from "./email";
import type { ContactState, ContactValues } from "./contact-types";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z
    .string()
    .trim()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .max(200),
  service: z.string().trim().min(1, "Please choose a service.").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details (at least 10 characters).")
    .max(2000),
});

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: bots fill every field, including this hidden one. Accept silently
  // so they don't learn they were caught, but don't send anything.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { ok: true };
  }

  const raw: ContactValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactValues;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fieldErrors,
      values: raw,
    };
  }

  try {
    await sendContactEmail(parsed.data);
    return { ok: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      ok: false,
      error:
        "Something went wrong sending your message. Please try again, or call us directly.",
      values: raw,
    };
  }
}
