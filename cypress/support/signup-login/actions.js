//Arquivo responsavel pela validacao dos dados relacionados a login

<reference types="cypress" />

const el = require('./elements').ELEMENTS

Cypress.Commands.add('loginUser', (user) => {
  cy.get(el.LOGIN_FORM.H2_FORM_NAME)
    .should('be.visible')
    .should('include.text', 'Login to your account')

  cy.get(el.LOGIN_FORM.INPUT_EMAIL)
    .type(user.email)
  cy.get(el.LOGIN_FORM.INPUT_PASSWORD)
    .type(user.password)
  cy.get(el.LOGIN_FORM.BUTTON_LOGIN)
    .click()
})

Cypress.Commands.add('signupNewUser', (user) => {
  cy.get(el.SIGNUP_FORM.H2_FORM_NAME)
    .should('be.visible')
    .should('include.text', 'New User Signup!')

  cy.get(el.SIGNUP_FORM.INPUT_NAME)
    .type(`${user.first_name} ${user.last_name}`)
  cy.get(el.SIGNUP_FORM.INPUT_EMAIL)
    .type(user.email)
  cy.get(el.SIGNUP_FORM.BUTTON_SIGNUP)
    .click()
})

Cypress.Commands.add('createNewUser', (user) => {
  cy.get(el.ACCOUNT_INFORMATION.H2_FORM_NAME)
    .contains('Information')
    .should('be.visible')
    .should('include.text', 'Enter Account Information')

  cy.get(el.ACCOUNT_INFORMATION.LABEL_TITLE)
    .contains(user.title)
    .find('input')
    .check()

  cy.get(el.ACCOUNT_INFORMATION.INPUT_PASSWORD)
    .type(user.password)

  cy.get(el.ACCOUNT_INFORMATION.SELECT_BIRTH_DAY)
    .select(user.birth_day)
  cy.get(el.ACCOUNT_INFORMATION.SELECT_BIRTH_MONTH)
    .select(user.birth_month)
  cy.get(el.ACCOUNT_INFORMATION.SELECT_BIRTH_YEAR)
    .select(user.birth_year)

  cy.get(el.ACCOUNT_INFORMATION.INPUT_NEWSLETTER)
    .check()
  cy.get(el.ACCOUNT_INFORMATION.INPUT_OPTIN)
    .check()

  cy.get(el.ACCOUNT_INFORMATION.INPUT_FIRST_NAME)
    .type(user.first_name)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_LAST_NAME)
    .type(user.last_name)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_COMPANY)
    .type(user.company)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_ADDRESS)
    .type(user.address)
  cy.get(el.ACCOUNT_INFORMATION.SELECT_COUNTRY)
    .select(user.country)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_STATE)
    .type(user.state)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_CITY)
    .type(user.city)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_ZIPCODE)
    .type(user.zipcode)
  cy.get(el.ACCOUNT_INFORMATION.INPUT_MOBILE_NUMBER)
    .type(user.mobile_number)
  cy.get(el.ACCOUNT_INFORMATION.BUTTON_CREATE_ACCOUNT)
    .click()
})

Cypress.Commands.add('finalizeCreateProcess', () => {
  cy.get(el.ACCOUNT_CREATED.H2_FORM_NAME)
    .should('be.visible')
    .should('include.text', 'Account Created!')
  cy.get(el.ACCOUNT_CREATED.A_CONTINUE)
    .click()
})

Cypress.Commands.add('finalizeDeleteProcess', () => {
  cy.get(el.ACCOUNT_DELETED.H2_FORM_NAME)
    .should('be.visible')
    .should('include.text', 'Account Deleted!')
  cy.get(el.ACCOUNT_CREATED.A_CONTINUE)
    .click()
})

Cypress.Commands.add('verifyLoginFail', () => {
  cy.get(el.LOGIN_FORM.P_ERROR_MESSAGE)
    .should('be.visible')
    .should('include.text', 'Your email or password is incorrect!')
})

Cypress.Commands.add('verifySignupFail', () => {
  cy.get(el.SIGNUP_FORM.P_ERROR_MESSAGE)
    .should('be.visible')
    .should('include.text', 'Email Address already exist!')
})
