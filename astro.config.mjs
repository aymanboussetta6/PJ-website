// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
  env: {
    schema: {
      SUPABASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      SUPABASE_SERVICE_ROLE_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      SUPABASE_CV_BUCKET: envField.string({ context: 'server', access: 'public', default: 'cvs' }),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAIL_FROM: envField.string({ context: 'server', access: 'public', optional: true }),
      MAIL_TO_RECRUITING: envField.string({ context: 'server', access: 'public', optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
});
