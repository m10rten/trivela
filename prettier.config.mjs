/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  printWidth: 119,
  singleQuote: false,
  trailingComma: "all",
  semi: true,
  arrowParens: "always",
  bracketSpacing: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  endOfLine: "lf",
  importOrder: ["^node:", "<THIRD_PARTY_MODULES>", "^@\\w+/(.*)$", "^@repo/(.*)$", "^[./]"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
