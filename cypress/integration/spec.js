/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://github.com/cypress-io/cypress-example-kitchensink')

    const inputSelector = '[data-test-selector="nav-search-input"]';
    cy.get(inputSelector).type('helo')


    cy.inputOnTextFields([{selector: inputSelector, value: 'cypress fork test'}])
  })
})
