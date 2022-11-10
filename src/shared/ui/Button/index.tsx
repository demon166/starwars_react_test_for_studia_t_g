import React from 'react';
import { Button as PrimeButton, ButtonProps } from 'primereact/button';
import styles from './index.module.scss';

const Button = ({ children }: ButtonProps) => (
  <PrimeButton className={styles.button}>{ children }</PrimeButton>
);

export default Button;
