import globals from 'globals';
import pluginJs from '@eslint/js';

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
];
