import { defineAction, ActionError, type ActionAPIContext } from 'astro:actions';
import { z } from 'astro/zod';
import { ACTIVITY_KEYS, COUNTRY_CODES, DOMAIN_KEYS, LOCALE_KEYS, type Locale } from '../i18n';
import { verifyTurnstile } from '../lib/turnstile';
import {
  isStorageConfigured,
  saveApplication,
  saveContactRequest,
  type ApplicationRecord,
  type ContactRecord,
} from '../lib/storage';
import { sendApplicationEmails, sendContactEmails } from '../lib/mail';

const MB = 1024 * 1024;
const CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const CV_EXT = /\.(pdf|docx?)$/i;

export const REQUESTER_TYPES = ['client', 'subcontractor', 'supplier', 'other'] as const;

const text = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional();
const phone = z.string().trim().min(6).max(30).regex(/^[+\d\s().-]+$/);

/** Fields shared by every public form: language, consent, anti-spam. */
const common = {
  consent: z.literal('on'),
  locale: z.enum(LOCALE_KEYS as [Locale, ...Locale[]]),
  website: z.string().max(0).optional(), // honeypot: must stay empty
  'cf-turnstile-response': z.string().optional(),
};

async function guard(token: string | undefined, context: ActionAPIContext) {
  let ip: string | undefined;
  try {
    ip = context.clientAddress;
  } catch {
    ip = undefined;
  }
  if (!(await verifyTurnstile(token, ip))) {
    throw new ActionError({ code: 'FORBIDDEN', message: 'captcha' });
  }
}

/** Runs `save` when Supabase is configured; in dev without Supabase, only logs. */
async function persist<T>(label: string, record: unknown, save: () => Promise<T>): Promise<T | 'dev'> {
  if (!isStorageConfigured()) {
    if (import.meta.env.DEV) {
      console.warn(`[${label}] Supabase non configuré — rien n'est enregistré (mode dev).`, record);
      return 'dev';
    }
    throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'storage_not_configured' });
  }
  try {
    return await save();
  } catch (err) {
    console.error(`[${label}]`, err);
    throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'save_failed' });
  }
}

export const server = {
  apply: defineAction({
    accept: 'form',
    input: z.object({
      firstName: text(80),
      lastName: text(80),
      email: z.email().max(200),
      phone,
      country: z.enum([...COUNTRY_CODES, 'OTHER']),
      domain: z.enum(DOMAIN_KEYS),
      languages: text(200),
      message: optionalText(2000),
      cv: z
        .instanceof(File)
        .refine((f) => f.size > 0 && f.size <= 5 * MB, 'file_size')
        .refine((f) => CV_EXT.test(f.name) && (!f.type || CV_TYPES.includes(f.type)), 'file_type'),
      ...common,
    }),
    handler: async (input, context) => {
      await guard(input['cf-turnstile-response'], context);
      const record: ApplicationRecord = {
        first_name: input.firstName,
        last_name: input.lastName,
        email: input.email,
        phone: input.phone,
        country: input.country,
        domain: input.domain,
        languages: input.languages,
        message: input.message || null,
        locale: input.locale,
        consent_at: new Date().toISOString(),
      };
      const id = await persist('apply', record, async () => {
        const id = await saveApplication(record, input.cv);
        await sendApplicationEmails(record, id, input.locale);
        return id;
      });
      return { ok: true, id };
    },
  }),

  contact: defineAction({
    accept: 'form',
    input: z.object({
      requesterType: z.enum(REQUESTER_TYPES),
      company: text(120),
      fullName: text(120),
      jobTitle: optionalText(120),
      email: z.email().max(200),
      phone: z.union([z.literal(''), phone]).optional(),
      country: z.enum([...COUNTRY_CODES, 'OTHER']),
      trades: z.array(z.enum(ACTIVITY_KEYS)).max(ACTIVITY_KEYS.length).optional(),
      message: text(3000),
      // An empty file input is sent as a 0-byte File: treat it as "no attachment".
      attachment: z
        .instanceof(File)
        .optional()
        .refine((f) => !f || f.size === 0 || (f.size <= 10 * MB && /\.pdf$/i.test(f.name)), 'file_type'),
      ...common,
    }),
    handler: async (input, context) => {
      await guard(input['cf-turnstile-response'], context);
      const attachment = input.attachment && input.attachment.size > 0 ? input.attachment : undefined;
      const record: ContactRecord = {
        requester_type: input.requesterType,
        company: input.company,
        full_name: input.fullName,
        job_title: input.jobTitle || null,
        email: input.email,
        phone: input.phone || null,
        country: input.country,
        trades: input.requesterType === 'subcontractor' ? (input.trades ?? []) : [],
        message: input.message,
        locale: input.locale,
        consent_at: new Date().toISOString(),
      };
      const id = await persist('contact', record, async () => {
        const id = await saveContactRequest(record, attachment);
        await sendContactEmails(record, id, input.locale, Boolean(attachment));
        return id;
      });
      return { ok: true, id };
    },
  }),
};
