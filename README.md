# `eslint-config-dotori`

> Note: This package is based on the dotori-ui package, so the default settings may change in the future.
>
> eslint-config-dotori repository is a configuration packages for ESLint. these packages are designed to simplify eslint setup.

## Installation

To install the packages, use the following commands:

```bash
npm install eslint-config-dotori-base eslint-config-dotori-react eslint-config-dotori-import-sort eslint-config-dotori-typescript --save-dev
```

and please install peerDependencies

```bash
npm install eslint --save-dev
```

## Usage

Extend your ESLint configuration file (.eslintrc.js or .eslintrc.json) as follows:

```json
{
  "extends": [
    "eslint-config-dotori-base",
    "eslint-config-dotori-typescript",
    "eslint-config-dotori-react",
    "eslint-config-dotori-import-sort"
  ]
}
```

### Next.js

If your project is implemented using Next.js, you may need to install the missing package.

```bash
npm i @typescript-eslint/parser --save-dev
```

If your project is implemented using Next.js with Eslint @8^.
Extend your ESLint configuration file (.eslintrc.js or .eslintrc.json) as follows:

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "eslint-config-dotori-base",
    "eslint-config-dotori-typescript",
    "eslint-config-dotori-react",
    "eslint-config-dotori-import-sort"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

If your project is implemented using Next.js with Eslint @9^.
Extend your ESLint configuration file (.eslint.config.mjs or .eslint.config.js) as follows:

```js
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint-config-dotori-base',
    'eslint-config-dotori-typescript',
    'eslint-config-dotori-react',
    'eslint-config-dotori-import-sort',
  ),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];

export default eslintConfig;
```

## License

This project is licensed under the MIT License.
