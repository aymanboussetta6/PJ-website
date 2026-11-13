import { Resend } from 'resend';
import { RESEND_API_KEY, MAIL_FROM, MAIL_TO_RECRUITING } from 'astro:env/server';
import { fill, type Locale, getDictionary } from '../i18n';
import { SITE } from '../i18n/site';
import type { ApplicationRecord } from './storage';

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function isMailConfigured(): boolean {
  return Boolean(RESEND_API_KEY && MAIL_FROM);
}

/** Sends the candidate confirmation (in their language) and the internal alert. */
export async function sendApplicationEmails(app: ApplicationRecord, id: string, locale: Locale) {
  if (!RESEND_API_KEY || !MAIL_FROM) return;
  const resend = new Resend(RESEND_API_KEY);
  const t = getDictionary(locale);

  const jobs: Promise<unknown>[] = [
    resend.emails.send({
      from: MAIL_FROM,
      to: app.email,
      replyTo: SITE.recruitingEmail,
      subject: `${SITE.brand} — ${t.form.title}`,
      text: `${app.first_name},\n\n${fill(t.form.success)}\n\n${SITE.brand}`,
    }),
  ];

  if (MAIL_TO_RECRUITING) {
    const rows = Object.entries({ ...app, id })
      .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escape(String(v ?? ''))}</td></tr>`)
      .join('');
    jobs.push(
      resend.emails.send({
        from: MAIL_FROM,
        to: MAIL_TO_RECRUITING,
        replyTo: app.email,
        subject: `Nouvelle candidature — ${app.first_name} ${app.last_name} (${app.domain}, ${app.country})`,
        html: `<table cellpadding="4">${rows}</table><p>CV : bucket Supabase, dossier ${id}/</p>`,
      }),
    );
  }

  const results = await Promise.allSettled(jobs);
  for (const r of results) if (r.status === 'rejected') console.error('[mail]', r.reason);
}
