import { Resend } from 'resend';
import { RESEND_API_KEY, MAIL_FROM, MAIL_TO_RECRUITING, MAIL_TO_CONTACT } from 'astro:env/server';
import { fill, type Locale, getDictionary } from '../i18n';
import { SITE } from '../i18n/site';
import type { ApplicationRecord, ContactRecord } from './storage';

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

  await settle(jobs);
}

const TYPE_LABELS: Record<string, string> = {
  client: 'Client',
  subcontractor: 'Sous-traitant',
  supplier: 'Fournisseur',
  other: 'Autre',
};

/** Acknowledges a contact request (in the sender's language) and alerts the team. */
export async function sendContactEmails(req: ContactRecord, id: string, locale: Locale, hasAttachment: boolean) {
  if (!RESEND_API_KEY || !MAIL_FROM) return;
  const resend = new Resend(RESEND_API_KEY);
  const t = getDictionary(locale);
  const to = MAIL_TO_CONTACT ?? MAIL_TO_RECRUITING;

  const jobs: Promise<unknown>[] = [
    resend.emails.send({
      from: MAIL_FROM,
      to: req.email,
      replyTo: SITE.email,
      subject: `${SITE.brand} — ${t.contactForm.title}`,
      text: `${req.full_name},\n\n${t.contactForm.success}\n\n${SITE.brand}`,
    }),
  ];
  if (to) {
    const rows = Object.entries({ ...req, trades: req.trades.join(', '), id })
      .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escape(String(v ?? ''))}</td></tr>`)
      .join('');
    jobs.push(
      resend.emails.send({
        from: MAIL_FROM,
        to,
        replyTo: req.email,
        subject: `[${TYPE_LABELS[req.requester_type] ?? req.requester_type}] ${req.company} — ${req.full_name}`,
        html: `<table cellpadding="4">${rows}</table>${hasAttachment ? `<p>Pièce jointe : bucket Supabase, dossier ${id}/</p>` : ''}`,
      }),
    );
  }
  await settle(jobs);
}

async function settle(jobs: Promise<unknown>[]) {
  const results = await Promise.allSettled(jobs);
  for (const r of results) if (r.status === 'rejected') console.error('[mail]', r.reason);
}
