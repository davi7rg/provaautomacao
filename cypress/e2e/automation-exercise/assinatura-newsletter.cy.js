//Arquivo contendo os casos de testes relacionados a assinatura newsletter

<reference types="cypress" />

let user

describe('Subscription Newsletter', () => {
  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    })

    cy.visit('/')
  })

  it('TC10 - Verify Subscription in home page', () => {
    cy.verifyLoadHome()
    cy.subscribeNewsletter(user)
  })
})
