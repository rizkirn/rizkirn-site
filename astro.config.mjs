import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rizkirn.my.id',

  integrations: [
    sitemap(),
  ],

  redirects: {
    '/generate': '/',
    '/login': '/',
  },
});