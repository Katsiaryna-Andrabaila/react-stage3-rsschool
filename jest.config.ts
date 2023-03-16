import { defaults } from 'jest-config';

const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  /* test: {
    globals: true,
    environment: 'jsdom',

    coverage: {
      enabled: true,
      provider: 'v8',
      all: true,
    },
  }, */
};

export default config;
