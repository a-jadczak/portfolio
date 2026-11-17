// @ts-check
import { defineConfig } from 'astro/config';
import graphqlLoader from 'vite-plugin-graphql-loader';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [graphqlLoader()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
