import React from "react";
import PropTypes from "prop-types"

const ProductDetailLayout=({children})=>{
    return <div className="flex flex-wrap gap-4 md:flex-nowrap justify-center m-4">{children}</div>
}

ProductDetailLayout.propTypes = {
  children:PropTypes.array.isRequired,
}
export default ProductDetailLayout;