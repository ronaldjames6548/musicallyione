import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  // English posts only, no drafts, newest first
  const items = blog
    .filter((post) => !post.data.draft && post.id.startsWith('en/'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/^en\//, '')}/`,
    }));

  return rss({
    title: 'MusicalDown Blog',
    description: 'Guides on saving public TikTok videos, MP4 and MP3 formats, and troubleshooting.',
    site: context.site || 'https://musicaldown.se',
    items,
    customData: `<language>en-us</language>`,
  });
}
