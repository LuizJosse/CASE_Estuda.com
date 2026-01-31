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

  it('CT02 - Login com credenciais inválidas', () => {
  cy.contains('Select Username')
    .click({ force: true })

  cy.get('input[aria-autocomplete="list"]')
    .first()
    .type('Luiz')

  cy.get('.css-26l3qy-menu')
    .contains('Create "Luiz"')
    .click({ force: true })

  cy.contains('Select Password')
    .click({ force: true })

  cy.get('input[aria-autocomplete="list"]')
    .last()
    .type('1234')

  cy.get('.css-26l3qy-menu')
    .contains('Create "1234"')
    .click({ force: true })

  cy.contains('Log In')
    .click()

  cy.contains('Invalid Username')
    .should('be.visible')
  })

  it('CT03 - Login com apenas Username inválida', () => {
    cy.contains('Select Username')
    .click({ force: true })

  cy.get('input[aria-autocomplete="list"]')
    .first()
    .type('Luiz')

  cy.get('.css-26l3qy-menu')
    .contains('Create "Luiz"')
    .click({ force: true })

  cy.contains('Select Password').click()
  cy.contains('.css-26l3qy-menu', 'testingisfun99').click()
  cy.get('#login-btn').click()
  cy.contains('Invalid Username')
    .should('be.visible')
  })

   it('CT04 - Login com apenas Password inválida', () => {
    cy.contains('Select Username')
    .click({ force: true })

  cy.get('input[aria-autocomplete="list"]')
    .first()
    .type('demouser')

  cy.get('.css-26l3qy-menu')
    .contains('demouser')
    .click({ force: true })
    
  cy.contains('Select Password')
    .click({ force: true })

  cy.get('input[aria-autocomplete="list"]')
    .last()
    .type('1234')

  cy.get('.css-26l3qy-menu')
    .contains('Create "1234"')
    .click({ force: true })
  cy.get('#login-btn').click()
  cy.contains('Invalid Password')
    .should('be.visible')
  })

  it('CT05 - Login com campos Vazios', () => {
    cy.get('#login-btn').click()
    cy.contains('Invalid Username')
    .should('be.visible')
  })

  it('CT06 - Login com campo username Vazio', () => {
   cy.contains('Select Password').click()
   cy.contains('.css-26l3qy-menu', 'testingisfun99').click()
   cy.get('#login-btn').click()
   cy.contains('Invalid Username')
    .should('be.visible')
  })

  it('CT07 - Login com campo Password Vazio', () => {
   cy.contains('Select Username').click()
   cy.contains('.css-26l3qy-menu', 'existing_orders_user').click()
   cy.get('#login-btn').click()
   cy.contains('Invalid Password')
    .should('be.visible')
  })

 it('CT08 - Login com usuario Bloqueado ', () => {
   cy.contains('Select Username').click({ force: true })
   cy.get('.css-26l3qy-menu')
    .contains('locked_user')
    .click()
    cy.contains('Select Password').click()
    cy.contains('.css-26l3qy-menu', 'testingisfun99').click()
    cy.get('#login-btn').click()
    cy.contains('Your account has been locked.')
    .should('be.visible')
  })
  
})
