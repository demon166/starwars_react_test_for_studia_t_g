import React from 'react';
import { AppButton } from 'shared/ui';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Error404Page = () => (
  <div className={styles.wrap}>
    <h1>404</h1>
    <Link to="/">
      <AppButton color="green">Return</AppButton>
    </Link>
  </div>
);

export default Error404Page;
