import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestDom from 'eslint-plugin-jest-dom';

// latest rules: https://eslint.org/docs/latest/rules/

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-duplicate-imports': 'error',
    },
  },
  eslintConfigPrettier,
  {
    files: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx', '**/*.test.jsx'], // Apply only to test files
    languageOptions: {
      globals: globals.jest, // Add Jest globals (test, expect, etc.)
    },
    plugins: {
      'jest-dom': jestDom, // Register jest-dom plugin
    },
    rules: {
      ...jestDom.configs.recommended.rules, // Apply recommended jest-dom rules
    },
  },
];
