import { PRODUCT_CODE_TO_BUY, INSERT_MONEY  } from '../actions/actionCreator';

const userActions = (state = { code: null, amount: null }, action)  => {
    switch (action.type) {
        case PRODUCT_CODE_TO_BUY:
            return {
                code: action.payload,
                ...state,
            };
        case INSERT_MONEY:
            return {
                amount: action.payload,
                ...state,
            };
        default:
            return state;
    }
}

export default userActions;
