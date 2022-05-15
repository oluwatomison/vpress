import React from "react";
//import Container from "../container";
import { Link } from "react-router-dom";
import { moonPigLOGO } from "../../assets/jpg";

const Header = () => {
     return (
          <header className="fixed top-0 right-0 left-0 bg-[#fff8f9] z-50">
               <div
                    className={
                         "2xl:px-[230px] lg:px-16 md:px-8 sm:px-8 w-full flex justify-between text-white h-16 items-center"
                    }
               >
                    <Link to="/">
                         <img
                              src={moonPigLOGO}
                              alt="MOONPIG_LOGO"
                              className="h-12"
                         />
                    </Link>
               </div>
          </header>
     );
};

export default Header;
