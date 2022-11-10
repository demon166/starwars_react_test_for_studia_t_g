import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Outlet } from 'react-router-dom';
import { PublicRouteConfig } from 'app/routing/PublicRouteConfig';

const DefaultLayout = () => {
  return (
    <div>
      <Menubar model={PublicRouteConfig}/>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
