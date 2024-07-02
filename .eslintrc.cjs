/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
    // "prefer-const": "off",
    // "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    // "semi": ["error", "always"],
    "no-console": "off",
    // "@typescript-eslint/no-explicit-any": 2,
    // "@typescript-eslint/no-unused-vars": 2,
    "no-unused-vars": "off",
    "no-var": "off",
    // "prefer-template": "error",
    "no-useless-concat": "error"
  }
}
