import React, { memo } from 'react';
import { Button, ButtonProps } from 'primereact/button';
import styles from './index.module.scss';

type ColorsButton = 'yellow' | 'green';

interface MyButtonProps extends ButtonProps {
  color: ColorsButton;
}

const MyButton = memo(({ children, color }: MyButtonProps) => (
  <Button className={styles[`button__${color}`]}>{ children }</Button>
));

export default MyButton;
