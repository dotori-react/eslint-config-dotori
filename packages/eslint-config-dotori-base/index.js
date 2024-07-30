module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'es2020',
    sourceType: 'module',
  },
};
