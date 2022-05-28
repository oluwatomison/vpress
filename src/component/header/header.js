import React from 'react';
import {Link} from 'react-router-dom';
import dominLogo from '../../assets/image/domin-logo.png';
import plusIcon from '../../assets/image/plus.png';
const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-[#fff] z-50 h-20 flex items-center px-4 drop-shadow-md justify-between">
      <Link to="/">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={dominLogo} alt="DOMIN-LOGO" className="h-12" />
          </div>
          <div>
            <h2 className="text-[#6b6b6b] text-center font-semibold">ASCEND</h2>
          </div>
        </div>
      </Link>
      <div>
        <img src={plusIcon} className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
};

export default Header;
