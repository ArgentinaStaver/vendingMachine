export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS';
export const PRODUCT_CODE_TO_BUY = 'PRODUCT_CODE_TO_BUY';
export const INSERT_MONEY = 'INSERT_MONEY';


export const addProducts = (products) => {
  return {
    type: ADD_ALL_PRODUCTS,
    payload: products
  }
}

export const productCodeToBuy = (code) => {
  return {
    type: PRODUCT_CODE_TO_BUY,
    payload: code
  }
}

const insertMoney = (amount) => {
    return {
      type: INSERT_MONEY,
      payload: amount
    }
}

// export const fetchAllProducts = products => dispatch(addProducts(products));
// const fetchProductCodeToBuy = code => dispatch(productCodeToBuy(code));
// const fetchInsertedMoney = amount => dispatch(insertMoney(amount));
