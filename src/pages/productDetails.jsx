import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/productDetails/card";
import DetailsWriteUp from "../component/productDetails/detailsWriteUps";
import ProductDetailLayout from "../component/productDetails/productDetailLayout";
import Toast from "../utils/Toast";

const ProductDetailPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getOneProductWithProductId(location.pathname.split("/")[1]))
  }, []);

  const singleProduct = useSelector((state)=> state.productData.productWithProductId)
 
  return (
        <>
            {singleProduct ? 
                (
                    <ProductDetailLayout>
                        <Card
                            inStock={singleProduct?.InStock}
                            img={singleProduct?.ImageUrls[0]?.ImageUrl}
                            price={"$50"}
                        />
                        <DetailsWriteUp
                            title={singleProduct?.Title}
                            description={singleProduct?.Description}
                            onBuy={() => 
                                    Toast.fire({
                                    text: `Item purchased`,
                                    icon: "success",
                            })}
                        />
                    </ProductDetailLayout>
                ) : (
                        <div className="h-full flex items-center bg-[#fff8f9] justify-center text-[#d03859]">
                        Loading...
                        </div>
                    )}
        </>
  )

};

export default ProductDetailPage;
