module.exports = {
  env: {
    es6: true
  },
  extends: [
    // "plugin:eslint-plugin/tests-recommended",
    './index.js'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    // 'eslint-plugin-eslint-plugin',
    'eslint-plugin-bestpractices',
  ],
}
