module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-unused-vars': 'off', // 使っていない変数を許可
    'vue/html-self-closing': 'off', // 空タグを許可する
    'no-irregular-whitespace': 'off', // 文字列やコメントの外に不規則な空白を許可
    'vue/singleline-html-element-content-newline': 'off', // https://stackoverflow.com/questions/54603407/how-do-i-turn-off-this-eslint-error-expected-new-line-break-before-and-after-ht
    'vue/multiline-html-element-content-newline': 'off', // https://stackoverflow.com/questions/54603407/how-do-i-turn-off-this-eslint-error-expected-new-line-break-before-and-after-ht
    'vue/html-closing-bracket-newline': 'error', // https://github.com/vuejs/eslint-plugin-vue/issues/634#issuecomment-437271380
    'vue/no-v-html': 'off', // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md
    'prettier/prettier': [
      'error',
      {
        semi: false,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        htmlWhitespaceSensitivity: 'ignore', // https://takeda-san.hatenablog.com/entry/2019/09/08/231123
        endOfLine: 'auto', // https://github.com/prettier/eslint-plugin-prettier/issues/211
      },
    ],
  },
}
