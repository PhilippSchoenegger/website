// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://philippschoenegger.com',
  build: {
    assets: 'assets'
  },
  vite: {
    assetsInclude: ['**/*.yaml', '**/*.yml']
  }
});
