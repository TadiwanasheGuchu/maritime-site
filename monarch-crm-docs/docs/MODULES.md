# CRM Modules

Detailed breakdown of each module — what it does, what data it manages, and what actions a user can take.

---

## 1. Dashboard

The first thing users see after login. A real-time overview of the entire operation.

### KPI Cards (top row)
- Active Clients
- Active Deployments (today)
- Incidents This Month
- Overdue Invoices
- Trainees Currently Enrolled
- Revenue This Month (NAD)

### Widgets
- **Recent Incidents** — last 5 incidents with severity badge, location, date
- **Upcoming Deployments** — next 7 days, showing location + assigned lifeguards
- **Pending Invoices** — invoices with status SENT or OVERDUE, sorted by due date
- **Course Completion Rate** — simple bar showing % passed vs enrolled this month

### Access
- All roles can view the dashboard
- STAFF only see their own deployments and incidents

---

## 2. Clients

Manage all organisations that Monarch provides services to.

### List View
- Table with: Name, Type, Contact, Phone, Active Deployments, Total Invoiced
- Filter by: Type (Municipality, Company, Resort, etc.)
- Search by name or contact
- Sort by name, date added

### Client Detail Page
- Contact information card
- Linked deployments (list with status badges)
- Linked invoices (list with amount + status)
- Notes section (internal)
- Quick action: "New Invoice", "New Deployment"

### Actions
- Create client
- Edit client
- Delete client (blocked if linked invoices exist)

---

## 3. Trainees

Register and track people going through Monarch's training programmes.

### List View
- Table: Name, Phone, Courses Enrolled, Status, Certificate
- Filter by: Course, Status (Enrolled, Passed, Failed)
- Search by name or ID number

### Trainee Profile Page
- Personal details card
- Enrollment history table (course, dates, grade, status)
- Certificate download button (if passed)

### Enrollments
- Enroll a trainee in a course from their profile
- Update status as training progresses
- Enter final grade
- Mark as passed → triggers certificate generation

### Certificate Generation
- Auto-generates a PDF certificate on passing
- Certificate includes: trainee name, course name, date, founder signature, Monarch logo
- Stored in `/public/certificates/`
- Can be re-downloaded at any time from the profile

### Actions
- Register new trainee
- Edit trainee details
- Enroll in a course
- Update enrollment status + grade
- Generate / re-generate certificate
- View certificate PDF

---

## 4. Deployments

Schedule and manage lifeguard assignments at beaches, pools, and events.

### List View
- Table: Location, Client, Date/Time, Shift, Lifeguards Assigned, Status
- Filter by: Status, Client, Date range
- Calendar view (optional — shows deployments on a monthly calendar)

### Deployment Detail Page
- Location + client info
- Date, time, shift details
- Assigned lifeguards (with contact info)
- Linked incidents at this deployment
- Status controls: mark as Active, Completed, Cancelled

### Roster
- Add / remove lifeguards from a deployment
- Shows cert level and cert expiry for each lifeguard

### Actions
- Schedule new deployment
- Edit deployment
- Change status
- Add/remove assigned lifeguards
- Log incident (links to Incidents module)

---

## 5. Incidents

Log and track emergency incidents and responses.

### List View
- Table: Date, Location, Type, Severity, Lifeguard, Outcome
- Filter by: Type, Severity, Date range
- Color-coded severity: LOW (gray), MEDIUM (amber), HIGH (orange), CRITICAL (red)

### Incident Detail Page
- Full incident information
- Linked deployment (if applicable)
- Lifeguard on duty
- Description and outcome
- Printable incident report (PDF)

### Incident Report PDF
- Official Monarch letterhead
- Incident number, date, location
- Full description
- Lifeguard name + signature line
- Outcome + follow-up notes
- Used for municipality reporting, legal records

### Actions
- Log new incident
- Edit incident
- Export incident report as PDF
- Filter and export incident list (CSV)

---

## 6. Invoices

Create, send, and track billing for all client services.

### List View
- Table: Invoice #, Client, Date, Due Date, Amount, Status
- Filter by: Status (Draft, Sent, Paid, Overdue)
- Overdue invoices highlighted in red
- Summary bar: Total outstanding NAD

### Invoice Detail Page
- Client info block
- Invoice number + dates
- Line items table
- Subtotal, tax, total
- Status controls: mark as Sent, Paid, Cancelled
- Download PDF button

### Invoice PDF
- Professional A4 layout
- Monarch header with logo
- Client billing address
- Itemised services table
- NAD amounts
- Payment instructions
- "PAID" watermark when status = Paid

### Invoice Numbering
- Auto-generated: `INV-YYYY-NNN` (e.g. INV-2024-017)

### Actions
- Create new invoice (select client, add line items)
- Edit invoice (only DRAFT status)
- Change status
- Download invoice PDF
- Send by email (future feature)

---

## 7. Documents

Central library of all generated PDFs.

### What Appears Here
- Training certificates (from Trainees module)
- Incident reports (from Incidents module)
- Invoice PDFs (from Invoices module)

### List View
- Table: Document Name, Type, Related To, Date Generated, Download
- Filter by: Type (Certificate, Invoice, Incident Report)
- Search by trainee name, invoice number, or incident ID

### Actions
- Download any document
- Re-generate a document (e.g. re-issue a certificate)
- Delete document

---

## 8. Reports

Analytics and exportable data for management and reporting to stakeholders.

### Built-in Reports

| Report | Description |
|--------|-------------|
| Monthly Incidents | Incidents by type and severity per month |
| Revenue Summary | Monthly revenue chart (NAD) |
| Trainee Completion Rate | Pass/fail rates per course |
| Deployment Summary | Hours deployed per client per month |
| Outstanding Invoices | All unpaid invoices with ageing (30/60/90 days) |

### Export Options
- Export any report as **CSV** (for Excel)
- Export any report as **PDF** (for printing / sending to municipalities)

### Access
- ADMIN and MANAGER can view all reports
- STAFF cannot access reports

---

## 9. Settings

System configuration and user management.

### Sections

**Company Info**
- Company name, address, phone, email, logo upload
- Used in PDF headers

**Users**
- List of system users
- Invite new user (sends email with temp password)
- Change user role
- Deactivate user

**Courses**
- Add / edit / deactivate training courses
- Set price and duration

**Account**
- Change own password
- Update own profile

### Access
- Only ADMIN can manage users and company info
- All roles can update their own account
