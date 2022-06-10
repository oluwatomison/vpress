import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllProduct from '../views/home';
import Login from '../views/onboarding/login';
import PrivateRouter from './privateRouter';
import DefaultLayout from '../layout/defaultLayout';

export default () => (
  <Router>
    <Routes>
      <Route path="login" element={<Login />} />
      {/* Protected Routes */}
      <Route
        exact
        path="/"
        element={
          <PrivateRouter>
            <DefaultLayout />
          </PrivateRouter>
        }>
        <Route index element={<AllProduct />} />
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </Router>
);
