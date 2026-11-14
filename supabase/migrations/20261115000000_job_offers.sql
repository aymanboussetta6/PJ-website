-- Offres d'emploi gérées depuis l'espace d'administration (/admin/jobs/).
-- RLS activé sans policy : lecture et écriture uniquement par le serveur (clé service_role).
create table if not exists public.job_offers (
  id uuid primary key,
  created_at timestamptz not null default now(),
  title text not null,
  location text not null,
  contract text not null,
  domain text not null,
  description text not null,
  published boolean not null default false
);
alter table public.job_offers enable row level security;
create index if not exists job_offers_published_idx on public.job_offers (published, created_at desc);

-- Lien entre une candidature et l'offre à laquelle elle répond (vide pour une candidature spontanée).
alter table public.applications
  add column if not exists job_offer_id uuid references public.job_offers (id) on delete set null,
  add column if not exists job_title text;
