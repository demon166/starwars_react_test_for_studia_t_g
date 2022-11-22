import React, { useState } from 'react';
import AutoComplete from 'shared/ui/AutoComplete';
import Cards from './Cards';
import { swapiServices } from 'store';
import styles from './index.module.scss';

const CharactersPage = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const { data, isLoading } = swapiServices.useGetCharactersQuery({ page: numberPage, format: 'wookiee' });
  const data1 = swapiServices.useGetCharactersQuery({ page: numberPage, format: 'wookiee' });
  console.log(data1);
  return (
    <div className="container">
      <h1>Страница характеристик</h1>
      <button
        type="button"
        onClick={() => {
          setNumberPage((number) => number + 1);
        }}
      >
        next page
      </button>
      <AutoComplete placeholder="find..." />
      {
        isLoading && (<h1>Идет загрузка</h1>)
      }
      <div className={styles.cards}>
        {
          data && (
            <Cards characters={data} />
          )
        }
      </div>

    </div>
  );
};

export default CharactersPage;
