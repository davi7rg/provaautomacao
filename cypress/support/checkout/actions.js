//Arquivo responsavel pela validacao dos dados relacionados a checkout

<reference types="cypress" />

const el = require('./elements').ELEMENTS

Cypress.Commands.add('verifyProductInCart', (product) => {
  cy.url()
    .should('contain', 'view_cart')

  cy.get(el.CART.TABLE_CART_INFO)
    .find('tbody tr')
    .contains(product)
    .should('be.visible')
})

Cypress.Commands.add('performCheckout', (user) => {
  cy.get(el.CART.A_PROCEED_CHECKOUT)
    .click()

  cy.get(el.CHECKOUT.UL_DELIVERY_INFO)
    .should('be.visible')
    .should('include.text', 'Your delivery address')
    .should('include.text', `${user.title} ${user.first_name} ${user.last_name}`)
    .should('include.text', `${user.company}`)
    .should('include.text', `${user.address}`)
    .should('include.text', `${user.city} ${user.state}`)
    .should('include.text', `${user.zipcode}`)
    .should('include.text', `${user.country}`)
    .should('include.text', `${user.mobile_number}`)

  cy.get(el.CHECKOUT.UL_BILLING_INFO)
    .should('be.visible')
    .should('include.text', 'Your billing address')
    .should('include.text', `${user.title} ${user.first_name} ${user.last_name}`)
    .should('include.text', `${user.company}`)
    .should('include.text', `${user.address}`)
    .should('include.text', `${user.city} ${user.state}`)
    .should('include.text', `${user.zipcode}`)
    .should('include.text', `${user.country}`)
    .should('include.text', `${user.mobile_number}`)
})

Cypress.Commands.add('verifyProductInCheckout', (product) => {
  cy.get(el.CHECKOUT.TABLE_CART_INFO)
    .find('tbody tr')
    .contains(product)
    .should('be.visible')
})

Cypress.Commands.add('performPayment', (user) => {
  cy.get(el.CHECKOUT.A_PLACE_ORDER)
    .click()

  const name = `${user.first_name} ${user.last_name}`
  cy.get(el.PAYMENT.INPUT_CARD_NAME)
    .type(name.toLocaleUpperCase())
  cy.get(el.PAYMENT.INPUT_CARD_NUMBER)
    .type(user.cc_number)
  cy.get(el.PAYMENT.INPUT_CARD_CVC)
    .type(user.cc_cvc)
  cy.get(el.PAYMENT.INPUT_CARD_MONTH)
    .type(user.cc_month)
  cy.get(el.PAYMENT.INPUT_CARD_YEAR)
    .type(user.cc_year)

  cy.window().then(win => {
    win.addEventListener('submit', () => {
      const $elMessage = win.document.querySelector(el.PAYMENT.DIV_MESSAGE_SUCCESS)

      expect($elMessage).to.be.visible // eslint-disable-line no-unused-expressions
      expect($elMessage).to.not.have.class('hide')
      expect($elMessage.innerText).to.equal('Your order has been placed successfully!')
    })
  })

  cy.get(el.PAYMENT.BUTTON_PAY)
    .click()

  cy.url()
    .should('contain', 'payment_done')

  cy.get(el.PAYMENT_DONE.H2_TITLE)
    .should('include.text', 'Order Placed!')
    .siblings('p')
    .contains('Congratulations')
    .should('be.visible')
    .should('include.text', 'Congratulations! Your order has been confirmed!')
})
