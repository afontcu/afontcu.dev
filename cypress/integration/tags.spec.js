it.only('All tags are accessible', () => {
  let tags = []
  cy.visit('/tags')

  cy.findByRole('main')
    .within(() => {
      // there must be a better way... I just want to collect all href attrs
      // so that I can navigate them afterwards.
      cy.findAllByRole('link').each(post => {
        cy.wrap(post)
          .should('have.attr', 'href')
          .then(href => {
            tags = [...tags, href]
          })
      })
    })
    .then(() => {
      tags.forEach(tag => {
        cy.visit(tag)
        cy.findAllByTestId('post-list-link')
          // For now I'll just assert that a list of post is rendered.
          .should('have.length.greaterThan', 0)
      })
    })
})
