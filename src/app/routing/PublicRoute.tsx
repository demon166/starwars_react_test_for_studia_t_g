import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error404Page } from 'pages';
import { Layout } from 'shared/ui';
import { PublicRouteConfig } from './PublicRouteConfig';

const PublicRoute = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {
          PublicRouteConfig.map(({ to, element }) => (
            <Route path={to} element={element()} key={to} errorElement={<Error404Page />} />
          ))
        }
    </Route>
    <Route path="*" element={<Error404Page />} />
  </Routes>
);

export default PublicRoute;
