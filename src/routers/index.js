import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../component/header/header";
import AllProduct from "../pages/home";
import ProductDetailPage from "../pages/productDetails";
export default () => (
     <Router>
          <Header />
          <Routes>
               <Route exact path="/" element={<AllProduct />} />
               <Route exact path="/:id" element={<ProductDetailPage />} />
          </Routes>
     </Router>
);
