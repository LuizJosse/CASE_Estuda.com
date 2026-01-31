describe('Adicionar itens ao carrinho', () => {

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
})

