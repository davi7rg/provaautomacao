//Arquivo responsavel pela validacao dos dados relacionados a produtos

<reference types="cypress" />

const el = require('./elements').ELEMENTS

Cypress.Commands.add('searchProduct', (product) => {
  cy.get(el.PRODUCT_LIST.H2_TITLE)
    .should('be.visible')
    .should('include.text', 'All Products')

  cy.get(el.PRODUCT_LIST.INPUT_SEARCH)
    .type(product)
  cy.get(el.PRODUCT_LIST.BUTTON_SUBMIT_SEARCH)
    .click()
})

Cypress.Commands.add('verifyProductSearch', (product) => {
  cy.url()
    .should('contain', `?search=${product}`)

  cy.get(el.PRODUCT_LIST.H2_TITLE)
    .should('be.visible')
    .should('include.text', 'Searched Products')

  cy.get(el.PRODUCT_LIST.DIV_PRODUCT_CARD)
    .should('have.lengthOf', 6)

  cy.get(el.PRODUCT_LIST.DIV_PRODUCT_CARD).each($el => {
    cy.wrap($el)
      .find('div[class*="productinfo"] p')
      .should('contain', product)
  })
})

Cypress.Commands.add('selectFirstProductFromList', () => {
  cy.get(el.PRODUCT_LIST.H2_TITLE)
    .should('be.visible')
    .should('include.text', 'All Products')

  cy.get(el.PRODUCT_LIST.DIV_PRODUCT_CARD)
    .should('have.lengthOf', 34)
    .first()
    .contains('View Product')
    .click()
})

Cypress.Commands.add('addProductToCart', (product) => {
  cy.get(el.PRODUCT_LIST.DIV_PRODUCT_CARD)
    .find('p')
    .contains(product)
    .siblings('a[class*="add-to-cart"]')
    .contains('Add to cart')
    .click()

  cy.get(el.MODAL_MESSAGE_CART.BUTTON_CONTINUE_SHOPPING)
    .click()
})

Cypress.Commands.add('verifyProductInfo', () => {
  cy.url()
    .should('contain', 'product_details')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('h2')
    .should('be.visible')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('p')
    .contains('Category')
    .should('be.visible')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('span')
    .contains('Rs.')
    .should('be.visible')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('p')
    .contains('Availability')
    .should('be.visible')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('p')
    .contains('Condition')
    .should('be.visible')

  cy.get(el.PRODUCT_DETAIL.DIV_CARD_INFO)
    .find('p')
    .contains('Brand')
    .should('be.visible')
})
