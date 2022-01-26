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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('inputOnTextFields', (inputs, pressEnterAfterTyping = false) => {
  inputs.forEach(field => {
    const chain = cy.get(field.selector).scrollIntoView().clear().type(field.value);

    if (pressEnterAfterTyping) {
      chain.wait(500).type('{enter}');
    }
  });
});

Cypress.Commands.add('config', () => {
  return Cypress.env('appConfig');
});
