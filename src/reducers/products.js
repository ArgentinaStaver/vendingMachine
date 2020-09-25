import { ADD_ALL_PRODUCTS, DECREMENT_STOCK } from '../actions/actionCreator';

const products = (state = [], action)  => {
    switch (action.type) {
        case ADD_ALL_PRODUCTS:
            return action.payload;
        case DECREMENT_STOCK:
            return state.map(project => {
                if (project.code == action.payload) {
                    project.quantity--;
                    return project;
                }
                return project;
            });
        default:
            return state;
    }
}

export default products;