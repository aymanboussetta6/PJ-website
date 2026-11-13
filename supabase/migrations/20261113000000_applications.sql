-- Candidatures reçues via le site. Accès uniquement côté serveur (clé service_role) :
-- RLS activé sans aucune policy => aucune lecture/écriture possible avec la clé publique.
create table if not exists public.applications (
  id uuid primary key,
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  domain text not null,
  languages text not null,
  message text,
  locale text not null,
  cv_path text not null,
  consent_at timestamptz not null
);

alter table public.applications enable row level security;

create index if not exists applications_created_at_idx on public.applications (created_at desc);

-- Bucket privé pour les CV (5 Mo max, PDF/DOC/DOCX).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cvs', 'cvs', false, 5242880,
  array['application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do nothing;

-- Rétention RGPD : supprimer les candidatures de plus de 24 mois.
-- À planifier (pg_cron ou tâche externe) ; les fichiers du bucket doivent être supprimés via l'API Storage.
create or replace function public.purge_old_applications() returns setof text
language sql security definer set search_path = public as $$
  delete from public.applications
  where created_at < now() - interval '24 months'
  returning cv_path;
$$;
revoke all on function public.purge_old_applications() from public, anon, authenticated;
