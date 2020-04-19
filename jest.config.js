const ENVIRONMENT = process.env.NODE_ENV;

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  },
  globals: {
    ENVIRONMENT
  },
  moduleDirectories: ["node_modules", "src"],
  testRegex: "(__)?tests(__)?/.*\\.test\\.jsx?$",
  setupFiles: ["<rootDir>/src/__mocks__/globals/index.js"],
  setupFilesAfterEnv: ["<rootDir>/internals/testing/setupTests.js"]
};
