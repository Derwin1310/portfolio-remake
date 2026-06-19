// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

/**
 * @param {string} path
 */
const sourcePath = (path) => new URL(`./src/${path}`, import.meta.url).pathname;

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        assets: sourcePath('assets'),
        components: sourcePath('components'),
        data: sourcePath('data'),
        layouts: sourcePath('layouts'),
        pages: sourcePath('pages'),
        scripts: sourcePath('scripts'),
        styles: sourcePath('styles'),
        utils: sourcePath('utils'),
      },
    },
    server: {
      allowedHosts: [
        'page-shortly-lifestyle-stomach.trycloudflare.com',
        'able-romantic-chair-feeling.trycloudflare.com',
      ],
    },
  },

  adapter: cloudflare(),
});