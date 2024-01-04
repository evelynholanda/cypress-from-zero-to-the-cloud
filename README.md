# APRENDIZADO #

This file is created for my learning in another projects
There ir here many commands to use with Cypress and best practices.
Therefore, I will can doing refactory of the project for to use custom.commands in all the Test Cases in this project
This project inicial with Walmyr Filho in the course Cypress, from Zero to the Cloud


++++++++++++++++++++++++++++++++++++++++++++++++++++

### hoocks - BEFOREACH() AND VISIT()
beforeEach()

Example:

beforeEach(() => {
    cy.visit('./src/index.html')
  })

### title TITLE()

Example
 cy.title().should('be.equal', 'TAT Customer Service Center')

### TexT Long area
Example
 const longText = Cypress._.repeat('abcdefghijklmnopqrstuvxwyz', 10)

### For execute long test area immediately - LONG TEXT
Example
 cy.get('#open-text-area').type(longText, { delay:0  })

### verify text, element, value is visible - CY.CONTAINS()
Example
 cy.contains('Validate the required fields!').should('be.visible') 
 cy.get('.error').should('be.visible')
 cy.get('#phone').type('abc').should('have.value', '')
 cy.contains('.button', sign-up')
 cy.get('input[type="radio"][value="feedback"]')
 cy.get('input[type="checkbox"][name="email"]')
  
### After clear is empty - CLEAR()
cy.get('#firstName').type('Ana')
      .should('have.value', 'Ana')
      .clear()
      .should('have.value', '')

### Custom Commands
 cy.fillMandatoryFieldsAndSubmit()

 And the file cypress/support/commands.js add the steps
 Example:
  cy.get('#firstName').type('Ana')

### Custom Commands with data variable
Example:

const data = {
      firstName:'Ana',
      lastName:'Maria',
      email:'ana@example.com',
      text: 'text'

    }

    cy.fillMandatoryWithVariable(data)

### Select - CHECKBOX
Example:
 cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

### Select - RADIO BUTTON
Example:
cy.get('input[type="radio"][value="feedback"]').check()
     .should('have.value', 'feedback')
     .should('be.checked')


### Select - ALL RADIO BUTTON 
Example:
cy.get('#support-type')
      .find('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
            .should('be.checked')


### Checking (and unchecking) inputs of type checkbox
Example:
cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

### Uploading files with Cypress
Example:

      cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })
      

### Other Uploading files simulating drag-drop
Example:
cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })

### ALIAS
Example:
cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(input => {
       expect(input[0].files[0].name).to.equal('example.json')
     })

### Handling links that open in another browser tab 
Example:
it.only('Verify the privacy policy', () => {
    cy.contains('Privacy Policy')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')

  })

### INVOKE - Handling links that open in another browser tab - - remove attribute
Example:

Another option 
 cy.contains('a', 'Privacy Policy')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('#title', 'TAT CSC - Privacy Policy')
      .should('be.visible')

### Validates the independet privacy policy page
Example:
cy.visit('./src/privacy.html')

    cy.contains('h1', 'Privacy Policy')
        .should('be.visible')
    cy.contains('p', 'Talking About Testing')
        .should('be.visible')

#########################################################################################

OBS NPM SCRIPTS
Caso alguém tenha habilitado o npm auto detect e mesmo assim não apareceu, é só "recolher" (ou minimizar) todas as opções do explorer (open editors, outline, timeline) e clicar com o botão direito do mouse no painel do explorer. Deve aparecer uma dialog onde você pode selecionar o npm pra aparecer :)

### SIMULATING THE DIMENSIONS DEVICE
Example:

First tópic
Add in the file package.json,  this:
Mode view
"cy:open:mobile": "cypress open --config viewportWidth=410 viewportHeight=860",
Mode Headless
"test:mobile": "cypress run --config viewportWidth=410 viewportHeight=860"

Second Tópic
Add in the file cypress.config.js, this:
ideo: true,
  viewportHeight: 880,
  viewportWidth: 1280,


### Project Documentation
Readme with comands to use im my project

### Update project
There is a new file TAT-CSC-refactory.cy.js for refactory and to use custom.commands 






