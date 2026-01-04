// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://philippschoenegger.com',
  integrations: [sitemap()],
  
  // Build optimizations
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto', // Inline small CSS for faster FCP
  },
  
  // Performance: enable compression
  compressHTML: true,
  
  vite: {
    assetsInclude: ['**/*.yaml', '**/*.yml'],
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Use esbuild (default, no extra deps needed)
      minify: 'esbuild',
      // No source maps in production
      sourcemap: false,
    },
  },
  
  // Server config for development
  server: {
    port: 4321,
    host: true, // Allow external connections for testing
  },
});
