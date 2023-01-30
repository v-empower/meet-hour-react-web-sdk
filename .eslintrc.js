module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  ignorePatterns: ['.eslintrc.js', '*.config.[jt]s', 'src/__tests__/**'],
  extends: ["@jitsi/eslint-config", "@jitsi/eslint-config/typescript"],
};
