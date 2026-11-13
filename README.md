# PJ Website

Site vitrine multilingue (FR · EN · DE · SR latinica · SR ћирилица) avec formulaire de candidature.

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
| `src/i18n/translit.ts` | Le serbe cyrillique est **généré automatiquement** depuis `sr.ts` |
| `src/i18n/site.ts` | Nom de la société (PJ Telecom) et e-mails de contact |
| `src/pages/[lang]/` | Pages par langue (`/fr/`, `/en/`, `/de/`, `/sr/`, `/sr-cyrl/`) |
| `src/actions/index.ts` | Réception et validation des candidatures |
| `supabase/migrations/` | Table `applications` + bucket privé `cvs` |

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
