/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [ './tsconfig.eslint.json' ],
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'array-bracket-spacing': [ 'warn', 'always' ],
    'eqeqeq': [ 'error', 'smart' ],
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'no-nested-ternary': 'error',
    'object-curly-spacing': [ 'warn', 'always' ],
    'object-property-newline': [ 'warn', { 'allowAllPropertiesOnSameLine': true } ],
    'prefer-const': 'error',
    '@typescript-eslint/quotes': [ 'warn', 'single', { 'avoidEscape': true } ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    'import/no-default-export': 'error',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};