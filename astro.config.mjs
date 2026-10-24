// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Fixed order for every <xhtml:link> group in the sitemap
const SITEMAP_LANG_ORDER = ['en-US', 'es-ES', 'id-ID', 'vi-VN'];

// https://astro.build/config
export default defineConfig({
  site: 'https://musicaldown.se',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({ maxDuration: 30 }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'id', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: { external: ['@tobyg74/tiktok-api-dl'] },
    optimizeDeps: { exclude: ['@tobyg74/tiktok-api-dl'] },
  },

  integrations: [
    react({ exclude: ['**/components/downloader/**'] }),
    solidJs({ include: ['**/components/downloader/**'] }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          id: 'id-ID',
          vi: 'vi-VN',
        },
      },
      // Uniform hreflang block for every URL: same language order + x-default (English)
      serialize(item) {
        if (item.links?.length) {
          const links = [...item.links].sort(
            (a, b) => SITEMAP_LANG_ORDER.indexOf(a.lang) - SITEMAP_LANG_ORDER.indexOf(b.lang)
          );
          const en = links.find((l) => l.lang === 'en-US');
          if (en) links.push({ url: en.url, lang: 'x-default' });
          item.links = links;
        }
        return item;
      },
    }),
  ],

  // Enable View Transitions
  prefetch: {
    prefetchAll: true,
  },

  build: {
    inlineStylesheets: 'always',
  },

  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
