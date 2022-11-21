import React from 'react';
import styles from './index.module.scss';

type CharacteristicRoundProps = {
  title: string,
  value: string,
};

const CharacteristicRound = ({ title, value }: CharacteristicRoundProps) => (
  <div className={styles.characteristic}>
    <div className={styles.round}>
      { value }
    </div>
    <div className={styles.title}>
      { title }
    </div>
  </div>
);

export default CharacteristicRound;
