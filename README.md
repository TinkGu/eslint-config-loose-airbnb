# eslint-config-loose-airbnb

extends `eslint-config-airbnb-base`, but use loose mode :)

# Install

## only javascript
```
npm i eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
npm i eslint-config-loose-airbnb --save-dev
```

edit `.eslintrc.js`

```javascript
extends: ['airbnb-base', 'loose-airbnb'],
```

## with react
```
npm i eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-airbnb --save-dev
npm i eslint-config-loose-airbnb-react --save-dev
```

edit `.eslintrc.js`

```javascript
extends: ['airbnb', 'loose-airbnb-react'],
```

# with webpack alias

some features in webpack such as `resolve.alias` can not compact with eslint. you can use this plugin.

`npm i eslint-import-resolver-webpack`

edit `.eslintrc.js`
```javascript
module.exports = {
    // ...
    settings: {
        'import/resolver': {
            webpack: {
                config: 'config/webpack/webpack.config.js'
            }
        }
    },
}
```

# known issues

> Configuration for rule "object-curly-newline" is invalid:
>
> Value "[object Object]" no (or more than one) schemas match.

please update your `eslint-*` version
