const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9nsg8a",
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
