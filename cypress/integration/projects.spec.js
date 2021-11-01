describe('Projects', () => {
    it('Visit projects page', () => {
        cy.get('nav > [href="/projects"]').click()
        cy.url().should('include', '/projects')
        cy.get('h1').should('contain', 'Projects')
        cy.get('section > div > section').children().should('have.length.to.be.greaterThan', 3)
    })
  })