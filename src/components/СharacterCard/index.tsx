import React from 'react';
import CharacteristicRound from '../CharacteristicRound';
import styles from './index.module.scss';
import CharacteristicGender from '../Characteristic/CharacteristicGender';
import CharacteristicAge from '../Characteristic/CharacteristicAge';
import { TCharacter } from '../../store/slice/swapi/types';

type CharacterCardProps = {
  character: TCharacter,
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const {
    name,
    gender,
    height,
    mass,
    birth_year: birthYear,
  } = character;
  return (
    <div className={styles.card}>
      <h3>{ name }</h3>
      <div className={styles.characteristicRoundBlock}>
        {
          height && height !== 'unknown' && height !== 'huwhorwhooohwh' && <CharacteristicRound value={height} title="height" />
        }
        {
          mass && mass !== 'unknown' && mass !== 'huwhorwhooohwh' && <CharacteristicRound value={mass} title="mass" />
        }
      </div>
      <div className={styles.characteristicBlock}>
        {
          gender !== 'n/a' && (<CharacteristicGender gender={gender} />)
        }
        {
          birthYear !== 'unknown' && (<CharacteristicAge age={birthYear} />)
        }
      </div>
    </div>
  );
};

export default CharacterCard;
