import React from 'react';
import PropTypes from 'prop-types';

const ProductGrid = ({children}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 pt-[100px]">
      {children}
    </div>
  );
};

ProductGrid.propTypes = {
  children: PropTypes.array,
};

export default ProductGrid;
