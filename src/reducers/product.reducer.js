import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  allProducts: [],
  currentPageNumber: 1,
};

const productData = (state, action) => {
  return {
    ...state,
    allProducts: action.payload,
  };
};

const currentPageNumber = (state, action) => {
  return {
    ...state,
    currentPageNumber: action.payload,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.userConstants.PRODUCT_DATA:
      return productData(state, action);

    case types.userConstants.HANDLE_PAGE_NUMBER:
      return currentPageNumber(state, action);
    default:
      return state;
  }
};
