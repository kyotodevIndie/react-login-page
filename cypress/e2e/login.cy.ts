describe('Login Test', () => {
  it('should log in and log out with valid credentials', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.get('[data-testid="cypress-title-signin"]').should(
      'contain',
      'Sign in to your account',
    )

    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/user')

    cy.get('[data-testid="cypress-title-userInfo"]').should(
      'contain',
      'User Info',
    )

    cy.get('[data-testid="cypress-link-signout"]').click()

    cy.url().should('include', '/')
  })

  it('should display an error message with invalid credentials', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.get('input[name="username"]').type('invalid_username')
    cy.get('input[name="password"]').type('invalid_password')

    cy.get('[data-testid="cypress-title-signin"]').should(
      'contain',
      'Sign in to your account',
    )

    cy.get('button[type="submit"]').click()

    cy.get('.Toastify__toast-container').should('be.visible')
  })
})
