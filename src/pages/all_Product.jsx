import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import ProductComponent from "../component/products/product_component";
import ProductGrid from "../component/products/product_grid";

const AllProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAllProductInfo())
  }, []);

const newProducts = useSelector((state)=> state.productData.productData.Products || [])

  return (
    <ProductGrid>
      {newProducts.map((product, index) => {
        return (
          <ProductComponent
            key={index}
            price={`${product?.Price.Currency}${product?.Price?.Value}`}
            onAdd={() => {}}
            image={product?.ProductImage?.Link?.Href}
            name={product?.Title}
            rating={product?.Reviews?.AverageStarReviewRating}
          />
        );
      })}
    </ProductGrid>
  );
};


export default AllProduct;