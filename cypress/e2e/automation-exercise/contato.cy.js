//Arquivo contendo os casos de testes relacionados a contato

<reference types="cypress" />

let message

describe('Contact Form', () => {
  beforeEach(() => {
    cy.generateDataMessage().then(data => {
      message = data
    }).then(() => {
      cy.visit('/')
    })
  })

  it('TC06 - Send message with Contact Us Form', () => {
    cy.verifyLoadHome()
    cy.navigateMenu('Contact us')
    cy.sendContactMessage(message)
    cy.finalizeContactMessageProcess()
    cy.verifyLoadHome()
  })
})
