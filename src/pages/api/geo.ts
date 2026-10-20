// GET /api/geo  ->  { locale, country, source }
// Tells the browser which language this visitor should see.
// Country comes from Vercel's geo header (or Cloudflare's); falls back to the browser language.
// Testing: /api/geo?country=ID   (also works as  /?geo=ID  on the home page)
import type { APIRoute } from 'astro';
import { detectLocale } from '../../i18n/geo';

export const prerender = false;

export const GET: APIRoute = ({ request, url }) => {
  const override = url.searchParams.get('country');
  const country =
    (override ||
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      '')
      .trim()
      .toUpperCase()
      .slice(0, 2) || null;

  const { locale, source } = detectLocale({
    country,
    acceptLanguage: request.headers.get('accept-language'),
    userAgent: request.headers.get('user-agent'),
  });

  return new Response(JSON.stringify({ locale, country, source }), {
    headers: {
      'Content-Type': 'application/json',
      // Depends on who is asking, so it must never be cached by a CDN.
      'Cache-Control': 'private, no-store',
    },
  });
};
