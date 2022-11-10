import React, { FC } from 'react';
import { PublicRouteConfig } from 'app/routing/PublicRouteConfig';
import MenuItem from './MenuItem';
import styles from './index.module.scss';

const Menu: FC = () => (
  <nav className={styles.menu}>
    {PublicRouteConfig.map(({ to, label }) => (
      <div className={styles.menu__item} key={to}>
        <MenuItem to={to}>{label}</MenuItem>
      </div>
    ))}
  </nav>
);

export default Menu;
