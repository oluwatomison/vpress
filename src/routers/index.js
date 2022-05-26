import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../component/header/header';
import AllProduct from '../views/home';
import ProductDetailPage from '../views/productDetails';
import Login from '../views/onboarding/login';
export default () => (
  <Router>
    {/* <Header /> */}
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<AllProduct />} />
      <Route
        exact
        path="/product/:id/:type/:location/:status"
        element={<ProductDetailPage />}
      />
    </Routes>
  </Router>
);
