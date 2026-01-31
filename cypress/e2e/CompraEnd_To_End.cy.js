import { faker } from '@faker-js/faker';
describe('End to End', () => {

  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('https://bstackdemo.com/')
  })

  it('CT00 - Fluxo completo de compra ', () => {
    
    const firstName = faker.person.firstName();       
    const lastName = faker.person.lastName();         
    const address = faker.location.streetAddress();   
    const province = faker.location.state();          
    const postCode = faker.location.zipCode();  

    cy.login()
    cy.UmItem()
    cy.get('.buy-btn').click()
    cy.get('.checkoutHeader-link').should('have.text', 'StackDemo')
    cy.get('#firstNameInput').type(firstName)
    cy.get('#lastNameInput').type(lastName)
    cy.get('#addressLine1Input').type(address)
    cy.get('#provinceInput').type(province)
    cy.get('#postCodeInput').type(postCode)
    cy.get('#checkout-shipping-continue').click()
    cy.get('[data-test="shipping-address-heading"]').should('have.text', 'Your Order has been successfully placed.')
  })
})

