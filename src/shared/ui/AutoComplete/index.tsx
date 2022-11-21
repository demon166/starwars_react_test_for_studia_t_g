import React, { memo, useEffect, useState } from 'react';
import {
  AutoComplete as AutoCompletePrime,
  AutoCompleteChangeParams,
  AutoCompleteProps,
} from 'primereact/autocomplete';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './index.module.scss';

const AutoComplete = ({ placeholder, suggestions, completeMethod }: AutoCompleteProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const textForSearch = useDebounce(selectedCountry, 2000);
  useEffect(() => {
  }, [textForSearch]);
  const changeHandle = (e: AutoCompleteChangeParams) => setSelectedCountry(e.value);
  return (
    <div>
      <AutoCompletePrime
        className={styles.autocomplete}
        value={selectedCountry}
        suggestions={suggestions}
        completeMethod={completeMethod}
        delay={500}
        field="name"
        onChange={changeHandle}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(AutoComplete);
