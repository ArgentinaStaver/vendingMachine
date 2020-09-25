import { PRODUCT_CODE_TO_BUY, INSERT_MONEY, DECREMENT_STOCK } from '../actions/actionCreator';

const userActions = (state = { code: '', amount: null }, action)  => {
    switch (action.type) {
        case PRODUCT_CODE_TO_BUY:
            return {
                ...state,
                code: action.payload,
            };
        case INSERT_MONEY:
            return {
                ...state,
                amount: action.payload,
            };
        default:
            return state;
    }
}

export default userActions;
