//Arquivo responsavel pela validacao dos dados relacionados a contatos

<reference types="cypress" />

const el = require('./elements').ELEMENTS

Cypress.Commands.add('sendContactMessage', (message) => {
  cy.get(el.CONTACT_FORM.H2_FORM_NAME)
    .should('be.visible')
    .should('include.text', 'Get In Touch')

  cy.get(el.CONTACT_FORM.INPUT_NAME)
    .type(message.name)
  cy.get(el.CONTACT_FORM.INPUT_EMAIL)
    .type(message.email)
  cy.get(el.CONTACT_FORM.INPUT_SUBJECT)
    .type(message.subject)
  cy.get(el.CONTACT_FORM.TEXTAREA_MESSAGE)
    .type(message.message)

  cy.fixture('contact-form-upload-file.png').as('fileUpload')
  cy.get(el.CONTACT_FORM.INPUT_UPLOAD_FILE)
    .selectFile('@fileUpload')

  cy.get(el.CONTACT_FORM.INPUT_SUBMIT_BUTTON)
    .click()
})

Cypress.Commands.add('finalizeContactMessageProcess', () => {
  cy.get(el.CONTACT_FORM.DIV_MESSAGE_SUCCESS)
    .should('be.visible')
    .should('include.text', 'Success! Your details have been submitted successfully.')
  cy.get(el.CONTACT_FORM.A_BUTTON_SUCCESS)
    .click()
})
