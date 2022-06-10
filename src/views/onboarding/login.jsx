import React from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import AuthModule from '../../modules/Auth.module';
import * as actions from '../../actions';
import dominLogo from '../../assets/image/domin-logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(actions.allowUserLogin());
    navigate('/');
  };

  const redirectPath = location.state?.path || '/';

  if (AuthModule.isUserAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center pt-15">
          <img src={dominLogo} alt="DOMIN-LOGO" className="h-20" />
        </div>
        <div className="pt-[100px]">
          <p>Click on the login button to proceed</p>
        </div>
        <div className="pt-[100px] flex flex-col ">
          <div
            className="bg-[#6b6b6b] h-12 justify-center items-center flex rounded-md hover:bg-[#e9530d]"
            onClick={handleLogin}>
            <p className="text-center text-white">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
