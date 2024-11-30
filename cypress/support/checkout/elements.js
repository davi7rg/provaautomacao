//Arquivo com mapeamento de elementos relacionados a checkout

<reference types="cypress" />

const ELEMENTS = {
  CART: {
    TABLE_CART_INFO: 'table[id="cart_info_table"]',
    A_PROCEED_CHECKOUT: 'section[id="do_action"] a[class*="check_out"]'
  },
  CHECKOUT: {
    UL_DELIVERY_INFO: 'div[class="checkout-information"] ul[id="address_delivery"]',
    UL_BILLING_INFO: 'div[class="checkout-information"] ul[id="address_invoice"]',
    TABLE_CART_INFO: 'div[id="cart_info"] table',
    TEXTAREA_MESSAGE: 'div[id="ordermsg"] textarea[name="message"]',
    A_PLACE_ORDER: 'a[href="/payment"]'
  },
  PAYMENT: {
    INPUT_CARD_NAME: 'div[class="payment-information"] input[data-qa="name-on-card"]',
    INPUT_CARD_NUMBER: 'div[class="payment-information"] input[data-qa="card-number"]',
    INPUT_CARD_CVC: 'div[class="payment-information"] input[data-qa="cvc"]',
    INPUT_CARD_MONTH: 'div[class="payment-information"] input[data-qa="expiry-month"]',
    INPUT_CARD_YEAR: 'div[class="payment-information"] input[data-qa="expiry-year"]',
    BUTTON_PAY: 'div[class="payment-information"] button[data-qa="pay-button"]',
    DIV_MESSAGE_SUCCESS: 'div[class="payment-information"] form div[id="success_message"]'
  },
  PAYMENT_DONE: {
    H2_TITLE: 'div h2[data-qa="order-placed"]'
  }
}

export { ELEMENTS }
