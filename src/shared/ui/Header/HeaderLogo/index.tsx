import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PublicRouteEnum } from 'app/routing/RouteEnums';
import Logo from 'shared/ui/Logo';
import styles from './index.module.scss';

const HeaderLogo: FC = () => (
  <Link to={PublicRouteEnum.home} className={styles.logo}>
    <Logo />
  </Link>
);

export default HeaderLogo;
