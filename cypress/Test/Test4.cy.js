/// <reference types="cypress" />
describe('template spec', () => {
  it('Alert, Tabs test case ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Alerts
    cy.get('#alertbtn').click();
     cy.on('window:alert',(str)=>{
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
     })
    cy.get('#confirmbtn').click();
    cy.on('window:confirm',(str)=>{
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    })
    // Child tabs, Windows
    cy.get('#opentab').invoke('removeAttr','target').click();
})});