//Arquivo com mapeamento de elementos relacionados a produtos

<reference types="cypress" />

const ELEMENTS = {
  PRODUCT_LIST: {
    H2_TITLE: 'div[class="features_items"] h2',
    DIV_PRODUCT_CARD: 'div[class="features_items"] div[class="product-image-wrapper"]',
    INPUT_SEARCH: 'input[id="search_product"]',
    BUTTON_SUBMIT_SEARCH: 'button[id="submit_search"]'
  },
  PRODUCT_DETAIL: {
    DIV_CARD_INFO: 'div[class="product-information"]'
  },
  MODAL_MESSAGE_CART: {
    BUTTON_CONTINUE_SHOPPING: 'div[class*="modal-confirm"] button[class*="btn-success"][data-dismiss="modal"]'
  }
}

export { ELEMENTS }
