import fr, { type Dictionary } from './ui/fr';
import en from './ui/en';
import de from './ui/de';
import sr from './ui/sr';
import { transliterateDeep } from './translit';
import { SITE } from './site';

/** URL segment → locale metadata. Order = order in the language switcher. */
export const LOCALES = {
  fr: { lang: 'fr', label: 'Français', short: 'FR' },
  en: { lang: 'en', label: 'English', short: 'EN' },
  de: { lang: 'de', label: 'Deutsch', short: 'DE' },
  sr: { lang: 'sr-Latn', label: 'Srpski (latinica)', short: 'SR' },
  'sr-cyrl': { lang: 'sr-Cyrl', label: 'Српски (ћирилица)', short: 'СР' },
} as const;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'fr';
export const LOCALE_KEYS = Object.keys(LOCALES) as Locale[];

const DICTIONARIES: Record<Locale, Dictionary> = {
  fr,
  en,
  de,
  sr,
  'sr-cyrl': transliterateDeep(sr),
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && value in LOCALES;
}

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Replaces {brand} / {email} placeholders. */
export function fill(text: string): string {
  return text.replaceAll('{brand}', SITE.brand).replaceAll('{email}', SITE.email);
}

/** Path of the same page in another locale, e.g. ('/fr/privacy/', 'de') → '/de/privacy/'. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const [, , ...rest] = pathname.split('/');
  return `/${target}/${rest.join('/')}`.replace(/\/+$/, '/') ;
}

export const COUNTRY_CODES = [
  'FR', 'DE', 'RS', 'BA', 'ME', 'MK', 'HR', 'SI', 'AL', 'RO', 'BG', 'HU', 'PL', 'CZ', 'SK', 'UA', 'MD',
  'AT', 'CH', 'BE', 'LU', 'PT', 'ES', 'IT', 'MA', 'TN', 'DZ',
] as const;

export function countryOptions(locale: Locale) {
  const names = new Intl.DisplayNames([LOCALES[locale].lang], { type: 'region' });
  return COUNTRY_CODES.map((code) => ({ code, name: names.of(code) ?? code })).sort((a, b) =>
    a.name.localeCompare(b.name, LOCALES[locale].lang),
  );
}

export const DOMAIN_KEYS = ['studies', 'infra', 'radio', 'maintenance', 'fiber', 'civil', 'management', 'other'] as const;

/** Order of the activity cards on the home page (keys of dictionary.activities.items, and photo names). */
export const ACTIVITY_KEYS = ['studies', 'infra', 'radio', 'maintenance', 'fiber', 'civil'] as const;
