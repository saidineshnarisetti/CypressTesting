/// <reference types="cypress" />
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').should('be.visible').type('ca');
    cy.wait(2000);
   
    cy.get('.product').should('have.length', 5);
    cy.get('.product:visible').should('have.length', 4);
    //Parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
    const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }})
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  })
});