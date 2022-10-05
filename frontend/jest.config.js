const config = {
  verbose: true,
  jest: {
    setupFilesAfterEnv: ["src/setupTests.js"],
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
 },
};

module.exports = config;
