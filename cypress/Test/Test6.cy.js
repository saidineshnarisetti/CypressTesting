/// <reference types="cypress" />
describe('template spec', () => {
  it('Mouse hover test case ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Mouse hover
    //cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top'); 
})});