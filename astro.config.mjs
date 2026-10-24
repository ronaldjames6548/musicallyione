// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

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
