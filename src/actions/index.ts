import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { COUNTRY_CODES, DOMAIN_KEYS, LOCALE_KEYS, type Locale } from '../i18n';
import { verifyTurnstile } from '../lib/turnstile';
import { isStorageConfigured, saveApplication, type ApplicationRecord } from '../lib/storage';
import { sendApplicationEmails } from '../lib/mail';

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const CV_EXT = /\.(pdf|docx?)$/i;

const text = (max: number) => z.string().trim().min(1).max(max);

export const server = {
  apply: defineAction({
    accept: 'form',
    input: z.object({
      firstName: text(80),
      lastName: text(80),
      email: z.email().max(200),
      phone: z.string().trim().min(6).max(30).regex(/^[+\d\s().-]+$/),
      country: z.enum([...COUNTRY_CODES, 'OTHER']),
      domain: z.enum(DOMAIN_KEYS),
      languages: text(200),
      message: z.string().trim().max(2000).optional(),
      cv: z
        .instanceof(File)
        .refine((f) => f.size > 0 && f.size <= MAX_CV_BYTES, 'file_size')
        .refine((f) => CV_EXT.test(f.name) && (!f.type || CV_TYPES.includes(f.type)), 'file_type'),
      consent: z.literal('on'),
      locale: z.enum(LOCALE_KEYS as [Locale, ...Locale[]]),
      website: z.string().max(0).optional(), // honeypot: must stay empty
      'cf-turnstile-response': z.string().optional(),
    }),
    handler: async (input, context) => {
      let ip: string | undefined;
      try {
        ip = context.clientAddress;
      } catch {
        ip = undefined;
      }
      if (!(await verifyTurnstile(input['cf-turnstile-response'], ip))) {
        throw new ActionError({ code: 'FORBIDDEN', message: 'captcha' });
      }

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

      if (!isStorageConfigured()) {
        if (import.meta.env.DEV) {
          console.warn('[apply] Supabase non configuré — candidature non enregistrée (mode dev).', record);
          return { ok: true, id: 'dev' };
        }
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'storage_not_configured' });
      }

      try {
        const id = await saveApplication(record, input.cv);
        await sendApplicationEmails(record, id, input.locale);
        return { ok: true, id };
      } catch (err) {
        console.error('[apply]', err);
        throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'save_failed' });
      }
    },
  }),
};
