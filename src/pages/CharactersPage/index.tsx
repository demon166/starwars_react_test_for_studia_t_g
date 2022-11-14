import React from 'react';
import AutoComplete from '../../shared/ui/AutoComplete';

const CharactersPage = () => {
  console.log(1);
  return (
    <div className="container">
      <h1>Страница характеристик</h1>
      <AutoComplete placeholder="find..." />
    </div>
  );
};

export default CharactersPage;
