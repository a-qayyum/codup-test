import 'cypress-xpath';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("verifyAPIResponse", (url, expectedStatus, expectedUsername, expectedCity) => {
    cy.request("GET", url).then((response) => {
      expect(response.status).to.eq(expectedStatus);
      const user = response.body.find((user) => user.username === expectedUsername);
      expect(user.username).to.eq(expectedUsername);
      expect(user.address.city).to.eq(expectedCity);
    });
  });

  Cypress.Commands.add('clearCookiesBeforeEachTest', () => {
    cy.clearCookies();
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
  