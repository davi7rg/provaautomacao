//Arquivo com mapeamento de elementos relacionados a contatos

<reference types="cypress" />

const ELEMENTS = {
  CONTACT_FORM: {
    H2_FORM_NAME: 'div[class="contact-form"] h2',
    INPUT_NAME: 'div[class="contact-form"] input[data-qa="name"]',
    INPUT_EMAIL: 'div[class="contact-form"] input[data-qa="email"]',
    INPUT_SUBJECT: 'div[class="contact-form"] input[data-qa="subject"]',
    TEXTAREA_MESSAGE: 'div[class="contact-form"] textarea[data-qa="message"]',
    INPUT_UPLOAD_FILE: 'div[class="contact-form"] input[name="upload_file"]',
    INPUT_SUBMIT_BUTTON: 'div[class="contact-form"] input[data-qa="submit-button"]',
    DIV_MESSAGE_SUCCESS: 'div[class="contact-form"] div[class*="alert-success"]',
    A_BUTTON_SUCCESS: 'div[class="contact-form"] div[id="form-section"] a[class*="btn-success"]'
  }
}

export { ELEMENTS }
