import { combineReducers } from 'redux';
import products from './products';
import userActions from './userActions';

const rootReducer = combineReducers({
    products,
    userActions,
});

export default rootReducer;
