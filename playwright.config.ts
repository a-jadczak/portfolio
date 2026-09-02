import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.CI
);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4321',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1',
    reuseExistingServer: !isCI,
    timeout: 120_000,
    url: 'http://127.0.0.1:4321',
  },
});
