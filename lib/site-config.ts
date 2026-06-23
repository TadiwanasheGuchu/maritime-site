/**
 * Single source of truth for marketing/business content.
 *
 * ⚠️  PLACEHOLDER CONTENT — replace every value flagged `PLACEHOLDER` with
 *     verified information before launching. Components are written to *hide*
 *     unverified specifics (stats, founder details, milestones) until real
 *     values are supplied here, so nothing fabricated ships by accident.
 */

export type Stat = { id: string; label: string; value: number | null };
export type Milestone = { year: string; label: string };

export const siteConfig = {
  name: "Monarch Lifeguard",
  legalName: "Monarch Lifeguard & Emergency Rescue Services",
  tagline: "Aquatic safety & rescue · Namibia",
  description:
    "Professional lifeguard services, emergency response, rescue training, and water safety education across Namibia's coastlines and inland waters.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    // PLACEHOLDER — replace with real, verified details before launch.
    email: "hello@example.com",
    address: "Street address — Walvis Bay, Namibia (placeholder)",
    dispatch: [
      { label: "Coastline Dispatch", number: "+264 00 000 0000" },
      { label: "Inland & Training HQ", number: "+264 00 000 0000" },
    ],
  },

  // PLACEHOLDER — set verified figures to surface the impact band; while every
  // value is null the section stays hidden rather than showing made-up numbers.
  stats: [
    { id: "lives", label: "Lives Saved", value: null },
    { id: "guards", label: "Trained Lifeguards", value: null },
    { id: "campaigns", label: "Safety Campaigns", value: null },
    { id: "years", label: "Years of Service", value: null },
  ] as Stat[],

  story: {
    // PLACEHOLDER — fill these to surface the founder line, badge & milestones.
    founderName: null as string | null,
    foundedYear: null as number | null,
    foundedLocation: null as string | null,
    milestones: [] as Milestone[],
  },

  social: {
    // PLACEHOLDER — real profile/share URLs.
    website: null as string | null,
    share: null as string | null,
  },
};

export type SiteConfig = typeof siteConfig;
