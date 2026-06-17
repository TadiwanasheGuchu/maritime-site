# API Reference

All API routes for the Monarch Lifeguard CRM. Built with Next.js API Routes. All endpoints require authentication unless marked public.

Base URL: `/api`

---

## Authentication

### `POST /api/auth/login`
Sign in with email and password.

**Request body:**
```json
{
  "email": "admin@monarchlifeguard.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "user": { "id": "...", "name": "Marthin Muyenga", "role": "ADMIN" },
  "token": "..."
}
```

---

## Clients

### `GET /api/clients`
List all clients.

**Query params:**
| Param | Type | Example |
|-------|------|---------|
| search | string | `?search=walvis` |
| type | string | `?type=MUNICIPALITY` |
| page | number | `?page=2` |
| limit | number | `?limit=20` |

**Response:** Array of client objects.

---

### `POST /api/clients`
Create a new client.

**Request body:**
```json
{
  "name": "Swakopmund Municipality",
  "type": "MUNICIPALITY",
  "contactName": "Mr J Smith",
  "email": "info@swakop.gov.na",
  "phone": "064402000",
  "address": "12 Main Street, Swakopmund"
}
```

---

### `GET /api/clients/:id`
Get a single client including their linked invoices and deployments.

---

### `PATCH /api/clients/:id`
Update a client. Send only the fields to change.

---

### `DELETE /api/clients/:id`
Delete a client. Fails if they have linked invoices.

---

## Trainees

### `GET /api/trainees`
List all trainees.

**Query params:** `search`, `page`, `limit`

---

### `POST /api/trainees`
Register a new trainee.

**Request body:**
```json
{
  "firstName": "Amara",
  "lastName": "Hamutenya",
  "email": "amara@example.com",
  "phone": "0811234567",
  "dob": "2000-04-15",
  "idNumber": "00041500123"
}
```

---

### `GET /api/trainees/:id`
Get trainee with their full enrollment history.

---

### `PATCH /api/trainees/:id`
Update trainee details.

---

### `DELETE /api/trainees/:id`
Delete a trainee.

---

## Enrollments

### `GET /api/enrollments`
List enrollments. Filter by trainee or course.

**Query params:** `traineeId`, `courseId`, `status`

---

### `POST /api/enrollments`
Enroll a trainee in a course.

**Request body:**
```json
{
  "traineeId": "cuid...",
  "courseId": "cuid...",
  "startDate": "2024-03-01"
}
```

---

### `PATCH /api/enrollments/:id`
Update enrollment status, grade, or end date.

**Request body:**
```json
{
  "status": "PASSED",
  "grade": 87.5,
  "endDate": "2024-03-15"
}
```

---

### `POST /api/enrollments/:id/certificate`
Generate and save the PDF certificate for a passed enrollment.

**Response:**
```json
{
  "certUrl": "/certificates/cert-cuid.pdf",
  "certIssued": true
}
```

---

## Lifeguards

### `GET /api/lifeguards`
List all lifeguards.

**Query params:** `active` (true/false), `search`

---

### `POST /api/lifeguards`
Add a new lifeguard.

---

### `GET /api/lifeguards/:id`
Get lifeguard with their deployment history.

---

### `PATCH /api/lifeguards/:id`
Update lifeguard details.

---

## Deployments

### `GET /api/deployments`
List all deployments.

**Query params:**
| Param | Type | Example |
|-------|------|---------|
| status | string | `?status=ACTIVE` |
| clientId | string | Filter by client |
| from | date | `?from=2024-03-01` |
| to | date | `?to=2024-03-31` |

---

### `POST /api/deployments`
Schedule a new deployment.

**Request body:**
```json
{
  "clientId": "cuid...",
  "location": "Independence Beach, Walvis Bay",
  "startDate": "2024-03-01T08:00:00",
  "endDate": "2024-03-01T18:00:00",
  "shift": "08:00–18:00",
  "lifeguardIds": ["cuid1", "cuid2"]
}
```

---

### `GET /api/deployments/:id`
Get deployment detail including assigned lifeguards and incidents.

---

### `PATCH /api/deployments/:id`
Update deployment details or status.

---

## Incidents

### `GET /api/incidents`
List all incidents, newest first.

**Query params:** `type`, `severity`, `from`, `to`, `deploymentId`

---

### `POST /api/incidents`
Log a new incident.

**Request body:**
```json
{
  "deploymentId": "cuid...",
  "lifeguardId": "cuid...",
  "date": "2024-03-15T14:30:00",
  "location": "Independence Beach — Zone 3",
  "type": "NEAR_DROWNING",
  "severity": "HIGH",
  "description": "Two children swept by current near zone 3. Lifeguard performed water rescue. Both recovered on beach.",
  "outcome": "Referred to Welwitchia Hospital for observation. Discharged same day.",
  "reportedBy": "Lifeguard J. Haoses"
}
```

---

### `GET /api/incidents/:id`
Get full incident detail.

---

### `PATCH /api/incidents/:id`
Update incident record.

---

## Invoices

### `GET /api/invoices`
List all invoices.

**Query params:** `status`, `clientId`, `from`, `to`

---

### `POST /api/invoices`
Create a new invoice.

**Request body:**
```json
{
  "clientId": "cuid...",
  "dueDate": "2024-04-30",
  "items": [
    {
      "description": "Lifeguard services — Independence Beach (March 2024)",
      "quantity": 20,
      "unitPrice": 500
    },
    {
      "description": "First Aid training — 5 staff members",
      "quantity": 5,
      "unitPrice": 800
    }
  ],
  "tax": 0,
  "notes": "Payment due within 30 days. EFT to Monarch Lifeguard account."
}
```

---

### `GET /api/invoices/:id`
Get invoice with all line items and client info.

---

### `PATCH /api/invoices/:id`
Update invoice status or details.

---

### `GET /api/invoices/:id/pdf`
Generate and return the invoice as a downloadable PDF.

---

## Reports

### `GET /api/reports/summary`
Return dashboard KPIs.

**Response:**
```json
{
  "activeClients": 12,
  "activeDeployments": 4,
  "incidentsThisMonth": 3,
  "traineesEnrolled": 28,
  "overdueInvoices": 2,
  "revenueThisMonth": 45000
}
```

---

### `GET /api/reports/incidents`
Monthly incident breakdown by type and severity.

**Query params:** `year`, `month`

---

### `GET /api/reports/revenue`
Monthly revenue totals for chart display.

**Query params:** `year`

---

## Error Responses

All errors follow this format:

```json
{
  "error": "Not found",
  "message": "Client with ID cuid123 does not exist",
  "statusCode": 404
}
```

**Status codes used:**

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad request / validation error |
| 401 | Not authenticated |
| 403 | Not authorized (wrong role) |
| 404 | Resource not found |
| 500 | Server error |
