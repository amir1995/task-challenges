module.exports = {
  extends: ["next", "turbo", "prettier"],
  plugins: ["simple-import-sort", "unused-imports"],
  rules: {
    "no-console": 2,
    "simple-import-sort/imports": "error",
    "no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "turbo/no-undeclared-env-vars": "off",
    "no-multiple-empty-lines":[ "error", { "max": 1, "maxEOF": 0 }],
    "import/newline-after-import": ["error", { "count": 1 }]
  },
};
