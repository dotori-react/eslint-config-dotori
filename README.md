# `eslint-config-dotori`

> Note: This package is based on the dotori-ui package, so the default settings may change in the future.
> 
eslint-config-dotori repository is a configuration packages for ESLint. these packages are designed to simplify eslint setup.

## Installation

To install the packages, use the following commands:
```bash
# airbnb-base dependency
npm install eslint-config-dotori-base --save-dev

npm install eslint-config-dotori-react --save-dev

npm install eslint-config-dotori-import-sort --save-dev

# airbnb-typescript dependency
npm install eslint-config-dotori-typescript --save-dev
```


## Usage
Extend your ESLint configuration file (.eslintrc.js or .eslintrc.json) as follows:
```javascript
{
  "extends": [
    "eslint-config-dotori-base",
    "eslint-config-dotori-react",
    "eslint-config-dotori-import-sort",
    "eslint-config-dotori-typescript",
  ]
}
```


## License
This project is licensed under the MIT License.

## Related
- eslint-config-airbnb-base
- eslint-config-airbnb-typescript

