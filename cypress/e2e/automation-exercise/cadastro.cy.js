//Arquivo contendo os casos de testes relacionados a cadastro

<reference types="cypress" />

let user
let registeredUser

describe('Register Users', () => {
  before(() => {
    cy.generateDataUser().then(data => {
      registeredUser = data
    }).then(() => {
      cy.visit('/')
      cy.navigateMenu('Signup / Login')
      cy.signupNewUser(registeredUser)
      cy.createNewUser(registeredUser)
      cy.finalizeCreateProcess()
      cy.navigateMenu('Logout')
      cy.verifyLoadHome()
    })
  })

  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    })

    cy.visit('/')
  })

  it('TC01 - Register user with success', () => {
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.signupNewUser(user)
    cy.createNewUser(user)
    cy.finalizeCreateProcess()
    cy.verifySucessLogin(user)

    cy.navigateMenu('Delete Account')
    cy.finalizeDeleteProcess()
    cy.verifyLoadHome()
  })

  it('TC05 - Register User with existing email', () => {
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.signupNewUser(registeredUser)
    cy.verifySignupFail()
  })
})
