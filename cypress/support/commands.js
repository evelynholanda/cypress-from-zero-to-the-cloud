
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('ana@gmail.com')
    cy.get('#open-text-area').type('test Custom Commands')
    cy.get('button[type="submit"]').click()
    
})

Cypress.Commands.add('fillMandatoryWithVariable', (data) => { 
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
    
})
