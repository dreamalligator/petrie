module.exports = {
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "rules": {
    // Possible Errors
    "no-console": ["error", { "allow": ["warn", "error", "debug"]}],
    // Stylistic Issues
    "require-jsdoc": "error",
    "semi": "error",
  }
};
