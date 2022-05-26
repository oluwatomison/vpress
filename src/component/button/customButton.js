import React, {Children} from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({onClick, title, backgroundColor}) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold rounded-md hover:scale-110 hover:shadow-lg active:scale-100 active:shadow-none transition-all text-[#fff] text-xl px-6 py-1 bg-[${backgroundColor}]`}>
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // children: PropTypes.string.isRequired,
};
export default CustomButton;
