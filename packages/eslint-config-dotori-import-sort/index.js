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
  extends: ['plugin:import/recommended', './rules.js'],
};
