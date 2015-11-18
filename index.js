module.exports = {
  plugins: [
    "jasmine"
  ],
  globals: {
    "jasmine": false,
    "describe": false,
    "it": false,
    "expect": false,
    "beforeEach": false,
    "afterEach": false,
    "spyOn": false
  },
  rules: {
    "max-statements": [1,100]
  }
};
