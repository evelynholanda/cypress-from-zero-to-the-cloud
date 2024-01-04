
// Validates the independet privacy policy page
it('independently test to privacy policy page', () => {
    cy.visit('./src/privacy.html')

    cy.contains('h1', 'Privacy Policy')
        .should('be.visible')
    cy.contains('p', 'Talking About Testing')
        .should('be.visible')
})