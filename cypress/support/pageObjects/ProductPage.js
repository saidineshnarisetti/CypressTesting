class ProductPage {
  PageValidation() {
    cy.url().should("include", "shop");
    cy.contains("Shop Name").should("be.visible");
  }
  VerifyCardLimit() {
    return cy.get("app-card");
  }
  selectProduct(productName) {
    cy.get("app-card")
      .filter(`:contains('${productName}')`)
      .then((product) => {
        cy.wrap(product).should("have.length", 1);
        cy.wrap(product).contains(".btn", "Add").click();
      });
  }
  SelectFirstProduct() {
    cy.get("app-card").eq(0).contains(".btn", "Add").click();
  }
  goTocart() {
    cy.contains("a", "Checkout").click();
  }
  ProductCalculation() {
    let sum = 0;
    return cy
      .get("tr td:nth-child(4) strong")
      .each((total) => {
        const totalAmount = Number(total.text().split(" ")[1].trim());
        sum = sum + totalAmount;
      })
      .then(() => {
        return cy.get(":nth-child(4) > :nth-child(5) > .btn").click();
      })
      .then(() => sum);
  }
}

export default ProductPage;
