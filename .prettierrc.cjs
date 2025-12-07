module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 120,
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.js',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '.prettierrc.json',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
