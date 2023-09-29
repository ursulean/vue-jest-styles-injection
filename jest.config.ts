import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts',
  ],
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  // globals: {
  //   "vue-jest": {
  //     // templateCompiler: {

  //     // }
  //     "hideStyleWarn": true,
  //     "experimentalCSSCompile": true
  //   }
  // }
};

export default config;
