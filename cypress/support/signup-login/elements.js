//Arquivo com mapeamento de elementos relacionados ao login e validacao de login

<reference types="cypress" />

const ELEMENTS = {
  LOGIN_FORM: {
    H2_FORM_NAME: 'div[class="login-form"] h2',
    INPUT_EMAIL: 'div[class="login-form"] input[data-qa="login-email"]',
    INPUT_PASSWORD: 'div[class="login-form"] input[data-qa="login-password"]',
    BUTTON_LOGIN: 'div[class="login-form"] button[data-qa="login-button"]',
    P_ERROR_MESSAGE: 'div[class="login-form"] p'
  },
  SIGNUP_FORM: {
    H2_FORM_NAME: 'div[class="signup-form"] h2',
    INPUT_NAME: 'div[class="signup-form"] input[data-qa="signup-name"]',
    INPUT_EMAIL: 'div[class="signup-form"] input[data-qa="signup-email"]',
    BUTTON_SIGNUP: 'div[class="signup-form"] button[data-qa="signup-button"]',
    P_ERROR_MESSAGE: 'div[class="signup-form"] p'
  },
  ACCOUNT_INFORMATION: {
    H2_FORM_NAME: 'div[class="login-form"] h2',
    LABEL_TITLE: 'label[for*="id_gender"]',
    INPUT_PASSWORD: 'input[data-qa="password"]',
    SELECT_BIRTH_DAY: 'select[data-qa="days"]',
    SELECT_BIRTH_MONTH: 'select[data-qa="months"]',
    SELECT_BIRTH_YEAR: 'select[data-qa="years"]',
    INPUT_NEWSLETTER: 'input[id="newsletter"]',
    INPUT_OPTIN: 'input[id="optin"]',
    INPUT_FIRST_NAME: 'input[data-qa="first_name"]',
    INPUT_LAST_NAME: 'input[data-qa="last_name"]',
    INPUT_COMPANY: 'input[data-qa="company"]',
    INPUT_ADDRESS: 'input[data-qa="address"]',
    SELECT_COUNTRY: 'select[data-qa="country"]',
    INPUT_STATE: 'input[data-qa="state"]',
    INPUT_CITY: 'input[data-qa="city"]',
    INPUT_ZIPCODE: 'input[data-qa="zipcode"]',
    INPUT_MOBILE_NUMBER: 'input[data-qa="mobile_number"]',
    BUTTON_CREATE_ACCOUNT: 'button[data-qa="create-account"]'
  },
  ACCOUNT_CREATED: {
    H2_FORM_NAME: 'h2[data-qa="account-created"]',
    A_CONTINUE: 'a[data-qa="continue-button"]'
  },
  ACCOUNT_DELETED: {
    H2_FORM_NAME: 'h2[data-qa="account-deleted"]',
    A_CONTINUE: 'a[data-qa="continue-button"]'
  }
}

export { ELEMENTS }
