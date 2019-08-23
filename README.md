# eslint-plugin-bestpractices

[![Build Status](https://travis-ci.com/skye2k2/eslint-plugin-bestpractices.svg?branch=master)](https://travis-ci.com/skye2k2/eslint-plugin-bestpractices) [![Maintainability](https://api.codeclimate.com/v1/badges/42dee44955a4fd7c7e03/maintainability)](https://codeclimate.com/github/skye2k2/eslint-plugin-bestpractices/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/42dee44955a4fd7c7e03/test_coverage)](https://codeclimate.com/github/skye2k2/eslint-plugin-bestpractices/test_coverage)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-bestpractices `:

```
$ npm install https://github.com/skye2k2/eslint-plugin-bestpractices.git --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-deprecate` globally.

## Usage

Add `deprecate` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bestpractices"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bestpractices/no-eslint-disable": "warn"
    }
}
```

## Supported Rules

* [bestpractices/no-eslint-disable](docs/rules/no-eslint-disable.md): Warn when linting has been disabled inline.

## License

MIT
