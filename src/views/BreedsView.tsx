import React, { useState, useEffect } from 'react';
import CatTable from '../components/CatTable/CatTable';
import CatTableToolBar from '../components/CatTable/CatTableToolBar';
import '../styles/BreedsView.css';
import { Cat, CTText, CPSelect } from '../types/CatClient';

const BreedsView = () => {

  const [cats, setCats] = useState<Array<Cat>>([]);
  const [tempraments, setTemperaments] = useState<Array<string>>([]);
  const [origins, setOrigins] = useState<Array<string>>([]);
  const [temperamentSelector, setTemperamentSelector] = useState<string>('');
  const [originSelector, setOriginSelector] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const debouncedSearchText = useDebounce(searchText, 500);

  const getCats = async (name: string) => {
    const URL = name ? `/breeds/?name=${name}` : '/breeds/'
    const response = await fetch(URL);
    const cats = (await response.json()) as Array<Cat>;
    setCats(cats);
    setTemperaments([''].concat(cats.map(cat => cat.temperament)));
    setOrigins([''].concat(cats.map(cat => cat.origin)));
  };

  useEffect(() => {
    getCats(debouncedSearchText);
  }, [debouncedSearchText]);

  const changeSearchText = (event: CTText): void => {
    setSearchText(event.currentTarget.value);
  };

  const selectTemperament = (event: CPSelect): void => {
    setTemperamentSelector(event.currentTarget.value);
  }
  
  const selectOrigin = (event: CPSelect): void => {
    setOriginSelector(event.currentTarget.value);
  }

  return (
    <div className="BreedsView">
      <CatTableToolBar
        selectedTemperament={temperamentSelector}
        selectedOrigin={originSelector}
        temperaments={tempraments}
        origins={origins}
        selectTemperament={selectTemperament}
        selectOrigin={selectOrigin}
        searchText={searchText}
        changeSearchText={changeSearchText}
      />
      <CatTable
        cats={cats}
        temperamentSelector={temperamentSelector}
        originSelector={originSelector}
      />
    </div>
  );
};

export default BreedsView;

/**
 * This debounce part is taken from
 * https://usehooks.com/useDebounce/
 * 
 * Could have used Lodash debounce probably as well, but thought it's
 * also good to understand what happens inside the debounce and how this
 * kind of behavior can be implemented
 */

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
};