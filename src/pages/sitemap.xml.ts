import type { APIRoute } from 'astro';
import { LOCALES, LOCALE_KEYS } from '../i18n';

/** Pages that exist in every language (path after the language prefix). */
const PAGES = ['', 'about/', 'careers/', 'contact/', 'privacy/'];

/** sitemap.xml with hreflang alternates so search engines pair the language versions. */
export const GET: APIRoute = ({ site }) => {
  const url = (locale: string, page: string) => new URL(`/${locale}/${page}`, site).href;
  const entries = PAGES.flatMap((page) =>
    LOCALE_KEYS.map((locale) => {
      const alternates = LOCALE_KEYS.map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${LOCALES[alt].lang}" href="${url(alt, page)}"/>`,
      ).join('\n');
      return `  <url>\n    <loc>${url(locale, page)}</loc>\n${alternates}\n  </url>`;
    }),
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
