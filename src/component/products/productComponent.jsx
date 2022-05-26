import React from 'react';
import RatingStar from './ratingComponent';
import userRating from '../../hooks/userRatings';
import PropTypes from 'prop-types';

const ACTIVE = 'Active';
const ERROR = 'Error';
const ProductComponent = ({image, serialNo, location, status, type}) => {
  console.log({image});
  return (
    <div
      data-test="product-component"
      className="h-[200px] bg-white drop-shadow-xl"
      //className="flex flex-col items-center justify-between gap-4 w-full h-full rounded-md overflow-hidden bg-white shadow-lg"
    >
      <div className="flex p-5">
        <div className="w-[200px]">
          <img src={image} />
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
      {/* <img
        src={image}
        alt="product image"
        className="w-full h-[300px] object-cover object-center hover:scale-105 transition-all hover:saturate-0"
        data-test="image-component"
      /> */}
      {/* <h4
        data-test="price-component"
        className="font-bold text-center text-lg text-[#001f4d]">
        {price}
      </h4>
      <p
        data-test="title-component"
        className="text-base text-center text-[#7889a1]">
        {name}
      </p>
      <div data-test="rating-component" className="flex gap-0 justify-center">
        {ratings}
      </div>
      <button
        data-test="submit-button"
        className="text-xl font-bold mb-4 text-[#d03859] hover:border-b-2 border-[#d03859] transition-all"
        onClick={onAdd}>
        Add to Basket
      </button> */}
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
