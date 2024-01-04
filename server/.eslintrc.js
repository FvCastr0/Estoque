export default {
  "env": {
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-extraneous-class': 0
  }
}
