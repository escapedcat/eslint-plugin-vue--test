module.exports = {
  root: true,
  extends: [
    "plugin:vue/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/v-on-function-call": 2,
    "vue/require-direct-export": 2,
    // "vue/no-deprecated-scope-attribute": 2,
    // "vue/valid-v-slot": 2,
    // "vue/v-slot-style": 2
    // "vue/v-slot-style": [
    //   "error", {
    //     "atComponent": "shorthand",
    //     "default": "shorthand",
    //     "named": "shorthand",
    //   }
    // ],
  },
  env: {
    browser: true,
    node: true
  }
}
