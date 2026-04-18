import HomePage from "../support/pageObjects/HomePage";
import ConfirmationPage from "../support/pageObjects/ConfirmatioPage";
describe("E2E Testcases", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.username = data.username;
      this.password = data.password;
      this.ProductName = data.ProductName;
      this.homepage = new HomePage();
    });
  });
  it("should allow recording and editing of tests", function () {
    this.homepage.goTo("https://rahulshettyacademy.com/loginpagePractise");
    const productPage = this.homepage.login(this.username, this.password);
    cy.log(this.username, this.password);
    productPage.PageValidation();
    productPage.VerifyCardLimit().then((cards) => {
      expect(cards).to.have.length(4);
    });
    //Select product dynamically
    productPage.selectProduct(this.ProductName);
    // cy.pause();
    productPage.SelectFirstProduct();

    productPage.goTocart();
    productPage.ProductCalculation().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });

    const confirmationPage = new ConfirmationPage();
    confirmationPage.submitFormdetails();
    confirmationPage.getAletMessage();
  });
});
