/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
};

export default config;
