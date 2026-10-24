/**
 * i18n utility functions for Astro SEO Theme.
 *
 * Usage in .astro components:
 *   import { getLangFromUrl, useTranslations, getLocalizedPath } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   const localPath = getLocalizedPath(lang, '/about');
 */

import { ui, languages, defaultLang, type Lang } from './ui';

/**
 * Which pages exist for each language.
 *  - 'all'      -> the language mirrors the whole site (en, es)
 *  - string[]   -> only these paths exist in that language (id, vi: localized routes)
 * Links to other pages in a limited language fall back to the English page, and
 * hreflang / language-picker entries are only generated where a page really exists.
 * When you add /id/about, add '/about' to the id list.
 */
export const LOCALE_PAGES: Record<Lang, 'all' | string[]> = {
  en: 'all',
  es: 'all',
  id: 'all',
  vi: 'all',
};

/** hreflang + Open Graph codes per language. */
export const localeMeta: Record<Lang, { hreflang: string; og: string }> = {
  en: { hreflang: 'en-US', og: 'en_US' },
  es: { hreflang: 'es-ES', og: 'es_ES' },
  id: { hreflang: 'id-ID', og: 'id_ID' },
  vi: { hreflang: 'vi-VN', og: 'vi_VN' },
};

const nonDefaultLangs = (Object.keys(languages) as Lang[]).filter((l) => l !== defaultLang);
const localePrefix = new RegExp(`^/(${nonDefaultLangs.join('|')})(?=/|$)`);

/** '/about/' -> '/about', '/' stays '/' */
function normalizePath(path: string): string {
  const base = path.split(/[?#]/)[0] || '/';
  return base.length > 1 ? base.replace(/\/+$/, '') : base;
}

function hasPage(lang: Lang, path: string): boolean {
  const pages = LOCALE_PAGES[lang];
  return pages === 'all' || pages.includes(normalizePath(path));
}

/**
 * Extract the current language from the URL pathname.
 * Returns 'es' for /es/..., 'id' for /id/..., otherwise returns 'en'.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * Falls back to defaultLang if a key is missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key];
  };
}

/**
 * Generate a localized path.
 * - For 'en' (default): returns path as-is (e.g. '/about')
 * - For other languages: prepends /<lang> (e.g. '/es/about')
 * - If that language has no such page yet, the English path is returned instead.
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  if (!hasPage(lang, path)) return path;
  return `/${lang}${path}`;
}

/**
 * Get the alternate language paths for hreflang tags and the language picker.
 * Only languages that actually have this page are returned (English always first).
 */
export function getAlternateLocales(currentPath: string): { lang: Lang; href: string }[] {
  // Strip any existing locale prefix
  const cleanPath = currentPath.replace(localePrefix, '') || '/';

  return (Object.keys(languages) as Lang[])
    .filter((lang) => hasPage(lang, cleanPath))
    .map((lang) => ({
      lang,
      href: lang === defaultLang ? cleanPath : `/${lang}${cleanPath === '/' ? '' : cleanPath}`,
    }));
}
