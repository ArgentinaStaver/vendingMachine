import { ADD_ALL_PRODUCTS } from '../actions/actionCreator';

const products = (state = [], action)  => {
    switch (action.type) {
        case ADD_ALL_PRODUCTS:
            return action.payload;
        // case ADD_ARTICLE:
        //     return [
        //         action.payload,
        //         ...state
        //     ];
        default:
            return state;
    }
}

export default products;