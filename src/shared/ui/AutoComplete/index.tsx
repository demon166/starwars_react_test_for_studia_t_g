import React, { memo, useEffect, useState } from 'react';
import {
  AutoComplete as AutoCompletePrime,
  AutoCompleteChangeParams,
  AutoCompleteProps,
} from 'primereact/autocomplete';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './index.module.scss';

const AutoComplete = ({ placeholder }: AutoCompleteProps) => {
  console.log(1);
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [filteredCountries, setFilteredCountries] = useState<any>();
  const textForSearch = useDebounce(selectedCountry, 2000);
  const searchCountry = () => {
    setFilteredCountries([
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Afghanistan', code: 'AF' },
    ]);
  };
  useEffect(() => {
    searchCountry();
  }, [textForSearch]);
  const changeHandle = (e: AutoCompleteChangeParams) => setSelectedCountry(e.value);
  return (
    <div>
      <AutoCompletePrime
        className={styles.autocomplete}
        value={selectedCountry}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        delay={500}
        field="name"
        onChange={changeHandle}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(AutoComplete);
