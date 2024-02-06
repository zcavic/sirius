module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  parser: "@typescript-eslint/parser",
};
