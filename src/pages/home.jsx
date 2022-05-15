import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import ProductComponent from "../component/products/productComponent";
import ProductGrid from "../component/products/productGrid";
import CustomButton from "../component/button/customButton";
import CustomSearchForm from "../component/search/customSearchForm";

const AllProduct = () => {
  const dispatch = useDispatch();
  const ref = useRef("");
  const [limit, setLimiter] = useState(8);
  const [,setProductFilter]=useState(false);
  useEffect(() => {
    dispatch(actions.getAllProductInfo())
  }, []);

 const filter=(val,index)=>{
    if(!ref.current.trim()){
      return true;
    }
    else if(val?.Title.toLowerCase().includes(ref.current.toLowerCase().trim())){
      return true;
    }
    return false;
  }

const products = useSelector((state)=> state.productData.allProducts.Products || [])

 const handleSubmit=()=>{
    setProductFilter((prev)=>!prev);
  }
  return (
    <>
     <div className="flex mt-10 sm:mt-0  mb-4 justify-end">
          <CustomSearchForm 
          ref={ref} 
          onSubmit={handleSubmit} 
          />
      </div>
      <ProductGrid>
        {products && products.filter(filter).slice(0,limit).map((product, index) => {
          return (
            <Link key={index} to={product?.MoonpigProductNo}>
                <ProductComponent
                  key={index}
                  price={`${product?.Price.Currency}${product?.Price?.Value}`}
                  onAdd={() => {}}
                  image={product?.ProductImage?.Link?.Href}
                  name={product?.Title}
                  rating={product?.Reviews?.AverageStarReviewRating}
                />
            </Link>
          );
        })}
      </ProductGrid>
      {
        limit === products.length ? (
        <></>)
        :
        (
           <div className="flex mt-4 flex-col items-center">
              <CustomButton onClick={() => {
                if(limit + 4 > products.length) {
                  setLimiter(products.length)
                }
                  else {
                    setLimiter (limit + 4)
                  }
                }}
              >
                  View More
            </CustomButton>
          </div>
        )
      }
      
    </>
    
  );
};


export default AllProduct;