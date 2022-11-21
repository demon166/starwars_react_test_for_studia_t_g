import React from 'react';
import Characteristic from '../index';

type CharacteristicGenderProps = {
  gender: 'Male' | 'Female' | 'Hermaphrodite',
};

const CharacteristicGender = ({ gender }: CharacteristicGenderProps) => {
  const colors = {
    Male: '#73D677',
    Female: '#C956FF',
    Hermaphrodite: '#F5DB13',
  };
  return (
    <Characteristic color={colors[gender]} value={gender.toLocaleLowerCase()} />
  );
};

export default CharacteristicGender;
