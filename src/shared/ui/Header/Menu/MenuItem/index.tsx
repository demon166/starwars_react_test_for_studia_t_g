import React, { FC } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import classNames from 'classnames';

const MenuItem: FC<LinkProps> = ({ children, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      (classNames(isActive ? styles.menu__item_active : '', styles.menu__item))}
  >
    { children }
  </NavLink>
);

export default MenuItem;
