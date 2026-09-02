import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import query from '@tanstack/eslint-plugin-query';
import tseslint from 'typescript-eslint';

const javascriptFiles = ['**/*.{js,mjs,cjs,jsx}'];
const typescriptFiles = ['**/*.{ts,mts,cts,tsx}'];
const reactFiles = ['**/*.{jsx,tsx}'];

export default [
  {
    ignores: [
      '.astro/**',
      'coverage/**',
      'dist/**',
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  {
    ...js.configs.recommended,
    files: javascriptFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: config.files ?? typescriptFiles,
  })),
  ...astro.configs['flat/recommended'],
  {
    files: typescriptFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ...reactHooks.configs.flat.recommended,
    files: reactFiles,
  },
  ...query.configs['flat/recommended'].map((config) => ({
    ...config,
    files: reactFiles,
  })),
  prettier,
];
