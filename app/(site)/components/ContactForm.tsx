"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/contact";
import { CONTACT_INITIAL_STATE } from "@/lib/contact-types";

const SERVICE_TYPES = [
  "Beach Lifeguarding",
  "Pool Safety Management",
  "Rescue Training Certification",
  "Diving Search & Recovery",
  "First Aid Workshop",
  "Other Inquiry",
];

const inputClasses =
  "w-full bg-surface-container-low border border-outline-variant rounded-full px-6 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition aria-[invalid=true]:border-error aria-[invalid=true]:ring-error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="font-label-md text-error">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    CONTACT_INITIAL_STATE
  );

  if (state.ok) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
        <h3 className="font-headline-md text-on-surface">Request received</h3>
        <p className="font-body-md text-on-surface-variant max-w-sm">
          Thank you — our operations team will be in touch as soon as possible.
          For an active emergency, please call the dispatch lines instead.
        </p>
      </div>
    );
  }

  const { fieldErrors, values, error } = state;

  return (
    <>
      <h3 className="font-headline-md text-on-surface mb-2">
        Request Services or Info
      </h3>
      <p className="font-body-md text-on-surface-variant mb-8">
        Complete the form below and our operations team will get back to you.
      </p>

      <form action={formAction} className="flex flex-col gap-6" noValidate>
        {/* Honeypot — visually hidden; real users never fill it. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        {error && (
          <p role="alert" className="font-body-md text-error">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-label-lg text-on-surface">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              defaultValue={values?.name}
              placeholder="John Doe"
              className={inputClasses}
              aria-invalid={Boolean(fieldErrors?.name)}
              aria-describedby={fieldErrors?.name ? "name-error" : undefined}
            />
            <FieldError id="name-error" message={fieldErrors?.name} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-label-lg text-on-surface">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              defaultValue={values?.email}
              placeholder="john@example.com"
              className={inputClasses}
              aria-invalid={Boolean(fieldErrors?.email)}
              aria-describedby={fieldErrors?.email ? "email-error" : undefined}
            />
            <FieldError id="email-error" message={fieldErrors?.email} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="font-label-lg text-on-surface">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            defaultValue={values?.service}
            className={inputClasses}
          >
            {SERVICE_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-label-lg text-on-surface">
            Message / Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={10}
            defaultValue={values?.message}
            placeholder="How can we help secure your waters?"
            className="w-full bg-surface-container-low border border-outline-variant rounded-md px-6 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition aria-[invalid=true]:border-error aria-[invalid=true]:ring-error"
            aria-invalid={Boolean(fieldErrors?.message)}
            aria-describedby={fieldErrors?.message ? "message-error" : undefined}
          />
          <FieldError id="message-error" message={fieldErrors?.message} />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="bg-primary text-on-primary font-label-lg py-4 rounded-full hover:bg-primary-container transition-all uppercase tracking-widest mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Sending…" : "Send Request"}
        </button>
      </form>
    </>
  );
}
