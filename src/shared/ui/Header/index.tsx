import React, { FC, memo } from 'react';
import styles from './index.module.scss';
import HeaderLogo from './HeaderLogo';
import Menu from './Menu';

const Header: FC = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.header__wrap}>
        <HeaderLogo />
        <Menu />
      </div>
    </div>
  </header>
);

export default memo(Header);
