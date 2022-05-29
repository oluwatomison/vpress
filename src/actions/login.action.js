import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
import AuthModule from '../modules/Auth.module';

const allowUserLogin = () => {
  return () => {
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
