import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
const userLogin = (payload) => {
  console.log(payload);
  return {
    type: types.userConstants.USER_LOGIN,
    payload,
  };
};

const allowUserLogin = (currentLoginState) => {
  return (dispatch) => {
    dispatch(userLogin(currentLoginState));
    if (currentLoginState) {
      Toast.fire({
        text: `Welcome New user`,
        icon: 'success',
      });
    } else if (!currentLoginState) {
      Toast.fire({
        text: `login user information`,
        icon: 'error',
      });
    }
  };
};

export {allowUserLogin};
