import axiosData from "../axiosData";
import config from "../../config";

/**
 * Get User information
 */

const getAllProducts = () => {
     return new Promise(async (resolve, reject) => {
          try {
               const { data, error } = await axiosData({
                    method: "GET",
                    url: `${config.apiGateway.BASE_API_URL}/search.json`,
               });
               if (data) {
                    resolve(data);
               } else {
                    reject(error);
               }
          } catch (ex) {
               reject(ex);
          }
     });
};

const getProductWithProductId = (productId) => {
     return new Promise(async (resolve, reject) => {
          try {
               const { data, error } = await axiosData({
                    method: "GET",
                    url: `${config.apiGateway.BASE_API_URL}/product/${productId}.json`,
               });
               if (data) {
                    resolve(data);
               } else {
                    reject(error);
               }
          } catch (ex) {
               reject(ex);
          }
     });
};
export default {
     getAllProducts,
     getProductWithProductId,
};
