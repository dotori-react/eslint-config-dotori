module.exports = {
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object', 'unknown'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: '{react-dom,react-dom/**}', group: 'builtin', position: 'before' },

          {
            pattern: '*.+(png|jpg|jpeg|svg|gif|webp|bmp|ico|tiff)',
            group: 'object',
            patternOptions: { matchBase: true },
            position: 'before',
          },
          {
            pattern: '*.+(css|sass|less|scss|pcss|styl)',
            group: 'unknown',
            patternOptions: { matchBase: true },
            position: 'before',
          },

          { pattern: '@/**', group: 'internal', position: 'before' },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ['react', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
};
