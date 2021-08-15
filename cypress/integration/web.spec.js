it('Homepage renders', () => {
  cy.visit('/')

  cy.findByText(
    /a software product engineer interested in lean software development, mostly focused on the front end/
  )
})

it('Newsletter form submits', () => {
  cy.visit('/')

  cy.findByTestId('form')
    .should(
      'have.attr',
      'action',
      'https://buttondown.email/api/emails/embed-subscribe/afontcu'
    )
    .within(() => {
      cy.findByLabelText(/your email:/i).type('random@email.com')
      // I'm not clicking on it to avoid redirection. Having the action attr
      // plus the label+icon and the button is enough.
      cy.findByRole('button')
    })
})
