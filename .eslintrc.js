module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "object-shorthand": 0,
    "ember-suave/no-const-outside-module-scope": 0,
    "ember-suave/no-direct-property-access": 0
  }
};
