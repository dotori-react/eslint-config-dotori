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

```javascript
{
  extends: [
    'eslint-config-dotori-base',
    'eslint-config-dotori-typescript',
    'eslint-config-dotori-react',
    'eslint-config-dotori-import-sort',
  ]
}
```

## License

This project is licensed under the MIT License.
