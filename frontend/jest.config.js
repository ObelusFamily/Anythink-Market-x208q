const config = {
  verbose: true,
  jest: {
    setupFilesAfterEnv: ["src/setupTests.js"],

    preset: "jest-puppeteer",
  },
};

module.exports = config;
