//Arquivo responsavel pela validacao dos dados relacionados a home

<reference types="cypress" />

const el = require('./elements').ELEMENTS

Cypress.Commands.add('verifyLoadHome', () => {
  cy.get(el.HEAD.TITLE)
    .should('include.text', 'Automation Exercise')

  cy.get(el.HEADER.IMG_LOGO)
    .should('be.visible')

  cy.get(el.HEADER.DIV_MENU)
    .should('be.visible')
    .find('li')
    .should('have.lengthOf', 8)
})

Cypress.Commands.add('navigateMenu', (menu) => {
  cy.get(el.HEADER.DIV_MENU)
    .find('li')
    .contains(menu)
    .click()
})

Cypress.Commands.add('verifySucessLogin', (user) => {
  const fullname = `${user.first_name} ${user.last_name}`
  cy.get(el.HEADER.DIV_MENU)
    .find('li')
    .contains('Logged in as')
    .should('be.visible')
    .should('include.text', fullname)
})

Cypress.Commands.add('subscribeNewsletter', (user) => {
  cy.get(el.FOOTER.DIV_WIDGET_AREA)
    .scrollIntoView()

  cy.get(el.FOOTER.H2_FORM_NAME)
    .contains('Subscription')
    .should('be.visible')
    .should('include.text', 'Subscription')

  cy.get(el.FOOTER.INPUT_EMAIL_SUBSCRIBE)
    .type(user.email)

  cy.get(el.FOOTER.BUTTON_SUBSCRIBE)
    .click()

  cy.get(el.FOOTER.DIV_MESSAGE_SUCCESS)
    .should('be.visible')
    .should('include.text', 'You have been successfully subscribed!')
})
