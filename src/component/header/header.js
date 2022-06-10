import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dominLogo from '../../assets/image/domin-logo.png';
import plusIcon from '../../assets/image/plus.png';
import * as actions from '../../actions';
import {useDispatch} from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(actions.logoutUser());
    navigate('/login');
  };
  return (
    <div className="fixed top-0 right-0 left-0 bg-[#fff] z-50 h-20 flex items-center px-4 drop-shadow-md justify-between">
      <Link to="/">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={dominLogo} alt="VPRESS-LOGO" className="h-12" />
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center">
        <div className="pl-4 cursor-pointer" onClick={handleSignout}>
          <h6>Log out</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
