//Arquivo contendo os casos de testes relacionados a login

<reference types="cypress" />

let user

describe('Login Users', () => {
  beforeEach(() => {
    cy.generateDataUser().then(data => {
      user = data
    }).then(() => {
      cy.visit('/')
      cy.navigateMenu('Signup / Login')
      cy.signupNewUser(user)
      cy.createNewUser(user)
      cy.finalizeCreateProcess()
      cy.navigateMenu('Logout')
      cy.verifyLoadHome()
    })
  })

  it('TC02 - Login User with correct email and password', () => {
    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifySucessLogin(user)

    cy.navigateMenu('Delete Account')
    cy.finalizeDeleteProcess()
    cy.verifyLoadHome()
  })

  it('TC03 - Login User with incorrect email and password', () => {
    user.email = `${user.first_name}.${user.last_name}@pgats.juliodelima.com.br`
    user.password = 'wrong_pass'

    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifyLoginFail()
  })

  it('TC04 - Logout User', () => {
    cy.visit('/')
    cy.verifyLoadHome()

    cy.navigateMenu('Signup / Login')
    cy.loginUser(user)
    cy.verifySucessLogin(user)

    cy.navigateMenu('Logout')
    cy.verifyLoadHome()
  })
})
