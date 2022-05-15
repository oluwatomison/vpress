import React from "react";
import PropTypes from "prop-types"

const Card = ({ img, inStock}) => {
  return (
    <div className="w-full md:w-9/12 lg:w-5/12 h-[500px] bg-white relative rounded-md overflow-clip">
      <img
        src={img}
        alt="card image"
        className="w-full h-full object-cover object-center"
      />
      <div className="opacity-0 absolute top-0 left-0 hover:opacity-100 z-10 w-full h-full bg-[#fff8f9]/25 transition-all flex items-end">
        <div className="flex flex-col justify-center w-full items-center h-2/5 bg-[#fff8f9]">
          <p className="font-bold w-full text-center text-lg text-[#001f4d]">
            {`${inStock?"AVAILABLE":"OUT OF STOCK"}`}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img:PropTypes.string.isRequired,
  inStock:PropTypes.bool.isRequired
}

export default Card;
