/**
 * Geo / language detection used to send first-time visitors to their native language.
 *
 * To add a language later:
 *   1. add it to `ENABLED_LOCALES` below
 *   2. add its dictionary + name in src/i18n/ui.ts
 *   3. add its pages under src/pages/<code>/ and list them in LOCALE_PAGES (src/i18n/utils.ts)
 * The country list is already prepared for all the languages tiktokio.cam used.
 */

export const DEFAULT_LOCALE = 'en';

/** Languages that really exist on the site. Visitors are only ever sent to these. */
export const ENABLED_LOCALES = ['en', 'es', 'id', 'vi'] as const;

/** Cookie written by the language picker (an explicit choice always wins over geo detection). */
export const LOCALE_COOKIE = 'user-locale';

const COUNTRY_GROUPS: Record<string, string[]> = {
  id: ['ID'],
  vi: ['VN'],
  hi: ['IN'],
  tl: ['PH'],
  ms: ['MY'],
  ko: ['KR'],
  ar: ['SA', 'AE', 'EG', 'MA', 'DZ', 'IQ', 'JO', 'KW', 'LB', 'OM', 'QA', 'SY', 'YE', 'BH', 'TN', 'LY'],
  es: ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'],
  fr: ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'CI', 'CM', 'CD', 'MG', 'SN', 'ML'],
  pt: ['PT', 'BR', 'AO', 'MZ'],
  de: ['DE', 'AT', 'LI'],
  it: ['IT', 'SM', 'VA'],
  nl: ['NL', 'SR'],
  ru: ['RU', 'BY', 'KZ', 'KG'],
  tr: ['TR', 'CY'],
};

const COUNTRY_TO_LOCALE: Record<string, string> = {};
for (const [locale, countries] of Object.entries(COUNTRY_GROUPS)) {
  for (const c of countries) COUNTRY_TO_LOCALE[c] = locale;
}

function isEnabled(locale: string | null | undefined): locale is string {
  return !!locale && (ENABLED_LOCALES as readonly string[]).includes(locale);
}

/** Two-letter country code -> locale, only if that locale is enabled. */
export function localeFromCountry(country?: string | null): string | null {
  if (!country) return null;
  const locale = COUNTRY_TO_LOCALE[country.trim().toUpperCase()];
  return isEnabled(locale) ? locale : null;
}

/** Best enabled, non-default language from an Accept-Language header. */
export function localeFromAcceptLanguage(header?: string | null): string | null {
  if (!header) return null;
  const langs = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';');
      const quality = q ? parseFloat(q.replace('q=', '')) : 1;
      return { locale: tag.split('-')[0].toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .sort((a, b) => b.quality - a.quality);
  for (const { locale } of langs) {
    if (locale !== DEFAULT_LOCALE && isEnabled(locale)) return locale;
  }
  return null;
}

export const BOT_PATTERN =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|lighthouse|pagespeed|headless|preview/i;

/** Same order as tiktokio.cam: country first, then browser language, else English. */
export function detectLocale(input: {
  country?: string | null;
  acceptLanguage?: string | null;
  userAgent?: string | null;
}): { locale: string; source: 'country' | 'browser' | 'default' | 'bot' } {
  if (input.userAgent && BOT_PATTERN.test(input.userAgent)) {
    return { locale: DEFAULT_LOCALE, source: 'bot' };
  }
  const byCountry = localeFromCountry(input.country);
  if (byCountry) return { locale: byCountry, source: 'country' };
  const byBrowser = localeFromAcceptLanguage(input.acceptLanguage);
  if (byBrowser) return { locale: byBrowser, source: 'browser' };
  return { locale: DEFAULT_LOCALE, source: 'default' };
}
