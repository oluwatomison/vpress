import React from "react";

const ProductGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
      {children}
    </div>
  );
};

export default ProductGrid;
