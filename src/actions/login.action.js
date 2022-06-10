import * as types from '../constants/ActionTypes';
import Toast from '../utils/Toast';
import AuthModule from '../modules/Auth.module';

const allowUserLogin = () => {
  return () => {
    AuthModule.authenticateUser('628cfd76d7c13ab387fde193');
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
