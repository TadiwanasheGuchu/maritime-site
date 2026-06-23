-- Monarch CRM — initial schema
-- Tables, enums, row-level security, and triggers for the core CRM entities.

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
create type user_role as enum ('admin', 'staff');
create type client_status as enum ('active', 'inactive', 'prospect');
create type invoice_status as enum ('draft', 'sent', 'paid', 'overdue');
create type incident_type as enum ('rescue', 'first_aid', 'search', 'other');
create type incident_status as enum ('open', 'processing', 'resolved');

-- ---------------------------------------------------------------------------
-- Shared helpers
-- ---------------------------------------------------------------------------
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Profiles (1:1 with auth.users)
-- ---------------------------------------------------------------------------
create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role user_role not null default 'staff',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger profiles_updated_at
  before update on profiles
  for each row execute function set_updated_at();

-- Auto-create a profile row when a new auth user signs up.
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ---------------------------------------------------------------------------
-- Clients & contacts
-- ---------------------------------------------------------------------------
create table clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status client_status not null default 'active',
  email text,
  phone text,
  address text,
  created_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger clients_updated_at
  before update on clients
  for each row execute function set_updated_at();

create table contacts (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients (id) on delete cascade,
  name text not null,
  email text,
  phone text,
  role text,
  created_at timestamptz not null default now()
);

create index contacts_client_id_idx on contacts (client_id);

-- ---------------------------------------------------------------------------
-- Invoices
-- ---------------------------------------------------------------------------
create table invoices (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients (id) on delete set null,
  number text not null unique,
  status invoice_status not null default 'draft',
  issued_at date,
  due_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger invoices_updated_at
  before update on invoices
  for each row execute function set_updated_at();

create index invoices_client_id_idx on invoices (client_id);
create index invoices_status_idx on invoices (status);

create table invoice_items (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references invoices (id) on delete cascade,
  description text not null,
  quantity numeric not null default 1,
  unit_amount_cents integer not null default 0
);

create index invoice_items_invoice_id_idx on invoice_items (invoice_id);

-- ---------------------------------------------------------------------------
-- Incidents
-- ---------------------------------------------------------------------------
create table incidents (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  location text not null,
  type incident_type not null,
  status incident_status not null default 'open',
  occurred_at timestamptz not null default now(),
  notes text,
  created_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger incidents_updated_at
  before update on incidents
  for each row execute function set_updated_at();

create index incidents_status_idx on incidents (status);

-- ---------------------------------------------------------------------------
-- Deployments
-- ---------------------------------------------------------------------------
create table deployments (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text,
  lifeguards_count integer not null default 0,
  scheduled_for date,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row-Level Security
-- All CRM users are authenticated staff, so authenticated users get full
-- access for now. Tighten by role (admin vs staff) as workflows are built out.
-- ---------------------------------------------------------------------------
alter table profiles enable row level security;
alter table clients enable row level security;
alter table contacts enable row level security;
alter table invoices enable row level security;
alter table invoice_items enable row level security;
alter table incidents enable row level security;
alter table deployments enable row level security;

create policy "profiles_select" on profiles
  for select to authenticated using (true);
create policy "profiles_update_own" on profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

create policy "clients_all" on clients
  for all to authenticated using (true) with check (true);
create policy "contacts_all" on contacts
  for all to authenticated using (true) with check (true);
create policy "invoices_all" on invoices
  for all to authenticated using (true) with check (true);
create policy "invoice_items_all" on invoice_items
  for all to authenticated using (true) with check (true);
create policy "incidents_all" on incidents
  for all to authenticated using (true) with check (true);
create policy "deployments_all" on deployments
  for all to authenticated using (true) with check (true);
