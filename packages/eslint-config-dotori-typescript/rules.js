module.exports = {
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    // eslint-config-airbnb-typescript rule off
    'react/jsx-filename-extension': 'off',
  },
};
