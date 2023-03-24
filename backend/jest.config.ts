import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 15000,
    collectCoverageFrom: ['src/**/*.[jt]s'],
    coveragePathIgnorePatterns: ['src/server.[jt]s'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: 95,
      },
    },
  };
};
