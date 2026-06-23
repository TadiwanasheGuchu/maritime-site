# Monarch Lifeguard — Build Phases

What it takes to go from the current **scaffold** to a **functioning product**: first a real public website, then a working CRM. Each phase has a goal, concrete tasks tied to the actual code, and a "Done when" bar.

> Legend: `[x]` done · `[ ]` to do · 🔸 decision needed before starting

---

## Where we are today (honest snapshot)

**Built & working**
- Next.js 16 / React 19 / Tailwind v4, design tokens in `app/globals.css`.
- Route-group split: `app/(site)` (public) and `app/(app)` (CRM) with separate layouts.
- Marketing page renders: Navbar (+ mobile menu), Hero, Services, Impact stats, Training, Story, Contact, Footer.
- CRM shell: sidebar (active state), topbar, dashboard + clients/invoices/incidents stubs.
- Route guard `proxy.ts` + two-layer auth pattern wired (`lib/session.ts`, `lib/auth-actions.ts`).

**Not real yet (placeholders)**
- Contact form (`app/(site)/components/ContactForm.tsx`) shows a success message but **submits nowhere**.
- Impact stats (`500+ lives saved`, etc.) are **fabricated**; founder bio and dates are unverified.
- Training / founder / map images are **temporary Stitch CDN URLs** that will expire.
- Footer links (Privacy, Terms, Equipment Log, Join, Volunteer) are **dead `#` anchors**.
- Auth is a **cookie-presence stub**; no users, no database, no real login.
- Per-page SEO metadata, sitemap, robots, OG images — **none yet**.
- No tests, no analytics, no error monitoring, not deployed.

---

## Decisions to lock first 🔸

These shape later phases. Recommended defaults in **bold**; alternatives noted.

| Area | Recommendation | Alternatives |
|---|---|---|
| Hosting | **Vercel** (first-party Next.js, zero-config) | Netlify, self-hosted Node/Docker |
| Database | **Supabase (Postgres)** — bundles auth + storage + row-level security | Neon + separate auth |
| ORM / queries | **Drizzle** (TS-first, light) | Prisma (more mature DX) |
| Auth | **Supabase Auth** (if Supabase) | Auth.js v5, Clerk |
| Email (form + transactional) | **Resend** | Postmark, SES |
| Form spam protection | **Cloudflare Turnstile** | hCaptcha, honeypot-only |
| Validation | **Zod** (shared client/server schemas) | Valibot |
| Analytics | **Vercel Analytics** or **Plausible** (privacy-friendly) | PostHog |
| Testing | **Vitest** (unit) + **Playwright** (e2e) | — |

Picking Supabase collapses Phase 2 work (auth + DB + file storage in one).

---

## Phase 1 — Make the public website real & launchable

**Goal:** a site Monarch can put their domain on without anything fake or broken.

- [ ] **Wire the contact form.** Convert `ContactForm.tsx` submit to a server action that validates with Zod, sends an email via Resend (and/or stores the submission), and handles success/error states. Add Turnstile.
- [ ] **Replace fabricated content.** Get real numbers for the impact section (or remove the section); verify founder name/dates/story; add specifics (actual beaches served, real certifications/partners). If a number can't be verified, cut it.
- [ ] **Replace placeholder images.** Swap Stitch CDN URLs in `TrainingPrograms.tsx`, `Story.tsx`, `Contact.tsx` for real, optimized assets in `public/` via `next/image` (drop the CSS `background-image` approach so images are optimized).
- [ ] **Build out missing pages / fix dead links.** Add real pages or section anchors for Services, About, Contact, plus **Privacy Policy** and **Terms** (the footer currently links to `#`).
- [ ] **SEO.** Per-page `metadata`, `app/sitemap.ts`, `app/robots.ts`, OG image, app icons.
- [ ] **Accessibility & polish.** Keyboard/focus states, alt text, contrast, honour `prefers-reduced-motion` (already started). Run Lighthouse + axe.
- [ ] **Analytics + error monitoring** (Vercel Analytics + Sentry or similar).
- [ ] **Deploy.** Vercel project, custom domain, HTTPS, env vars.

**Done when:** a visitor can read accurate content, the contact form delivers a real message, every link works, and the site is live on the domain.

---

## Phase 2 — Auth & data foundation (enables the CRM)

**Goal:** real accounts and a real database behind the `(app)` route group.

- [ ] 🔸 Provision the database and ORM (per decisions above); set up env/secrets.
- [ ] Define schema & migrations: `users`, `clients`, `contacts`, `services`, `invoices` (+ line items), `incidents`, `guards`/`shifts`. Seed dev data.
- [ ] Implement **real auth**: replace the stubs in `lib/session.ts` (verify a real session) and `lib/auth-actions.ts` (real login/logout). Keep the existing two-layer pattern (`proxy.ts` optimistic + layout authoritative).
- [ ] Add **roles/permissions** (admin/staff) and enforce them in `verifySession`, the `(app)` layout, and every mutation.
- [ ] Establish a Data Access Layer so auth checks live next to queries (not just in the UI).

**Done when:** a real user can sign in, only authorized users reach CRM routes, and data persists in the database.

---

## Phase 3 — CRM core modules

**Goal:** the four stubbed modules become functional CRUD with real data.

- [ ] **Clients** — list/table, detail view, contacts, service agreements (full CRUD).
- [ ] **Incidents** — the log-incident form (matches the original Stitch design), list, detail, status workflow, photo/file uploads.
- [ ] **Invoices** — create/issue with line items, statuses, PDF export, reconciliation.
- [ ] **Dashboard** — replace placeholder KPIs in `app/(app)/dashboard/page.tsx` with real aggregates; add charts + recent-activity feed.
- [ ] Mutations via server actions with Zod validation and optimistic UI; consistent loading/error/empty states.

**Done when:** staff can manage clients, log incidents, and issue invoices end-to-end against live data.

---

## Phase 4 — Operational features

**Goal:** the things that make daily use pleasant.

- [ ] Notifications (the topbar bell) — in-app + email for key events.
- [ ] Global search (the topbar search input) across clients/invoices/incidents.
- [ ] Guard rostering / scheduling (if in scope).
- [ ] CSV / PDF exports and basic reporting.
- [ ] Audit log of who changed what.

**Done when:** common workflows don't require leaving the app or manual workarounds.

---

## Phase 5 — Hardening & launch

**Goal:** safe to trust with real operational data.

- [ ] Tests: Vitest (logic/validation) + Playwright (login → CRM flows).
- [ ] Security review: authz on every mutation, rate limiting, input validation, file-upload limits, RLS (if Supabase), dependency audit.
- [ ] Performance & caching strategy; review which `(app)` routes need dynamic vs cached.
- [ ] Backups, monitoring, structured logging, CI/CD.
- [ ] Consider extracting `(app)` into its own deployable app — the route-group boundary is already the seam.

**Done when:** the CRM has tests, monitored deploys, backups, and a passed security review.

---

## Suggested sequencing

1. **Phase 1** stands alone — ship the website now; it doesn't depend on the CRM.
2. **Phase 2** is the gate for everything CRM. Lock the stack decisions before starting it.
3. **Phases 3–5** are iterative once the foundation exists; build modules one at a time (Clients → Incidents → Invoices is a sensible order).
