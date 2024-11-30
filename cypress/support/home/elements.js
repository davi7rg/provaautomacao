//Arquivo com mapeamento de elementos relacionados a home


<reference types="cypress" />

const ELEMENTS = {
  HEAD: {
    TITLE: 'head title'
  },
  HEADER: {
    DIV_MENU: 'div[class^="shop-menu"]',
    IMG_LOGO: 'div[class^="logo"] img'
  },
  FOOTER: {
    DIV_WIDGET_AREA: 'div[class="footer-widget"]',
    H2_FORM_NAME: 'div[class="single-widget"] h2',
    INPUT_EMAIL_SUBSCRIBE: 'form[class="searchform"] input[id="susbscribe_email"]',
    BUTTON_SUBSCRIBE: 'form[class="searchform"] button[id="subscribe"]',
    DIV_MESSAGE_SUCCESS: 'footer div[class="form-row"] div[id="success-subscribe"]'
  }
}

export { ELEMENTS }
