/// <reference types="cypress" />

describe('Find meta tags on site', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  // Find all the meta tags with the assocaited name and property

  it('Find the keywords meta tag', () => {
    cy.get('meta[name="keywords"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the description meta tag', () => {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the title meta tag', () => {
    cy.get('meta[name="title"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the meta tag with property "og:keywords"', () => {
    cy.get('meta[property="og:keywords"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the meta tag with property "og:description"', () => {
    cy.get('meta[property="og:description"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the meta tag with property "og:title"', () => {
    cy.get('meta[property="og:title"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the meta tag with property "og:image"', () => {
    cy.get('meta[property="og:image"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
  it('Find the meta tag with property "og:type"', () => {
    cy.get('meta[property="og:type"]').should('have.attr', 'content', 'website')
  })
  it('Find the meta tag with property "og:locale"', () => {
    cy.get('meta[property="og:locale"]')
      .should('have.attr', 'content')
      .and('not.be.empty')
  })
})
