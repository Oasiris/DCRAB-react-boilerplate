module.exports = {
  extends: [
    './tslint-base.js',

    // Overwrite rules that are enforced by our formatter, Prettier.
    'tslint-react',
    'tslint-config-prettier',

    './tslint-import.js',
  ],
}
