module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '<rootDir>/**/__tests__/**/*.{js,ts}',
      '<rootDir>/**/*.{spec,test}.{js,ts}',
    ],
    rootDir: './src',
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/**/{format,get,is,has}*.{js,ts}',
      '!<rootDir>/entities/**/*.{js,ts}',
    ],
    coverageDirectory: '../coverage',
    coverageThreshold: {
      global: {
        statements: 85,
      },
    },
    moduleNameMapper: {
      '^@helpers(.*)$': '<rootDir>/helpers$1',
    },
  };