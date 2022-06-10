import PRODUCT_API from '../services/Api/product.services.api';
import Toast from '../utils/Toast';
import * as types from '../constants/ActionTypes';

const allProducts = (payload) => {
  return {
    type: types.userConstants.PRODUCT_DATA,
    payload,
  };
};

const currentPageNumber = (payload) => {
  return {
    type: types.userConstants.HANDLE_PAGE_NUMBER,
    payload,
  };
};

const getAllProductInfo = () => {
  return async (dispatch) => {
    await PRODUCT_API.getAllProducts()
      .then((res) => {
        dispatch(allProducts(res));
      })
      .catch((ex) => {
        if (ex.response) {
          Toast.fire({text: ex.message, icon: 'error'});
        }
      });
  };
};

const getPaginatedData = (page, limit) => {
  return async (dispatch) => {
    await PRODUCT_API.handlePagination(page, limit)
      .then((res) => {
        dispatch(allProducts(res));
        dispatch(currentPageNumber(res.page));
        Toast.fire({
          text: `All products fetched`,
          icon: 'success',
        });
      })
      .catch((ex) => {
        if (ex.response) {
          Toast.fire({text: ex.message, icon: 'error'});
        }
      });
  };
};

export {getAllProductInfo, getPaginatedData};
