// @ts-check
import { defineConfig } from 'astro/config';
import graphqlLoader from 'vite-plugin-graphql-loader';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [graphqlLoader()],
    resolve: {
      tsconfigPaths: true,
    },
  },
});
