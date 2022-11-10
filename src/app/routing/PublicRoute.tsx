import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from 'pages/errors/Error404';

const PublicRoute = () => (
  <Routes>
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default PublicRoute;
