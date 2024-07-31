module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'never',
      {
        svg: 'always',
        ttf: 'always',
        css: 'always',
        scss: 'always',
        less: 'always',
        sass: 'always',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'import/prefer-default-export': 'off',
  },
};
