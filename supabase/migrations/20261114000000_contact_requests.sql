-- Demandes de contact professionnelles (clients, sous-traitants, fournisseurs).
-- Même principe que les candidatures : RLS activé sans policy, accès serveur uniquement.
create table if not exists public.contact_requests (
  id uuid primary key,
  created_at timestamptz not null default now(),
  requester_type text not null check (requester_type in ('client', 'subcontractor', 'supplier', 'other')),
  company text not null,
  full_name text not null,
  job_title text,
  email text not null,
  phone text,
  country text not null,
  trades text[] not null default '{}',
  message text not null,
  locale text not null,
  attachment_path text,
  consent_at timestamptz not null,
  handled_at timestamptz
);

alter table public.contact_requests enable row level security;

create index if not exists contact_requests_created_at_idx on public.contact_requests (created_at desc);
create index if not exists contact_requests_type_idx on public.contact_requests (requester_type);

-- Bucket privé pour les pièces jointes (PDF, 10 Mo max).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('contact-files', 'contact-files', false, 10485760, array['application/pdf'])
on conflict (id) do nothing;

-- Rétention RGPD : 3 ans après la demande (prospects / partenaires B2B).
create or replace function public.purge_old_contact_requests() returns setof text
language sql security definer set search_path = public as $$
  delete from public.contact_requests
  where created_at < now() - interval '36 months'
  returning attachment_path;
$$;
revoke all on function public.purge_old_contact_requests() from public, anon, authenticated;
