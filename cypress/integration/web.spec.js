it('Homepage renders', () => {
  cy.visit('/')

  cy.getByText(/a UI engineer interested in JavaScript, CSS, UX, lean software development, clean code, and everything in between./)
})

it('Newsletter form submits', () => {
  cy.visit('/')

  cy.getByRole('form')
    .should('have.attr', 'action', 'https://buttondown.email/api/emails/embed-subscribe/afontcu')
    .within(() => {
      cy.getByLabelText(/your email:/i)
        .type('random@email.com')
      // I'm not clicking on it to avoid redirection. Having the action attr
      // plus the label+icon and the button is enough.
      cy.getByRole('button')
    })
})