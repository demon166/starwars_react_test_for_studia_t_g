import React from 'react';
import styles from '../index.module.scss';
import { СharacterCard } from 'components';

const Cards = () => {
  console.log(1);
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <СharacterCard />
      </div>
      <div className={styles.card}>
        <СharacterCard />
      </div>
      <div className={styles.card}>
        <СharacterCard />
      </div>
      <div className={styles.card}>
        <СharacterCard />
      </div>
      <div className={styles.card}>
        <СharacterCard />
      </div>
      <div className={styles.card}>
        <СharacterCard />
      </div>
    </div>
  );
};

export default Cards;
