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
npm install eslint eslint-import-resolver-typescript --save-dev
```

### Reference

> Why peerDependency install eslint-import-resolver-typescript

- if you establish absolute path in your project, then you require import/resolver
- so eslint-config-dotori-typescript is default tsconfig project path `./tsconfig.json`
- but your tsconfig file is not located in root or not matched filename then custom your tsconfig project path;

```js
settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json' // you can customize tsconfig project path
      },
    },
  },
```

## Usage

Extend your ESLint configuration file (.eslintrc.js or .eslintrc.json) as follows:

```javascript
{
  "extends": [
    "eslint-config-dotori-react",
    "eslint-config-dotori-import-sort",
    "eslint-config-dotori-base",
    "eslint-config-dotori-typescript",
  ]
}
```

## License

This project is licensed under the MIT License.

## Related

- eslint
- eslint-import-resolver-typescript
- eslint-config-airbnb-base
- eslint-config-airbnb-typescript
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-react-refresh
