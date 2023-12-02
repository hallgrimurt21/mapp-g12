module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: ["standard", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "comma-dangle": ["error", "always-multiline"],
        "spaced-comment": ["error", "always", { markers: ["/"] }],
        "react/prop-types": ["off"],
        "space-before-function-paren": ["error", "never"],
    },
}
