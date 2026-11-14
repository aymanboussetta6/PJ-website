# PJ Website

Site vitrine multilingue (FR · EN · DE · SR) avec formulaire de candidature.

**Stack :** Astro 7 · Tailwind CSS 4 · actions Astro (serverless Vercel) · Supabase (UE) · Resend · Cloudflare Turnstile.

## Démarrer

```bash
npm ci
cp .env.example .env   # facultatif en local : sans Supabase, les candidatures sont seulement loguées (mode dev)
npm run dev            # http://localhost:4321
npm run check && npm run build
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `src/i18n/ui/*.ts` | Textes par langue (`fr.ts` = référence et type) |
| `src/i18n/site.ts` | Nom de la société (PJ Telecom) et e-mails de contact |
| `src/pages/[lang]/` | Pages par langue (`/fr/`, `/en/`, `/de/`, `/sr/`) |
| `src/actions/index.ts` | Réception et validation des candidatures |
| `src/pages/admin/` | Espace d'administration (rendu à la demande) |
| `supabase/migrations/` | Tables `applications`, `contact_requests`, `job_offers` + buckets privés |

## Espace d'administration

`/admin/` (interne, non indexé) : candidatures, demandes de contact et offres d'emploi.

- Activé seulement si `ADMIN_PASSWORD` (12 caractères minimum) et `ADMIN_SESSION_SECRET`
  (32 caractères aléatoires minimum) sont définis dans les variables d'environnement.
- Un mot de passe partagé, puis un cookie de session signé valable 8 heures.
- Les fichiers (CV, pièces jointes) se téléchargent par des liens signés valables une minute.
- En local sans Supabase, les données sont gardées en mémoire le temps du serveur de dev.

## Mise en production

1. Créer un projet Supabase en région **UE (Francfort)** et exécuter la migration SQL.
2. Vérifier le domaine d'envoi dans Resend.
3. Créer un widget Cloudflare Turnstile.
4. Renseigner les variables de `.env.example` dans Vercel, puis déployer.

## Avant le lancement

- Remplacer le logo provisoire `PJ` et ajouter les photos (`src/assets/photos/`).
- Faire relire les traductions (surtout serbe et allemand) par des natifs.
- Faire valider la politique de confidentialité et ajouter les mentions légales.
- Planifier la purge RGPD (`purge_old_applications()`, 24 mois).
