module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    'no-console': 2,
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
