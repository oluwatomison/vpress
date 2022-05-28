import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
import AuthModule from '../modules/Auth.module';
const userLogin = (payload) => {
  return {
    type: types.userConstants.USER_LOGIN,
    payload,
  };
};

const allowUserLogin = () => {
  return (dispatch) => {
    AuthModule.authenticateUser('accesstoken');
    Toast.fire({
      text: `Welcome New user`,
      icon: 'success',
    });
  };
};

const logoutUser = () => {
  return async () => {
    AuthModule.signOut();
  };
};

export {allowUserLogin, logoutUser};
