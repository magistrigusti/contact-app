import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import Home from '../Home/Home';
import SingleProducts from '../Products/SingleProducts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path={ROUTES.PRODUCTS} element={<SingleProducts />} />
    </Routes>
  );
};


export default AppRoutes;