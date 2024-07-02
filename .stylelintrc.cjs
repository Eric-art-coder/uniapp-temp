module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  // 继承推荐规范配置
  extends: ["stylelint-config-standard", "stylelint-config-hudochenkov/order"],
  // 自定义规则
  rules: {
    "rule-empty-line-before": null,
    "no-descending-specificity": null,
    "declaration-empty-line-before": null,
    "font-family-no-missing-generic-family-keyword": null,
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "deep", "local", "export", "slotted"]
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin"
        ]
      }
    ]
  },
  // 忽略的文件
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "src/uni.scss"],
  // 指定不同文件对应的解析器
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
      extends: ["stylelint-config-recommended", "stylelint-config-html"],
      rules: {
        "keyframes-name-pattern": null,
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["deep", "global"]
          }
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
          }
        ]
      }
    }
  ]
};
