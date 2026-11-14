import type { APIRoute } from 'astro';

/** robots.txt: everything is public except the internal admin area and form endpoints. */
export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Disallow: /admin/', 'Disallow: /_actions/', '', `Sitemap: ${new URL('/sitemap.xml', site)}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
