import React from 'react';
import Characteristic from '../index';

type CharacteristicGenderProps = {
  gender: 'male' | 'female' | 'hermaphrodite' | 'unknown' | 'n/a',
};

const CharacteristicGender = ({ gender }: CharacteristicGenderProps) => {
  const colors = {
    male: '#73D677',
    female: '#C956FF',
    hermaphrodite: '#F5DB13',
    unknown: '#F5DB13',
    'n/a': '#F5DB13',
  };
  return (
    <Characteristic color={colors[gender]} value={gender.toLocaleLowerCase()} />
  );
};

export default CharacteristicGender;
