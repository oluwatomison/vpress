import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  userStatus: null,
};

const userLogin = (state, action) => {
  return {
    ...state,
    userStatus: action.payload,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.userConstants.USER_LOGIN:
      return userLogin(state, action);
    default:
      return state;
  }
};
