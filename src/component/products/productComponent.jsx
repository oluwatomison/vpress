import React from "react";
import RatingStar from "./ratingComponent";
import userRating from "../../hooks/userRatings";
import PropTypes from "prop-types"

const ProductComponent = ({ image, price, name, rating, onAdd }) => {

   const ratings = userRating(
    (rating, fraction, key) => {
      rating.push(
      <RatingStar key={key} fraction={fraction} />);
    },
    [5,rating]
  );
  return (
    <div data-test= "product-component"className="flex flex-col items-center justify-between gap-4 w-full h-full rounded-md overflow-hidden bg-white shadow-lg">
      <img
        src={image}
        alt="product image"
        className="w-full h-[300px] object-cover object-center hover:scale-105 transition-all hover:saturate-0"
        data-test="image-component"
      />
      <h4 data-test="price-component" className="font-bold text-center text-lg text-[#001f4d]">{price}</h4>
      <p data-test= "title-component" className="text-base text-center text-[#7889a1]">{name}</p>
      <div data-test= "rating-component" className="flex gap-0 justify-center">{ratings}</div>
      <button
      data-test="submit-button"
        className="text-xl font-bold mb-4 text-[#d03859] hover:border-b-2 border-[#d03859] transition-all"
        onClick={onAdd}
      >
        Add to Basket
      </button>
    </div>
  );
};

ProductComponent.propTypes = {
  image:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
  onAdd:PropTypes.func
}

export default ProductComponent;
