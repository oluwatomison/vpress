import * as types from "../constants/ActionTypes";

const INITIAL_STATE = {
     error: "",
     productData: [],
};

const productData = (state, action) => {
     return {
          ...state,
          productData: action.payload,
     };
};

const productFail = (state, action) => {
     return {
          ...state,
          error: action.payload,
     };
};

export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case types.userConstants.PRODUCT_DATA:
               return productData(state, action);
          case types.userConstants.PRODUCT_FAIL:
               return productFail(state, action);
          default:
               return state;
     }
};
