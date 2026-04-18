describe("This is a test suite", () => {
  it("This is a test case", () => {
    cy.visit("https://qa.volvoconnect.com/login");
    cy.title().should("match", /Login\s*(\||-)\s*Volvo Connect/);
    //cy.get('[data-testid="login-sso-link"]').click();
  });
});