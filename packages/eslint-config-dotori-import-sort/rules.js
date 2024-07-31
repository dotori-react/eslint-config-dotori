module.exports = {
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', ['parent', 'sibling', 'index'], 'object', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: '{react-dom,react-dom/**}', group: 'builtin', position: 'before' },

          { pattern: '{@/**}', group: 'internal', position: 'before' },

          { pattern: '*', group: 'external', position: 'after' },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
