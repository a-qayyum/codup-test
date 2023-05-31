const { defineConfig } = require("cypress");

module.exports = {
  //chromeWebSecurity: false,
 // chromeWebSecurityForFileUrls: false,

  env: {
    CYPRESS_browser: "chrome --incognito",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
