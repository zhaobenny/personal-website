// cypress/integration/resume.spec.js

describe('Resume', () => {
    it('navigate to the resume page', () => {
      // Find a nav link with an href attribute containing "about" and click it
      cy.get('nav > a[href*="resume"]').click()

      // The new url should include "/about"
      cy.url().should('include', '/resume')

      // The new page should contain an button saving as PDF
      cy.get('button').contains('Save as PDF')
    })
  })

