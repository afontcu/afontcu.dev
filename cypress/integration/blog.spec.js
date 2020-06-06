it('All posts are accessible from homepage', () => {
  cy.visit('/')

  cy.findAllByTestId('post-list-link').each(post => {
    cy.get(post)
      .should('have.attr', 'href')
      .then(href => {
        cy.request(Cypress.config().baseUrl + href).then(resp => {
          // For now I'll just assert that Cypress could navigate to each
          // post properly === the link works.
          expect(resp.status).eq(200)
        })
      })
  })
})
