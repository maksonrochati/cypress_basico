const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      cypressSplit(on, config);
      return config;
    },
    schema: "https://on.cypress.io/cypress.schema.json",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    theme: "dark",
    // darkMediaQuery: true,
  },
});
