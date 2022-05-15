import * as types from "../constants/ActionTypes";
import PRODUCT_API from "../services/Api/product.services.api";
import Toast from "../utils/Toast";
const productData = (payload) => {
     return {
          type: types.userConstants.PRODUCT_DATA,
          payload,
     };
};

const getOneProduct = (payload) => {
     return {
          type: types.userConstants.GET_ONE_PRODUCT,
          payload,
     };
};

const getAllProductInfo = () => {
     return async (dispatch) => {
          await PRODUCT_API.getAllProducts()
               .then((response) => {
                    dispatch(productData(response));
                    Toast.fire({
                         text: `All products fetched`,
                         icon: "success",
                    });
               })
               .catch((ex) => {
                    if (ex.response) {
                         Toast.fire({ text: ex.message, icon: "error" });
                    }
               });
     };
};

const getOneProductWithProductId = (productId) => {
     return async (dispatch) => {
          await PRODUCT_API.getProductWithProductId(productId)
               .then((response) => {
                    dispatch(getOneProduct(response));
                    Toast.fire({
                         text: `Single product fetched`,
                         icon: "success",
                    });
               })
               .catch((ex) => {
                    if (ex.response) {
                         Toast.fire({ text: ex.message, icon: "error" });
                    }
               });
     };
};
export { getAllProductInfo, getOneProductWithProductId };
