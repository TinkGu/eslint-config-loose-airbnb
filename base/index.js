module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
        webextensions: true,
    },
    plugins: ['import'],
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            classes: true,
            modules: true,
            jsx: true,
        },
    },
    rules: {
        indent: [
            1,
            4, {
                SwitchCase: 1,
            },
        ],
        'max-len': [1, 120],
        'arrow-parens': 0,
        'arrow-body-style': 0,
        'comma-dangle': [1, 'only-multiline'],
        'consistent-return': 0,
        'object-curly-newline': [2, {
            consistent: true,
        }],

        'no-bitwise': 0,
        'no-confusing-arrow': 0,
        'no-else-return': 0,
        'no-lonely-if': 0,
        'no-mixed-operators': 0,
        'no-nested-ternary': 1,
        'no-param-reassign': 1,
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': 1,
        'no-use-before-define': ['error', 'nofunc'],
        'no-useless-return': 0,
        'no-unused-expressions': [1, {
            allowShortCircuit: true,
            allowTernary: true,
        }],
        'no-console': [1, {
            allow: ['warn', 'error'],
        }],
        'import/prefer-default-export': 0,
    },
    globals: {
        // jest
        jest: true,
        describe: true,
        expect: true,
        it: true,
        test: true,
    },
}
