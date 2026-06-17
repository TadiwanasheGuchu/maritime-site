# Design System

UI design guidelines for the Monarch Lifeguard CRM. Every page, component, and element follows these rules for a consistent, professional look.

---

## Brand Identity

Monarch Lifeguard operates at the ocean — safety, urgency, and trust are the core feelings. The design reflects that: clean navy authority, ocean teal as the accent, with clear typography that works well in operational environments (outdoors, mobile, under pressure).

**Keywords:** Trustworthy. Alert. Professional. Coastal.

---

## Color Palette

### Primary — Navy Blue
Used for the sidebar, primary buttons, headings, and key actions.

| Name | Hex | Usage |
|------|-----|-------|
| Navy 900 | `#042c53` | Sidebar background |
| Navy 600 | `#0c447c` | Primary button, active states |
| Navy 500 | `#185fa5` | Links, icon accents |
| Navy 100 | `#b5d4f4` | Hover backgrounds, chips |
| Navy 50  | `#e6f1fb` | Light info backgrounds |

### Accent — Ocean Teal
Used for success states, active badges, and highlights.

| Name | Hex | Usage |
|------|-----|-------|
| Teal 600 | `#0f6e56` | Success badge border |
| Teal 500 | `#1d9e75` | Success badge background |
| Teal 50  | `#e1f5ee` | Light success backgrounds |

### Neutrals
| Name | Hex | Usage |
|------|-----|-------|
| Gray 900 | `#111827` | Body text |
| Gray 600 | `#4b5563` | Secondary text, labels |
| Gray 200 | `#e5e7eb` | Borders, dividers |
| Gray 100 | `#f3f4f6` | Table row hover, backgrounds |
| White    | `#ffffff` | Card backgrounds, content area |

### Status Colors
| Status | Background | Text | Border | Usage |
|--------|-----------|------|--------|-------|
| Active / Paid | `#e1f5ee` | `#0f6e56` | `#1d9e75` | Active deployments, paid invoices |
| Warning / Pending | `#fef9c3` | `#854d0e` | `#ca8a04` | Pending invoices, scheduled |
| Danger / Overdue | `#fef2f2` | `#991b1b` | `#ef4444` | Overdue invoices, critical incidents |
| Info / Draft | `#e6f1fb` | `#0c447c` | `#185fa5` | Draft invoices, scheduled deployments |
| Neutral / Cancelled | `#f3f4f6` | `#4b5563` | `#9ca3af` | Cancelled, withdrawn |

---

## Typography

### Fonts
- **Display / Headings:** Inter (700, 600)
- **Body / UI:** Inter (400, 500)
- **Data / Mono (IDs, dates, invoice numbers):** JetBrains Mono

Both available via Google Fonts.

### Type Scale

| Role | Size | Weight | Usage |
|------|------|--------|-------|
| Page title | 24px | 600 | H1 on each page (e.g. "Clients") |
| Section title | 18px | 600 | Card headers, form sections |
| Table header | 13px | 500 | `text-transform: uppercase`, `letter-spacing: 0.05em` |
| Body text | 14px | 400 | General content, form labels |
| Small / label | 12px | 400 | Badges, captions, helper text |
| Mono data | 13px | 400 | IDs, invoice numbers, dates in tables |

---

## Layout

### Overall Shell

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (240px fixed)  │  CONTENT AREA (flex 1)    │
│                         │  ┌─────────────────────┐  │
│  [Logo]                 │  │ TOPBAR               │  │
│                         │  └─────────────────────┘  │
│  Nav links              │                            │
│  - Dashboard            │  PAGE CONTENT              │
│  - Clients              │  (padding: 24px 32px)      │
│  - Trainees             │                            │
│  - Deployments          │                            │
│  - Incidents            │                            │
│  - Invoices             │                            │
│  - Documents            │                            │
│  - Reports              │                            │
│                         │                            │
│  [User avatar + name]   │                            │
└─────────────────────────────────────────────────────┘
```

### Content Area Max Width
- Default pages: `max-width: 1200px`
- Forms / detail pages: `max-width: 800px`
- Reports / tables: full width

### Spacing Scale
Use multiples of 4px throughout.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, tight inner padding |
| sm | 8px | Input inner padding vertical |
| md | 16px | Card padding, form field gaps |
| lg | 24px | Page section gaps |
| xl | 32px | Page content padding |
| 2xl | 48px | Between major sections |

---

## Components

### Sidebar
- Background: Navy 900 (`#042c53`)
- Width: 240px, fixed height, no scroll (links scroll if too many)
- Logo at top: white version of Monarch logo, 32px height
- Nav link: 14px, white at 70% opacity → 100% on hover
- Active link: white text, Navy 600 left border (3px), Navy 700 background
- Bottom: user avatar (initials circle), name, role label

### Topbar
- Background: white, bottom border gray 200
- Height: 64px
- Left: page title (dynamic, 20px 600)
- Right: notification bell icon + user avatar dropdown

### Cards
- Background: white
- Border: 1px solid gray 200
- Border radius: 8px
- Padding: 20px 24px
- Box shadow: `0 1px 3px rgba(0,0,0,0.06)`

### KPI Cards (Dashboard)
- 4 per row on desktop, 2 on tablet, 1 on mobile
- Top: icon (24px, teal or navy) + label (12px gray 600)
- Middle: big number (32px 600 navy)
- Bottom: trend indicator (+12% this month)

### Tables
- Header row: gray 100 background, 13px uppercase labels, gray 600
- Body rows: white, 14px text, 48px row height
- Hover: gray 50 background
- Borders: horizontal only (1px gray 200 between rows)
- Last column: action buttons (View, Edit, Delete)
- Empty state: centered illustration + message + CTA button

### Badges / Status Pills
- Border radius: 9999px (fully rounded)
- Padding: 2px 10px
- Font: 12px 500
- Colors: from the Status Colors table above

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | Navy 600 | White | None | Main CTA (Save, Create) |
| Secondary | White | Navy 600 | Navy 100 | Secondary actions |
| Danger | Red 50 | Red 700 | Red 200 | Delete, cancel |
| Ghost | Transparent | Gray 600 | None | Inline actions, icon buttons |

- Height: 36px (default), 32px (compact), 40px (large)
- Border radius: 6px
- Font: 14px 500

### Forms
- Label: 13px 500 gray 700, 6px below label
- Input: 36px height, gray 200 border, 8px border radius
- Focus: Navy 500 border (2px), navy 50 shadow
- Error: red 500 border, red 600 helper text below
- Group spacing: 20px between fields

---

## Sidebar Navigation Icons

Use Lucide React icons throughout. One icon per nav item:

| Page | Icon |
|------|------|
| Dashboard | `LayoutDashboard` |
| Clients | `Building2` |
| Trainees | `GraduationCap` |
| Deployments | `MapPin` |
| Incidents | `AlertTriangle` |
| Invoices | `FileText` |
| Documents | `FolderOpen` |
| Reports | `BarChart2` |
| Settings | `Settings` |

---

## Responsive Breakpoints

| Name | Width | Layout change |
|------|-------|--------------|
| Mobile | < 640px | Sidebar collapses to bottom nav |
| Tablet | 640–1024px | Sidebar becomes icon-only (56px) |
| Desktop | > 1024px | Full sidebar (240px) |

---

## PDF Documents Design

All generated PDFs (certificates, invoices, incident reports) follow a consistent layout:

- **Header:** Monarch logo (left) + document title (right) + navy top border (4px)
- **Body font:** Inter 11pt
- **Accent color:** Navy 600 for headings, teal 500 for highlights
- **Footer:** Company address, contact number, website — gray 400, 9pt
- **Page size:** A4

### Certificate Layout
- Large "Certificate of Completion" title centered
- Trainee name in 24pt bold navy
- Course name + date below
- Founder signature line at bottom left
- Monarch seal/stamp bottom right

### Invoice Layout
- Company details top left
- Invoice number + dates top right
- Client details block
- Line items table with subtotal, tax, total
- Payment instructions at bottom
- "PAID" stamp watermark when status = paid
