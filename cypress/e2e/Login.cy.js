describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('https://bstackdemo.com/signin')
  })

  it('CT01 - Login com credencial válida', () => {
    cy.contains('Select Username').click()
    cy.contains('.css-26l3qy-menu', 'existing_orders_user').click()
    cy.contains('Select Password').click()
    cy.contains('.css-26l3qy-menu', 'testingisfun99').click()
    cy.get('#login-btn').click()
    cy.get('a > .m-auto')
    .should('be.visible')
  })

})
