# Database Schema

All tables, fields, types, and relationships for the Monarch Lifeguard CRM PostgreSQL database.

---

## Overview — Entity Relationships

```
users
  (manages the system)

clients ──────────────── deployments ─────── lifeguards
  │                           │
  └── invoices                └── incidents
        └── invoice_items

trainees ── enrollments ── courses
                └── certificate (generated)
```

---

## Tables

---

### `users`
System login accounts (admin, manager, staff).

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| name | VARCHAR(100) | Full name |
| email | VARCHAR(150) | Unique, used for login |
| password | VARCHAR(255) | Bcrypt hashed |
| role | ENUM | `ADMIN`, `MANAGER`, `STAFF` |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

---

### `clients`
Organisations that Monarch provides services to.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| name | VARCHAR(150) | Organisation name |
| type | ENUM | See ClientType below |
| contact_name | VARCHAR(100) | Primary contact person |
| email | VARCHAR(150) | Optional |
| phone | VARCHAR(20) | Optional |
| address | TEXT | Optional |
| notes | TEXT | Internal notes |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

**ClientType values:** `MUNICIPALITY`, `PRIVATE_COMPANY`, `HOTEL_RESORT`, `SCHOOL`, `NGO`, `OTHER`

---

### `lifeguards`
Staff members who can be deployed.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| first_name | VARCHAR(60) | |
| last_name | VARCHAR(60) | |
| email | VARCHAR(150) | Optional |
| phone | VARCHAR(20) | Required |
| cert_level | VARCHAR(80) | e.g. "Basic Lifeguard", "Advanced" |
| cert_expiry | DATE | Optional — when cert expires |
| active | BOOLEAN | Default true |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

---

### `courses`
Training courses offered by Monarch.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| name | VARCHAR(150) | e.g. "First Aid Level 1" |
| description | TEXT | Optional |
| duration | INT | Hours |
| price | DECIMAL(10,2) | Price in NAD |
| active | BOOLEAN | Whether currently offered |
| created_at | TIMESTAMP | Auto |

---

### `trainees`
People enrolled in training courses.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| first_name | VARCHAR(60) | |
| last_name | VARCHAR(60) | |
| email | VARCHAR(150) | Optional |
| phone | VARCHAR(20) | Optional |
| dob | DATE | Date of birth, optional |
| id_number | VARCHAR(30) | National ID, optional |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

---

### `enrollments`
Links a trainee to a course. Tracks progress and certificate.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| trainee_id | CUID | FK → trainees.id |
| course_id | CUID | FK → courses.id |
| start_date | DATE | When training started |
| end_date | DATE | Optional — when completed |
| status | ENUM | See EnrollmentStatus below |
| grade | DECIMAL(5,2) | Optional final grade (%) |
| cert_issued | BOOLEAN | Default false |
| cert_url | VARCHAR(255) | Path to generated PDF |
| created_at | TIMESTAMP | Auto |

**EnrollmentStatus values:** `ENROLLED`, `IN_PROGRESS`, `PASSED`, `FAILED`, `WITHDRAWN`

---

### `deployments`
Scheduled assignments of lifeguards to a location/client.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| client_id | CUID | FK → clients.id |
| location | VARCHAR(200) | Beach name, pool name etc. |
| start_date | DATETIME | Deployment start |
| end_date | DATETIME | Optional end date |
| shift | VARCHAR(80) | e.g. "08:00–16:00" |
| status | ENUM | See DeploymentStatus below |
| notes | TEXT | Optional |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

**DeploymentStatus values:** `SCHEDULED`, `ACTIVE`, `COMPLETED`, `CANCELLED`

---

### `deployment_lifeguards` *(join table)*
Many-to-many between deployments and lifeguards.

| Column | Type | Notes |
|--------|------|-------|
| deployment_id | CUID | FK → deployments.id |
| lifeguard_id | CUID | FK → lifeguards.id |

---

### `incidents`
Emergency incidents logged by lifeguards on duty.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| deployment_id | CUID | FK → deployments.id (optional) |
| lifeguard_id | CUID | FK → lifeguards.id (optional) |
| date | DATETIME | When it happened |
| location | VARCHAR(200) | Where it happened |
| type | ENUM | See IncidentType below |
| severity | ENUM | `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| description | TEXT | Full incident description |
| outcome | TEXT | Optional — what happened after |
| reported_by | VARCHAR(100) | Name of person who reported |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

**IncidentType values:** `DROWNING`, `NEAR_DROWNING`, `INJURY`, `MEDICAL`, `MISSING_PERSON`, `OTHER`

---

### `invoices`
Billing documents sent to clients.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| client_id | CUID | FK → clients.id |
| number | VARCHAR(20) | Unique e.g. "INV-2024-001" |
| issue_date | DATE | Default today |
| due_date | DATE | Payment deadline |
| status | ENUM | See InvoiceStatus below |
| subtotal | DECIMAL(10,2) | Before tax |
| tax | DECIMAL(10,2) | Default 0 (15% VAT if applicable) |
| total | DECIMAL(10,2) | subtotal + tax |
| notes | TEXT | Payment instructions, terms |
| created_at | TIMESTAMP | Auto |
| updated_at | TIMESTAMP | Auto |

**InvoiceStatus values:** `DRAFT`, `SENT`, `PAID`, `OVERDUE`, `CANCELLED`

---

### `invoice_items`
Line items on an invoice.

| Column | Type | Notes |
|--------|------|-------|
| id | CUID | Primary key |
| invoice_id | CUID | FK → invoices.id |
| description | VARCHAR(255) | e.g. "Lifeguard services — March 2024" |
| quantity | INT | Number of units |
| unit_price | DECIMAL(10,2) | Price per unit in NAD |
| total | DECIMAL(10,2) | quantity × unit_price |

---

## Indexes to Create

```sql
-- Fast lookup by status
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_deployments_status ON deployments(status);
CREATE INDEX idx_enrollments_status ON enrollments(status);

-- Fast lookup by client
CREATE INDEX idx_invoices_client ON invoices(client_id);
CREATE INDEX idx_deployments_client ON deployments(client_id);

-- Date-based sorting
CREATE INDEX idx_incidents_date ON incidents(date DESC);
CREATE INDEX idx_invoices_due_date ON invoices(due_date);
```

---

## Seed Data

On first setup, seed the database with:

- 1 admin user (Marthin Muyenga)
- 3 clients (Walvis Bay Municipality, Otjiwarongo Municipality, Debmarine Namibia)
- 4 courses (Basic Lifeguarding, First Aid Level 1, Advanced Water Rescue, Pool Lifeguard)
- 2 sample lifeguards
- 1 sample deployment
- 1 sample invoice (DRAFT)
