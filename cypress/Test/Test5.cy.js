/// <reference types="cypress" />
describe('template spec', () => {
  it('Table test case ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Tables
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
          const price1 = price.text();
          expect(price1).to.equal('25');
        })
      }
    }) 
})});