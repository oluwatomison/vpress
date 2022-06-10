import axiosData from '../axiosData';
import config from '../../config';

/**
 * Get User information
 */

const getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await axiosData({
        method: 'GET',
        url: `${config.apiGateway.BASE_API_URL}`,
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

const handlePagination = (page, limit) => {
  // console.log('Services api', {page, limit});
  return new Promise(async (resolve, reject) => {
    try {
      const {data, error} = await axiosData({
        method: 'GET',
        url: `${config.apiGateway.BASE_API_URL}?limit=${limit}&page=${page}`,
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
  handlePagination,
};
