describe('Index', () => {
    it('scroll down FAQ', () => {
        cy.get('#FAQ').scrollIntoView().should('be.visible')
    })
  })