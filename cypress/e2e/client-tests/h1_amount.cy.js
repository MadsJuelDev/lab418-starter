/// <reference types="cypress" />

context('h1 amount on frontpage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should have only one h1 tag', () => {
    cy.get('h1').should('have.length', 1)
  })
})
