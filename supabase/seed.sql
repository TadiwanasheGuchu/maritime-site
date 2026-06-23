-- Sample CRM data for development. Run against a fresh database after the
-- migration. Mirrors the dashboard demo content so wired screens show real rows.

insert into clients (name, status, email, phone, address) values
  ('Blue Bay Resort', 'active', 'ops@bluebay.example', '+264 64 000 0001', 'Walvis Bay'),
  ('Crystal Cove HOA', 'active', 'admin@crystalcove.example', '+264 64 000 0002', 'Swakopmund'),
  ('City of Walvis Bay', 'active', 'parks@walvisbay.example', '+264 64 000 0003', 'Walvis Bay'),
  ('Sunset Beach Events', 'prospect', 'hello@sunsetevents.example', '+264 64 000 0004', 'Long Beach');

insert into deployments (title, location, lifeguards_count, scheduled_for) values
  ('Marathon Water Safety', 'Downtown Pier', 8, '2026-10-24'),
  ('Surf Masters Qualifiers', 'Sunset Beach', 14, '2026-10-26'),
  ('Private Event Coverage', 'Villa Aqua', 2, '2026-10-30'),
  ('Annual Harbor Swim', 'South Harbor', 22, '2026-11-02');

insert into incidents (code, location, type, status, occurred_at) values
  ('INC-9042', 'North Beach Sector 4', 'rescue', 'resolved', now() - interval '2 hours'),
  ('INC-9041', 'Blue Bay Resort', 'first_aid', 'processing', now() - interval '5 hours'),
  ('INC-9040', 'Crystal Cove', 'rescue', 'resolved', now() - interval '1 day'),
  ('INC-9039', 'Main Beach Jetty', 'first_aid', 'resolved', now() - interval '1 day');

insert into invoices (client_id, number, status, issued_at, due_at)
select id, 'INV-1001', 'overdue', current_date - 40, current_date - 10
from clients where name = 'Blue Bay Resort';

insert into invoices (client_id, number, status, issued_at, due_at)
select id, 'INV-1002', 'sent', current_date - 5, current_date + 25
from clients where name = 'City of Walvis Bay';
