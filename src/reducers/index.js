import {combineReducers} from 'redux';
import productData from './product.reducer';
import userLoginData from './login.reducer';
export default combineReducers({
  productData,
  userLoginData,
});
