// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        'page-shortly-lifestyle-stomach.trycloudflare.com',
        'able-romantic-chair-feeling.trycloudflare.com',
      ],
    },
  }
});
