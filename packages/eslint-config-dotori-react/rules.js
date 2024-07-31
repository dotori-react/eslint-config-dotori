module.exports = {
  rules: {
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: true,
        noSortAlphabetically: false,
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react-hooks/exhaustive-deps': ['warn', { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
