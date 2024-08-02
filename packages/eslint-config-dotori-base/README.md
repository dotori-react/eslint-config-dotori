# `eslint-config-dotori-base`

> Note: This package is based on the dotori-ui package, so the default settings may change in the future.
>
> eslint-config-dotori-base is a configuration package for ESLint. This package is designed to simplify eslint setup.

## Installation

To install the package, use the following commands:

```bash
# airbnb-base dependency
npm install eslint-config-dotori-base --save-dev
```

and please install peerDependencies

```bash
npm install eslint --save-dev
```

## Usage

Extend your ESLint configuration file (.eslintrc.js or .eslintrc.json) as follows:

```javascript
{
  "extends": [
    "eslint-config-dotori-base",
  ]
}
```

## License

This project is licensed under the MIT License.

## Related

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
