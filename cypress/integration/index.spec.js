describe('Index', () => {
    it('scroll down FAQ', () => {
        cy.get('#FAQ').scrollIntoView().should('be.visible')
    })

    it('fill in a contact form', () => {
        cy.get('#contact').within(() => {
            cy.get('#name').type('Cypress Test')
            cy.get('#email').type('Cypress@Test')
            cy.get('#message').type('Cypress Test')
            cy.get('div > button').click()
        })
    })

  })