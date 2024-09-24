// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('@overdose/config/src/eslint-plugin')

baseConfig.extends.push('plugin:@next/next/recommended')

baseConfig.rules = {
  ...baseConfig.rules,
  'no-restricted-syntax': [
    1,
    {
      selector: 'ExportDefaultDeclaration',
      message: 'Prefer named exports',
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
}

module.exports = baseConfig
