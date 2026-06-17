# Build Phases

The CRM is built in 6 phases. Each phase delivers working, usable functionality before moving to the next.

---

## Phase 1 — Foundation
**Goal:** Working app shell with authentication and navigation.

### Tasks
- [ ] Initialise Next.js 14 project with TypeScript and Tailwind
- [ ] Set up PostgreSQL database (local)
- [ ] Configure Prisma with schema
- [ ] Run first migration (`prisma migrate dev`)
- [ ] Seed database with sample data
- [ ] Set up NextAuth.js (credentials provider)
- [ ] Build login page
- [ ] Build sidebar + topbar layout
- [ ] Build dashboard page (static — no real data yet)
- [ ] Protect all routes (redirect to login if not authenticated)
- [ ] Deploy to Vercel + connect to hosted PostgreSQL (Supabase or Railway)

### Deliverable
A working login that leads to a dashboard with hardcoded KPI numbers and a full navigation sidebar.

---

## Phase 2 — Clients & Lifeguards
**Goal:** Manage the two core people records.

### Tasks
- [ ] Clients list page with table
- [ ] Create client form
- [ ] Client detail page
- [ ] Edit client
- [ ] Delete client (with guard if linked invoices exist)
- [ ] Lifeguard list page
- [ ] Create lifeguard form
- [ ] Lifeguard detail page
- [ ] Edit / deactivate lifeguard
- [ ] Wire up all API routes (`/api/clients`, `/api/lifeguards`)
- [ ] Connect dashboard KPI cards to real client count

### Deliverable
Full CRUD for clients and lifeguards. Data is live from the database.

---

## Phase 3 — Trainees & Certificates
**Goal:** Full training management with certificate generation.

### Tasks
- [ ] Trainees list page
- [ ] Register trainee form
- [ ] Trainee profile page
- [ ] Courses list and management (Settings > Courses)
- [ ] Enrollment form (enroll trainee in a course)
- [ ] Update enrollment status + grade
- [ ] Certificate PDF template (using @react-pdf/renderer)
- [ ] Generate certificate on PASSED status
- [ ] Certificate download from trainee profile
- [ ] Documents page (list all generated certificates)

### Deliverable
Trainees can be registered, enrolled in courses, graded, and issued PDF certificates.

---

## Phase 4 — Deployments & Incidents
**Goal:** Operational scheduling and emergency logging.

### Tasks
- [ ] Deployments list page
- [ ] Schedule deployment form (select client, location, date, lifeguards)
- [ ] Deployment detail page with roster
- [ ] Change deployment status (Active, Completed, Cancelled)
- [ ] Incidents list page
- [ ] Log incident form
- [ ] Incident detail page
- [ ] Incident report PDF template
- [ ] Export incident report PDF
- [ ] Link incidents to deployments
- [ ] Connect dashboard "Active Deployments" and "Incidents This Month" to live data

### Deliverable
Deployments can be scheduled and managed. Incidents can be logged and exported as official reports.

---

## Phase 5 — Invoices & Billing
**Goal:** Full billing cycle from quote to paid invoice.

### Tasks
- [ ] Invoices list page with status filter
- [ ] Create invoice form with dynamic line items
- [ ] Auto-generate invoice number (INV-YYYY-NNN)
- [ ] Invoice detail page
- [ ] Change invoice status (Sent, Paid, Cancelled)
- [ ] Invoice PDF template (A4, professional layout)
- [ ] PAID watermark on paid invoices
- [ ] Download invoice PDF
- [ ] Overdue invoice highlighting (due date passed + not paid)
- [ ] Connect dashboard "Overdue Invoices" and "Revenue This Month" to live data

### Deliverable
Full invoice management. PDFs can be generated and downloaded. Revenue is tracked on the dashboard.

---

## Phase 6 — Reports, Polish & Launch
**Goal:** Analytics, final QA, and production launch.

### Tasks
- [ ] Reports page — Monthly Incidents chart
- [ ] Reports page — Revenue chart
- [ ] Reports page — Trainee completion rate
- [ ] Reports page — Outstanding invoices ageing table
- [ ] Export reports as CSV
- [ ] Export reports as PDF
- [ ] Settings — Company info (name, logo, address used in PDFs)
- [ ] Settings — User management (invite, role change, deactivate)
- [ ] Responsive design review (mobile + tablet)
- [ ] Error handling on all forms and API routes
- [ ] Loading states and empty states on all pages
- [ ] Final testing — all modules end to end
- [ ] Custom domain setup on Vercel

### Deliverable
Fully polished, production-ready CRM deployed and accessible at the custom domain.

---

## Timeline Estimate

| Phase | Estimated Time |
|-------|----------------|
| Phase 1 — Foundation | 3–4 days |
| Phase 2 — Clients & Lifeguards | 4–5 days |
| Phase 3 — Trainees & Certificates | 5–6 days |
| Phase 4 — Deployments & Incidents | 5–6 days |
| Phase 5 — Invoices & Billing | 5–6 days |
| Phase 6 — Reports & Launch | 4–5 days |
| **Total** | **~4–5 weeks** |

---

## Future Features (Post-Launch)

These are ideas for later versions after the core CRM is stable:

- Email notifications (invoice sent, certificate ready, overdue reminder)
- WhatsApp integration (send invoice via WhatsApp — popular in Namibia)
- Mobile app for lifeguards (log incidents from beach)
- Client portal (clients can view their invoices and deployment schedules)
- GPS check-in for lifeguards at deployment locations
- Annual compliance report auto-generation for municipality contracts
