module.exports = {
  root: true,
  env: {
    node: true
  },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/base',
        '@vue/standard',
        'prettier',
    ],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
