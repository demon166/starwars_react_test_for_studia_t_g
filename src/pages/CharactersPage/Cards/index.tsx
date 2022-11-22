import React from 'react';
import styles from './index.module.scss';
import { СharacterCard } from 'components';
import { TCharacter } from '../../../store/slice/swapi/types';

type CardsProps = {
  characters: TCharacter[],
};

const Cards = ({ characters }:CardsProps) => (
  <div className={styles.cards}>
    {
        characters.map((character) => (
          <div className={styles.card} key={character.name}>
            <СharacterCard character={character} />
          </div>
        ))
      }
  </div>
);

export default Cards;
