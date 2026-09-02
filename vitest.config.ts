import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'tests/e2e/**'],
    passWithNoTests: true,
  },
});
