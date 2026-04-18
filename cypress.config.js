const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "meur8o",
  allowCypressEnv: false,

  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }
    experimentalStudio: true,
    chromeWebSecurity: false,
    
    specPattern: "cypress/Test/**/*.cy.js",
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
