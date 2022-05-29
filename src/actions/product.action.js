import PRODUCT_API from '../services/Api/product.services.api';
import Toast from '../utils/Toast';

const getAllProductInfo = () => {
  return async () => {
    await PRODUCT_API.getAllProducts()
      .then(() => {
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
export {getAllProductInfo};
