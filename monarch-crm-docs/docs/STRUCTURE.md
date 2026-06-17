# Project Structure

Full folder and file layout for the Monarch Lifeguard CRM.

---

## Root

```
monarch-crm/
├── README.md
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── prisma/
│   ├── schema.prisma         ← Database schema (all tables)
│   ├── seed.ts               ← Sample data for development
│   └── migrations/           ← Auto-generated migration history
├── public/
│   ├── logo.png
│   ├── logos/                ← Client logos
│   └── certificates/         ← Generated certificate PDFs
├── docs/                     ← All planning documents (this folder)
└── src/
    ├── app/                  ← Next.js App Router pages
    ├── components/           ← Reusable UI components
    ├── lib/                  ← Utility functions and configs
    ├── hooks/                ← Custom React hooks
    ├── types/                ← TypeScript type definitions
    └── styles/               ← Global CSS
```

---

## src/app/ — Pages

```
src/app/
├── layout.tsx                ← Root layout (fonts, metadata)
├── page.tsx                  ← Redirects to /dashboard
├── globals.css
│
├── (auth)/
│   └── login/
│       └── page.tsx          ← Login page
│
├── (dashboard)/              ← All protected pages share sidebar layout
│   ├── layout.tsx            ← Sidebar + topbar wrapper
│   │
│   ├── dashboard/
│   │   └── page.tsx          ← KPIs, activity feed, upcoming deployments
│   │
│   ├── clients/
│   │   ├── page.tsx          ← List all clients
│   │   ├── new/page.tsx      ← Add new client form
│   │   └── [id]/
│   │       ├── page.tsx      ← Client detail view
│   │       └── edit/page.tsx ← Edit client form
│   │
│   ├── trainees/
│   │   ├── page.tsx          ← List all trainees
│   │   ├── new/page.tsx      ← Register new trainee
│   │   └── [id]/
│   │       ├── page.tsx      ← Trainee profile + enrollments
│   │       └── certificate/page.tsx ← View/download certificate
│   │
│   ├── deployments/
│   │   ├── page.tsx          ← Calendar + list view of deployments
│   │   ├── new/page.tsx      ← Schedule new deployment
│   │   └── [id]/
│   │       └── page.tsx      ← Deployment detail + assigned lifeguards
│   │
│   ├── incidents/
│   │   ├── page.tsx          ← Incident log list
│   │   ├── new/page.tsx      ← Log new incident
│   │   └── [id]/
│   │       └── page.tsx      ← Incident detail + report
│   │
│   ├── invoices/
│   │   ├── page.tsx          ← All invoices with status filter
│   │   ├── new/page.tsx      ← Create new quote/invoice
│   │   └── [id]/
│   │       ├── page.tsx      ← Invoice detail
│   │       └── pdf/page.tsx  ← Printable/downloadable PDF
│   │
│   ├── documents/
│   │   └── page.tsx          ← All generated PDFs (certs, reports, invoices)
│   │
│   ├── reports/
│   │   └── page.tsx          ← Analytics, charts, export to CSV/PDF
│   │
│   └── settings/
│       └── page.tsx          ← Users, system config, company info
│
└── api/                      ← Next.js API routes (backend)
    ├── auth/
    │   └── [...nextauth]/route.ts
    ├── clients/
    │   ├── route.ts          ← GET all, POST new
    │   └── [id]/route.ts     ← GET one, PATCH, DELETE
    ├── trainees/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── lifeguards/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── courses/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── enrollments/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── deployments/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── incidents/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── invoices/
    │   ├── route.ts
    │   └── [id]/route.ts
    ├── documents/
    │   └── route.ts
    └── reports/
        └── route.ts
```

---

## src/components/ — UI Components

```
src/components/
│
├── ui/                       ← Base reusable elements
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Badge.tsx             ← Status pills (Active, Paid, Overdue etc.)
│   ├── Card.tsx
│   ├── Table.tsx
│   ├── Modal.tsx
│   ├── Pagination.tsx
│   ├── SearchBar.tsx
│   └── EmptyState.tsx
│
├── layout/                   ← App shell components
│   ├── Sidebar.tsx           ← Navigation sidebar
│   ├── Topbar.tsx            ← Page header + user avatar
│   └── PageWrapper.tsx       ← Consistent page padding/width
│
├── dashboard/
│   ├── KpiCard.tsx           ← Single metric card (e.g. "12 Active Deployments")
│   ├── RecentIncidents.tsx
│   └── UpcomingDeployments.tsx
│
├── clients/
│   ├── ClientTable.tsx
│   ├── ClientForm.tsx
│   └── ClientCard.tsx
│
├── trainees/
│   ├── TraineeTable.tsx
│   ├── TraineeForm.tsx
│   ├── EnrollmentCard.tsx
│   └── CertificatePreview.tsx
│
├── deployments/
│   ├── DeploymentTable.tsx
│   ├── DeploymentForm.tsx
│   └── RosterCard.tsx
│
├── incidents/
│   ├── IncidentTable.tsx
│   ├── IncidentForm.tsx
│   └── IncidentReport.tsx    ← Printable incident report layout
│
├── invoices/
│   ├── InvoiceTable.tsx
│   ├── InvoiceForm.tsx
│   ├── InvoiceItems.tsx      ← Line items table
│   └── InvoicePDF.tsx        ← PDF template
│
└── documents/
    ├── CertificatePDF.tsx    ← Training certificate PDF template
    └── DocumentList.tsx
```

---

## src/lib/ — Utilities

```
src/lib/
├── prisma.ts                 ← Prisma client singleton
├── auth.ts                   ← NextAuth config
├── utils.ts                  ← General helpers (formatDate, formatCurrency etc.)
├── validators.ts             ← Zod schemas for form/API validation
└── pdf.ts                    ← PDF generation helpers
```

---

## src/types/ — TypeScript Types

```
src/types/
├── client.ts
├── trainee.ts
├── deployment.ts
├── incident.ts
├── invoice.ts
└── user.ts
```
