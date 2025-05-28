const { defineConfig } = require("cypress");
const { configureVisualRegression } = require('cypress-visual-regression');

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: './cypress/snapshots/actual',
    env: {
      visualRegressionType: 'regression',
      //Pay attention to the visualRegressionType option. Use 'base' to generate baseline images,
      //and 'regression' to compare current screenshot to the base screenshot
      visualRegressionBaseDirectory: 'cypress/snapshot/base',
      visualRegressionDiffDirectory: 'cypress/snapshot/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: false
    },
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      // implement node event listeners here
    },
  },
});