# Setup Guide

How to install and run the Monarch Lifeguard CRM on your local machine.

---

## Prerequisites

Make sure you have these installed before starting:

| Tool | Version | Check |
|------|---------|-------|
| Node.js | 18+ | `node -v` |
| npm | 9+ | `npm -v` |
| PostgreSQL | 14+ | `psql --version` |
| Git | any | `git --version` |

---

## Step 1 — Clone the Repository

```bash
git clone https://github.com/yourusername/monarch-crm.git
cd monarch-crm
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

---

## Step 3 — Create the Database

Open PostgreSQL and create a new database:

```sql
CREATE DATABASE monarch_crm;
CREATE USER monarch_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE monarch_crm TO monarch_user;
```

---

## Step 4 — Configure Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://monarch_user:yourpassword@localhost:5432/monarch_crm"

NEXTAUTH_SECRET="generate-a-random-string-here"
NEXTAUTH_URL="http://localhost:3000"

NEXT_PUBLIC_APP_NAME="Monarch Lifeguard CRM"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

To generate a random `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

---

## Step 5 — Run Prisma Migrations

Generate the Prisma client and create all database tables:

```bash
npm run db:generate
npm run db:migrate
```

When prompted for a migration name, type something like: `initial_schema`

---

## Step 6 — Seed the Database

Load the sample data (admin user, clients, courses):

```bash
npm run db:seed
```

This creates:
- Admin login: `admin@monarchlifeguard.com` / `admin123`
- 3 sample clients
- 4 training courses

> **Change the admin password after first login.**

---

## Step 7 — Run the Development Server

```bash
npm run dev
```

Open your browser at: `http://localhost:3000`

Log in with: `admin@monarchlifeguard.com` / `admin123`

---

## Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build locally |
| `npm run db:studio` | Open Prisma Studio (visual DB browser) |
| `npm run db:migrate` | Apply new database migrations |
| `npm run db:seed` | Re-run the seed file |
| `npm run lint` | Check for code errors |

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/monarch-crm.git
git push -u origin main
```

### 2. Create a PostgreSQL database

Use one of these free/cheap options:
- **Supabase** — supabase.com (free tier)
- **Railway** — railway.app (~$5/month)
- **Neon** — neon.tech (free tier)

Copy the connection string they give you.

### 3. Deploy on Vercel

1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Add these environment variables in Vercel's dashboard:
   - `DATABASE_URL` — your hosted database connection string
   - `NEXTAUTH_SECRET` — same random string from before
   - `NEXTAUTH_URL` — your Vercel deployment URL (e.g. `https://monarch-crm.vercel.app`)
4. Deploy

### 4. Run migrations on the hosted database

After first deploy, run:
```bash
npx prisma migrate deploy
npm run db:seed
```

---

## Troubleshooting

**"Can't reach database server"**
- Make sure PostgreSQL is running: `sudo service postgresql start`
- Check your `DATABASE_URL` in `.env` — username, password, port, and database name

**"Module not found" errors**
- Run `npm install` again
- Delete `node_modules/` and `.next/` then re-run `npm install`

**Prisma Studio is blank**
- Run `npm run db:generate` first to regenerate the Prisma client

**Login not working**
- Check `NEXTAUTH_SECRET` is set in `.env`
- Make sure you ran `npm run db:seed` to create the admin user
