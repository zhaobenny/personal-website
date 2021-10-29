// cypress/integration/app.spec.js

describe('Resume', () => {
    it('navigate to the resume page', () => {
      // Start from the index page
      cy.visit('/')

      // Find a nav link with an href attribute containing "about" and click it
      cy.get('nav > a[href*="resume"]').click()

      // The new url should include "/about"
      cy.url().should('include', '/resume')

      // The new page should contain an h1 with "About page"
      cy.get('button').contains('Save as PDF')
    })
  })

