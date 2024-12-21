/** @type import("eslint").Linter.BaseConfig */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/eslint-config-prettier/skip-formatting",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // allow unused vars if they start with an underscore
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],

        "vue/block-lang": ["error", { script: { lang: "ts" }, style: { lang: "scss" } }],
        "vue/custom-event-name-casing": ["error", "kebab-case"],
        "vue/no-child-content": "error",
        "vue/no-duplicate-attr-inheritance": "error",
        "vue/component-api-style": "error",
        "vue/block-tag-newline": ["error", { singleline: "always", multiline: "always" }],
        "vue/no-useless-v-bind": 1,
        "vue/define-emits-declaration": 1,
        "vue/define-props-declaration": 1,
        "vue/no-template-shadow": ["error", { allow: ["props"] }],

        // stylistic
        "arrow-body-style": ["warn", "as-needed"],
        "func-style": ["error", "declaration"],
        "vue/component-tags-order": ["warn", { order: ["template", "script", "style"] }],
    },
    overrides: [
        {
            files: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
            extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
            parser: "typescript-eslint-parser-for-extra-files",
            parserOptions: {
                project: true,
            },
            rules: {
                // rules that require type info for linting go here
                "@typescript-eslint/no-unnecessary-condition": "error",
                "@typescript-eslint/no-redundant-type-constituents": "warn",
                "@typescript-eslint/switch-exhaustiveness-check": "warn",
                "@typescript-eslint/no-confusing-void-expression": [
                    "warn",
                    { ignoreArrowShorthand: true },
                ],
                "@typescript-eslint/restrict-template-expressions": "off",
            },
        },
        {
            files: ["src/**/*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "typescript-eslint-parser-for-extra-files",
                project: true,
            },
        },
    ],
    globals: {
        idProp: "readonly",
        arrProp: "readonly",
        objProp: "readonly",
    },
};
