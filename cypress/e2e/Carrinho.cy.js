describe('Itens ao carrinho', () => {

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('https://bstackdemo.com/')
  })

  it('CT09 - Adicionar item ao carrinho  ', () => {
    cy.get('.shelf-item__buy-btn').first().click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
  })

  it('CT10 - Adicionar mais de um item ao carrinho ', () => {
    cy.get('.shelf-item__buy-btn').eq(5).click()
    cy.get('.shelf-item__buy-btn').eq(6).click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
  })

  it('CT11 - Remover item do carrinho ', () => {
    cy.get('.shelf-item__buy-btn').first().click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
    cy.get('.shelf-item__del')
      .should('be.visible')
      .click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '1') 
  })

  it('CT12 - Remover todos os itens do carinho', () => {
    cy.get('.shelf-item__buy-btn').eq(5).click()
    cy.get('.shelf-item__buy-btn').eq(6).click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
    cy.get(':nth-child(1) > .shelf-item__del').click()
    cy.get(':nth-child(1) > .shelf-item__del').click()
    cy.get('.shelf-empty')
    cy.contains('Add some products in the bag')
     .should('be.visible')
  })

  it('CT13 - Adicionar itens favaritos no carrinho', () => {
    cy.login()
    cy.get('.MuiSvgIcon-root.Icon')
     .first()         
     .closest('button')
     .click()
    cy.get('.shelf-item__buy-btn').first().click()
    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
  })

  it('CT14 - Fechar pedidos sem item no carrinho ', () => {
    cy.login()
    cy.get('.bag--float-cart-closed').click()
    cy.contains('Add some products in the bag')
     .should('be.visible')
    cy.get('.buy-btn').click()
    cy.get('a > .m-auto')
     .should('be.visible')
  })

  it('CT15 - Relizar Refresh com itens no carrinho  ', () => {
  cy.login()
  cy.itens()
   .should('be.visible')
   .and('not.have.text', '0')
  cy.reload()    
  cy.get('.bag--float-cart-closed').click()
  cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0') 
  })

  it.only('CT16 - Relizar Logout com item no carrinho  ', () => {
  cy.login()
  cy.itens()
  cy.get('#signin').click()
  cy.login()
  cy.itens()
  cy.get('.bag__quantity')
    .should('be.visible')
    .and('not.have.text', '0') 
  })

})

