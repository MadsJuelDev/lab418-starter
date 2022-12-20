/// <reference types="cypress" />

describe('Image alt attributes test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('checks that all images have a non-empty alt attribute', () => {
    cy.get('img').should((imgs) => {
      imgs.each((img) => {
        expect(img).to.have.attr('alt').and('not.be.empty')
      })
    })
  })
})
