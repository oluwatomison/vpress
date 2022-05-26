import React from "react";
import { Link } from "react-router-dom";
import dominLogo from "../../assets/image/domin-logo.png";
const Header = () => {
     return (
          <header className="fixed top-0 right-0 left-0 bg-[#fff8f9] z-50">
               <div
                    className={
                         "2xl:px-[230px] lg:px-16 md:px-8 sm:px-8 w-full flex justify-between text-white h-16 items-center"
                    }
               >
                    <Link to="/">
                         <div>
                              <h2 className="text-[#000]">ASCEND</h2>
                         </div>
                         <img
                              src={dominLogo}
                              alt="DOMIN-LOGO"
                              className="h-12"
                         />
                    </Link>
               </div>
          </header>
     );
};

export default Header;
