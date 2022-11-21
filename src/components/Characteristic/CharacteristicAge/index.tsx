import React from 'react';
import Characteristic from '../index';

type CharacteristicAgeProps = {
  age: string;
};

const CharacteristicAge = ({ age }: CharacteristicAgeProps) => (
  <Characteristic color="#07D6F2" value={age.toLocaleUpperCase()} />
);

export default CharacteristicAge;
