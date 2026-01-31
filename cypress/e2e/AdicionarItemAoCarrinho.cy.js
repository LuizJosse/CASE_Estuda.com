describe('Adicionar itens ao carrinho', () => {

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('https://bstackdemo.com/')
  })

  it('adicionar um item ao carrinho ', () => {
    cy.get('.shelf-item__buy-btn').first().click()

    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
  })

  it('adicionar mais um item ao crrinho', () => {
    cy.get('.shelf-item__buy-btn').eq(5).click()
    cy.get('.shelf-item__buy-btn').eq(6).click()
    

    cy.get('.bag__quantity')
      .should('be.visible')
      .and('not.have.text', '0')
  })
})

