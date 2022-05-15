import * as types from "../constants/ActionTypes";

const INITIAL_STATE = {
     error: "",
     allProducts: [],
     productWithProductId: null,
};

const productData = (state, action) => {
     return {
          ...state,
          allProducts: action.payload,
     };
};

const oneProductData = (state, action) => {
     return {
          ...state,
          productWithProductId: action.payload,
     };
};
export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case types.userConstants.PRODUCT_DATA:
               return productData(state, action);
          case types.userConstants.GET_ONE_PRODUCT:
               return oneProductData(state, action);
          default:
               return state;
     }
};
