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

Cypress.Commands.add('login', () => {
  cy.visit('https://bstackdemo.com/signin')
  cy.contains('Select Username').click()
  cy.contains('.css-26l3qy-menu', 'existing_orders_user').click()
  cy.contains('Select Password').click()
  cy.contains('.css-26l3qy-menu', 'testingisfun99').click()
  cy.get('#login-btn').click()
  cy.get('a > .m-auto').should('be.visible')
})

Cypress.Commands.add('itens', () => {
 cy.get('.shelf-item__buy-btn').eq(5).click()
 cy.get('.shelf-item__buy-btn').eq(6).click()
 cy.get('.bag__quantity')
    .should('be.visible')
    .and('not.have.text', '0')
})