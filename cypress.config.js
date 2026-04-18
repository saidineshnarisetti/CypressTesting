const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "meur8o",
  allowCypressEnv: false,

  e2e: {
    experimentalStudio: true,
    chromeWebSecurity: false,
    
    specPattern: "cypress/Test/**/*.cy.js",
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
