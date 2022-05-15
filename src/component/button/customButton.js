import React, { Children } from "react";
import PropTypes from "prop-types";

const CustomButton = ({ onClick, children }) => {
     return (
          <button
               onClick={onClick}
               className="font-bold rounded-md hover:scale-110 hover:shadow-lg active:scale-100 active:shadow-none transition-all text-[#d03859] text-xl px-6 py-1 bg-[#fff8f9] border-solid border-2 border-[#d03859]"
          >
               {children}
          </button>
     );
};

CustomButton.propTypes = {
     onClick: PropTypes.func.isRequired,
     children: PropTypes.string.isRequired,
};
export default CustomButton;
