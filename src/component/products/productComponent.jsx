import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE = 'Active';
const ERROR = 'Error';
const ProductComponent = ({image, serialNo, location, status, type}) => {
  return (
    <div
      data-test="product-component"
      className="h-[160px] bg-white drop-shadow-xl">
      <div className="flex p-5">
        <div className="w-[200px] flex justify-center">
          <img src={image} className="w-[120px] h-[120px]" />
        </div>
        <div className="w-[200px]">
          <p>
            <span className="text-[#00aec7]">S/N: </span>
            <span className="text-[#6b6b6b]">{serialNo}</span>
          </p>
          <p>
            <span className="text-[#00aec7]">Type: </span>
            <span className="text-[#6b6b6b]">{type}</span>
          </p>
          <p>
            <span className="text-[#00aec7]">Location: </span>
            <span className="text-[#6b6b6b]">{location}</span>
          </p>
          <p>
            <span className="text-[#00aec7]">Status: </span>
            <span
              className={`${
                status === ACTIVE
                  ? 'text-[#00FF00]'
                  : status === ERROR
                  ? 'text-[#ea6686]'
                  : ''
              }`}>
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

ProductComponent.propTypes = {
  // image: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // onAdd: PropTypes.func,
};

export default ProductComponent;
