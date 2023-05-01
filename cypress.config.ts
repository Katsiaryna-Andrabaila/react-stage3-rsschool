import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['src/**/*.test.*', 'src/**/**/*.test.*'],
      include: 'cypress/e2e/e2e.cy.ts',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
  video: false,
});
