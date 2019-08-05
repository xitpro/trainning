import { combineReducers } from 'redux';
import { productReducer } from './productReducer.js';
import { userReducer } from './userReducer.js';

const rootReducer = combineReducers({
  productReducer,
  userReducer,
});

export default rootReducer;
