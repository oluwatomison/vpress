import React from "react";
import CustomButton from "../button/customButton";
import PropTypes from "prop-types"

const DetailsWriteUp = ({ title, description, onBuy }) => {
  return (
    <div className="flex flex-col w-full items-center text-center text-[#fff] justify-between p-8 rounded-md bg-[#fff]">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl text-[#001f4d]">{title}</h3>
        < div className="font-light text-lg text-[#7889a9]">
          {description}
        </div>
      </div>
      <CustomButton  onClick={onBuy}>
        Buy Me
      </CustomButton>
    </div>
  );
};

DetailsWriteUp.propTypes = {
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  onBuy:PropTypes.func.isRequired
}

export default DetailsWriteUp;
