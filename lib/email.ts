import type { ContactValues } from "./contact-types";

/**
 * Sends a contact enquiry via Resend's REST API (no SDK dependency).
 *
 * If RESEND_API_KEY / CONTACT_TO_EMAIL aren't set, it logs the submission to
 * the server console and reports `delivered: false` — so the form is fully
 * usable in development and on first deploy, then starts delivering real email
 * the moment those env vars are configured. See .env.example.
 */
export async function sendContactEmail(
  data: ContactValues
): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Monarch Lifeguard <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.info(
      "[contact] No RESEND_API_KEY/CONTACT_TO_EMAIL configured — submission logged only:",
      data
    );
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `New enquiry: ${data.service} — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Service: ${data.service}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${await res.text()}`);
  }

  return { delivered: true };
}
