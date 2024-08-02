# `eslint-config-dotori-typescript`

> Note: This package is based on the dotori-ui package, so the default settings may change in the future.
>
> eslint-config-dotori-typescript is a configuration package for ESLint. This package is designed to simplify eslint setup.

## Installation

To install the package, use the following commands:

```bash
# airbnb-typescript dependency
npm install eslint-config-dotori-typescript --save-dev
```

and please install peerDependencies

```bash
npm install eslint-import-resolver-typescript --save-dev
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
    "eslint-config-dotori-typescript",
  ]
}
```

## License

This project is licensed under the MIT License.

## Related

- eslint-config-airbnb-typescript
- eslint-import-resolver-typescript
