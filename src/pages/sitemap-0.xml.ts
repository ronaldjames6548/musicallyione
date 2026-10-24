import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * Custom sitemap (replaces @astrojs/sitemap) so the output is always uniform:
 *  - <url> entries grouped by language: en, es, id, vi
 *  - same page order inside each language group ("/" first, then A-Z)
 *  - every URL has the same hreflang block: en-US, es-ES, id-ID, vi-VN (only where the page exists) + x-default
 *  - trailing slash on every URL (matches canonical + <link rel="alternate" hreflang> in BaseLayout)
 */
const LANGS = ['en', 'es', 'id', 'vi'] as const;
type L = (typeof LANGS)[number];

const HREFLANG: Record<L, string> = { en: 'en-US', es: 'es-ES', id: 'id-ID', vi: 'vi-VN' };

// Every static page file (dynamic [...slug] and 404 pages are skipped; blog posts come from the collection)
const pageFiles = Object.keys(import.meta.glob('/src/pages/**/*.astro'));

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://musicaldown.se')).toString().replace(/\/$/, '');

  // language-neutral path (e.g. '/blog/') -> languages that have it
  const pages = new Map<string, Set<L>>();
  const add = (lang: L, neutralPath: string) => {
    if (!pages.has(neutralPath)) pages.set(neutralPath, new Set());
    pages.get(neutralPath)!.add(lang);
  };
  const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

  // 1) static pages
  for (const file of pageFiles) {
    let route = file.replace('/src/pages', '').replace(/\.astro$/, '');
    if (route.includes('[') || /(^|\/)404$/.test(route)) continue;
    route = route.replace(/\/index$/, '') || '/';

    const [, first, ...rest] = route.split('/');
    const lang: L = (LANGS as readonly string[]).includes(first) && first !== 'en' ? (first as L) : 'en';
    const neutral = lang === 'en' ? route : '/' + rest.join('/');
    add(lang, withSlash(neutral));
  }

  // 2) blog posts (src/content/blog/<lang>/<slug>)
  const posts = await getCollection('blog', ({ data }) => !data.draft && !data.noindex);
  for (const post of posts) {
    const [lang, ...slug] = post.id.split('/');
    if (!(LANGS as readonly string[]).includes(lang)) continue;
    add(lang as L, `/blog/${slug.join('/')}/`);
  }

  const urlFor = (lang: L, neutral: string) =>
    base + (lang === 'en' ? neutral : `/${lang}${neutral}`);

  // "/" first, then alphabetical
  const neutralPaths = [...pages.keys()].sort((a, b) =>
    a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)
  );

  const entries: string[] = [];
  for (const lang of LANGS) {
    for (const neutral of neutralPaths) {
      const langs = pages.get(neutral)!;
      if (!langs.has(lang)) continue;

      const links = LANGS.filter((l) => langs.has(l)).map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${urlFor(l, neutral)}"/>`
      );
      const defaultLang: L = langs.has('en') ? 'en' : LANGS.find((l) => langs.has(l))!;
      links.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(defaultLang, neutral)}"/>`
      );

      entries.push(`  <url>\n    <loc>${urlFor(lang, neutral)}</loc>\n${links.join('\n')}\n  </url>`);
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join('\n') +
    `\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
