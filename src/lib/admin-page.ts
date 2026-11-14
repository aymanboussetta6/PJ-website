import type { AstroGlobal } from 'astro';
import { isAuthenticated } from './admin-auth';

/** Guard for admin pages: returns a redirect to the login page unless the visitor is signed in. */
export function requireAdmin(Astro: AstroGlobal): Response | null {
  return isAuthenticated(Astro.cookies) ? null : Astro.redirect('/admin/login/');
}

const dateTime = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Paris' });
export const formatDate = (iso: string) => dateTime.format(new Date(iso));

const regions = new Intl.DisplayNames(['fr'], { type: 'region' });
export const countryName = (code: string) => (code === 'OTHER' ? 'Autre pays' : (regions.of(code) ?? code));

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const isUuid = (value: unknown): value is string => typeof value === 'string' && UUID.test(value);
