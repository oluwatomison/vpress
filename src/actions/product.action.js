import * as types from "../constants/ActionTypes";
import PRODUCT_API from "../services/Api/product.services.api";

const productData = (payload) => {
     return {
          type: types.userConstants.PRODUCT_DATA,
          payload,
     };
};

const productFail = (payload) => {
     return {
          type: types.userConstants.PRODUCT_FAIL,
          payload,
     };
};

const getAllProductInfo = () => {
     return async (dispatch) => {
          await PRODUCT_API.getAllProducts()
               .then((response) => {
                    console.log("List of ", { response });
                    dispatch(productData(response));
               })
               .catch((ex) => {
                    console.log({ ex });
                    if (ex.response) {
                         dispatch(productFail(ex.response.data.message));
                    } else if (ex.request) {
                         dispatch(productFail(ex));
                    } else {
                         dispatch(productFail(ex.message));
                    }
               });
     };
};

export { getAllProductInfo };
