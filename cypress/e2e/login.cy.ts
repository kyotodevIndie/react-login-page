describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.get('[data-testid="cypress-title-signin"]').should(
      'contain',
      'Sign in to your account',
    )

    // Preencher o formulário de login
    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))

    // Clicar no botão de login
    cy.get('button[type="submit"]').click()

    // Verificar se o usuário foi redirecionado para a página após o login
    cy.url().should('include', '/user')

    // Verificar se o usuário está logado
    cy.get('[data-testid="cypress-title-userInfo"]').should(
      'contain',
      'User Info',
    )
  })

  it('should display an error message with invalid credentials', () => {
    // Visitar a página de login
    cy.visit(Cypress.env('baseUrl'))

    // Preencher o formulário de login com credenciais inválidas
    cy.get('input[name="username"]').type('invalid_username')
    cy.get('input[name="password"]').type('invalid_password')

    cy.get('[data-testid="cypress-title-signin"]').should(
      'contain',
      'Sign in to your account',
    )

    // Clicar no botão de login
    cy.get('button[type="submit"]').click()

    // Verificar se a mensagem de erro é exibida
    // cy.get('.error-message').should('be.visible')
  })
})
