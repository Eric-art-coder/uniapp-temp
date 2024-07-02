module.exports = {
  // 格式化时优先考虑ESlint的规则，如果代码违反ESLint规则，将不会对其进行格式化
  eslintIntegration: true,
  // 一行最多100个字符
  printWidth: 100,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // 在语句末尾打印分号
  semi: true,
  // 是否使用单引号
  singleQuote: false,
  // 何时给对象属性名添加引号 可选值"<as-needed|consistent|preserve>"
  quoteProps: "as-needed",
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: "none",
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
  arrowParens: "always",
  // 禁止在文件顶部插入一个特殊的@format标记，指定该文件已经使用Prettier格式化
  insertPragma: false,
  // 禁止单独在文件顶部定制自己的格式化
  requirePragma: false,
  // HTML空白敏感度
  htmlWhitespaceSensitivity: "strict",
  // 行结束使用换行（\n）
  endOfLine: "lf"
};
