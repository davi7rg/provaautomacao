//Arquivo contendo os casos de testes relacionados a produtos

<reference types="cypress" />

describe('Store Products', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('TC08 - Verify All Products and product detail page', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Products')
    cy.selectFirstProductFromList()
    cy.verifyProductInfo()
  })

  it('TC09 - Search Product', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Products')
    cy.searchProduct('Cotton')
    cy.verifyProductSearch('Cotton')
  })
})
