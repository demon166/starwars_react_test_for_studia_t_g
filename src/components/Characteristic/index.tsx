import React from 'react';
import styles from './index.module.scss';

type CharacteristicProps = {
  value: string,
  color: string,
};

const Characteristic = ({ color, value }: CharacteristicProps) => (
  <span
    className={styles.characteristic}
    style={{ backgroundColor: color }}
  >
    { value }
  </span>
);

export default Characteristic;
