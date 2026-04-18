class ConfirmationPage {
    submitFormdetails() {
        cy.SubmitFormdetails();
    }
    getAletMessage() {
        cy.get('.alert').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
    }
}
export default ConfirmationPage;
