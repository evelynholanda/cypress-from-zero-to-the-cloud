

// beforeEach() and visit()

describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
   
  /// All tests cases



// title TITLE()

  it('checks the application title', () => {
  
    cy.title().should('be.equal', 'TAT Customer Service Center')
  })


  it('fills in the required fields and submits the form', () => {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('ana@gmail.com')
    cy.get('#open-text-area').type('Hello')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  // For execute long test area immediately - LONG TEXT
  it('fills form for long text example in the text area', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvxwyz', 10)

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('ana@gmail.com')
    cy.get('#open-text-area').type(longText, { delay:0  })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  // verify text, element, value is visible - CY.CONTAINS()
  it('displays an error message when submitting the form with an email with invalid formatting', () => {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('anagmail,com')
    cy.get('#open-text-area').type('test email error')
    cy.get('button[type="submit"]').click()
    cy.get('.error')
      .should('be.visible')
    cy.contains('Validate the required fields!').should('be.visible')
    
    
  })

  it('validates that the phone input field only accepts numbers', () => {
    
    cy.get('#phone')
      .type('abc')
      .should('have.value', '')

  })

  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('ana@gmail.com')
    cy.get('#open-text-area').type('test email error')
    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()
    //Assertions
    cy.get('.error')
      .should('be.visible')
    cy.contains('Validate the required fields!').should('be.visible')

  })

  it('displays an success message when the correct form', () => {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Evelyn')
    cy.get('#email').type('ana@gmail.com')
    cy.get('#open-text-area').type('test email error')
    cy.get('#phone')
    .type('123456')
    cy.get('button[type="submit"]').click()
    //Assertions

    cy.get('.success')
      .should('be.visible')
      cy.contains('Message successfully sent.').should('be.visible')
    
  })

  // After clear is empty - CLEAR()
  it('validates that the value is not empty and after clear is empty', () => {
    cy.get('#firstName').type('Ana')
      .should('have.value', 'Ana')
      .clear()
      .should('have.value', '')

    cy.get('#lastName').type('Evelyn')
      .should('have.value', 'Evelyn')
      .clear()
      .should('have.value', '')

    cy.get('#email').type('ana@example.com')
      .should('have.value', 'ana@example.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone').type('123456')
      .should('have.value', '123456')
      .clear()
      .should('have.value', '')

  })

  it('validates displays an error message when submitting the form without filling the required fields', () => {
    
    cy.get('button[type="submit"]').click()
    //Assertions
    cy.get('.error')
      .should('be.visible')
    cy.contains('Validate the required fields!').should('be.visible')

  })

  // Custom Commands 
  it('successfully submits the form using a custom command', () => {
    
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')

  })
// Custom Commands with data variable
  it('validates with variable and custom command', () => {
    const data = {
      firstName:'Ana',
      lastName:'Maria',
      email:'ana@example.com',
      text: 'text'

    }

    cy.fillMandatoryWithVariable(data)
    cy.get('.success').should('be.visible')

  })

  // Select - CHECKBOX WITH VALUE
  it('selects a product (YouTube) by its content', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
     
  })

  //Select - CHECKBOX WITH VALUE
  it('selects a product (Mentorship) by its value', () => {
    cy.get('#product')
    .select('Mentorship')
    .should('have.value', 'mentorship')
  })

  // Select - CHECKBOX WITH INDEX [1]
  it('selects a product (blog) by its index', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  // RADIO BUTTON
  it('select the radio button', () => {
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('have.value', 'feedback')
    .should('be.checked')
    

  })
// ALL RADIO BUTTON
  it('checks all radio buttons with EACH()', () => {
    cy.get('#support-type')
      .find('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
            .should('be.checked')
    
      })
    })

//Checking (and unchecking) inputs of type checkbox
   it('checks both checkboxes, then unchecks the last one', () => {

    cy.get('input[type="checkbox"][name="email"]')
      .check()
      .should('be.checked')
    cy.get('input[type="checkbox"][name="phone"]')
      .check()
      .should('be.checked')
    cy.get('input[type="checkbox"][name="email"]')
    .uncheck()
   }) 
// Checking (and unchecking) inputs of type checkbox
   it('Other example with checks both checkboxes, then unchecks the last one', () => {

    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
    })

// Uploading files with Cypress
    it('selects a file from the fixtures folder', () => {
      cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })

    })

// Other Uploading files simulating drag-drop
    it('selects a file simulatimg a drag-drop', () => {
      cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })

    })

// ALIAS

  it('selects a file using a fixture to wich an alias  was given', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(input => {
       expect(input[0].files[0].name).to.equal('example.json')
     })
    })

// Handling links that open in another browser tab
  it('Verify the privacy policy', () => {
    cy.contains('Privacy Policy')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')

  })

  // Another option INVOKE - Handling links that open in another browser tab - - remove attribute
  it('Verify the privacy policy remove target', () => {
    cy.contains('a', 'Privacy Policy')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('#title', 'TAT CSC - Privacy Policy')
      .should('be.visible')

  })
})
