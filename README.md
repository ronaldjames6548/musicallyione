# MusicalDown

A free, browser-based TikTok video and MP3 downloader built with [Astro](https://astro.build), Tailwind CSS and Solid.

Live site: https://musicaldown.se

## Languages

English (default), Spanish (`/es/`), Indonesian (`/id/`) and Vietnamese (`/vi/`). All UI text lives in `src/i18n/ui.ts`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

Requires Node.js 22.12 or newer.

## Project layout

- `src/components/downloader/` the downloader UI and `siteConfig.ts` (site name, download proxy)
- `src/pages/api/` server routes for downloading and geo detection
- `src/pages/{es,id,vi}/` localized pages
- `src/content/blog/<lang>/` blog posts (MDX); the author profile is in `src/content/authors/`

## License

MIT, see [LICENSE](LICENSE). Built on the open-source Astro SEO Theme.
