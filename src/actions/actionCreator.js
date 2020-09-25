export const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS';
export const PRODUCT_CODE_TO_BUY = 'PRODUCT_CODE_TO_BUY';
export const INSERT_MONEY = 'INSERT_MONEY';
export const DECREMENT_STOCK = 'DECREMENT_STOCK';


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

export const insertMoney = (amount) => {
    return {
      type: INSERT_MONEY,
      payload: amount
    }
}

export const decrementStock = (code) => {
    return {
      type: DECREMENT_STOCK,
      payload: code
    }
}
