module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'es2020',
    sourceType: 'module',
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './rules.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
