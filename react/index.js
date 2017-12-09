module.exports = {
    extends: [
        'eslint-config-loose-airbnb',
    ].map(require.resolve),
    plugins: [
        'jsx-a11y',
        'react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'jsx-a11y/alt-text': 1,
        'jsx-a11y/no-noninteractive-element-interactions': 0, // 可以在任何 html 标签上进行绑定交互事件
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'jsx-a11y/no-static-element-interactions': 0,

        'react/jsx-indent': 0,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 1,
        'react/require-default-props': 1,
        'react/forbid-prop-types': 1,
        'react/no-unused-prop-types': 1,
        'react/no-string-refs': 1,
        'react/no-did-mount-set-state': 1,
        'react/jsx-first-prop-new-line': 1,
        'react/self-closing-comp': [1, {
            component: true,
            html: false,
        }],
        'react/no-array-index-key': 1,
        'react/jsx-indent-props': [1, 4],
        'react/jsx-filename-extension': [
            1, {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ],
        }],
    },
}
