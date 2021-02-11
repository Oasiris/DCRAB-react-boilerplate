module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',

    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin
    // that would conflict with prettier.
    'prettier/@typescript-eslint',

    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors
    // as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],

  rules: {
    /**
     * These rules disable or relax existing restrictions.
     */

    // Indent 4 spaces.
    indent: ['error', 4],

    // Indent 4 spaces for JSX for unity across the board.
    'react/jsx-indent': ['error', 4],

    // Allow and encourage comma dangle.
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/explicit-module-boundary-types': 0, // 0 means 'off'
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: true }],

    // Allow leading underscore.
    'no-underscore-dangle': 0,
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
    ],

    // Allow {} in React projects.
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],

    // Don't enforce destructuring assignments.
    'react/destructuring-assignment': 0,

    // Don't enforce default export.
    'import/prefer-default-export': 0,

    // Don't prohibit unescaped entities like "'".
    'react/no-unescaped-entities': [1], // 1 means 'warn'.

    // Allow 'else' after 'return', for readability.
    'no-else-return': 0,

    // Don't enforce prop-types – that's what TypeScript is for.
    'react/prop-types': 0,

    // Warn on, but don't forbid, using Array index as keys in JSX.
    'react/no-array-index-key': 1,

    // Warn on, but don't forbid, multiple JSX expressions per line.
    'react/jsx-one-expression-per-line': 1,

    // Allow reassignment of certain parameters' props.
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^registration'] }],

    // Warn on, but don't forbid, unused variables.
    '@typescript-eslint/no-unused-vars': 1,
  },

  // (Source [1])
  env: {
    browser: true,
    amd: true,
    node: true,
  },
}

/*

Cited sources:
[1] env setting: https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
 */
