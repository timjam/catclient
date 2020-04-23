import React, { useState, useEffect } from 'react';
import CatTable from '../components/CatTable/CatTable';
import CatTableToolBar from '../components/CatTable/CatTableToolBar';
import CatModal from '../components/Card/CatModal';
import { Cat, CTText, CPSelect, CTRClick } from '../types/CatClient';
import { Container } from 'react-bootstrap';
import { bvcontainer } from './../styles/BreedsViewStyles';

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

const BreedsView = () => {

  const [cats, setCats] = useState<Array<Cat>>([]);
  const [cat, setCat] = useState(undefined);
  const [tempraments, setTemperaments] = useState<Array<string>>([]);
  const [origins, setOrigins] = useState<Array<string>>([]);
  const [temperamentSelector, setTemperamentSelector] = useState<string>('');
  const [originSelector, setOriginSelector] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

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

  /** 
   * Okay, this is stupid. We could easily just use all the cats
   * already fetched.
   * This solution is here just to use the /breeds/:id endpoint
   */  
  const getCat = async (id: number) => {
    const response = await fetch(`/breeds/${id}`);
    const data = await response.json();
    setCat(data);
    setShow(true);
  }


  const changeSearchText = (event: CTText): void => {
    setSearchText(event.currentTarget.value);
  };

  const selectTemperament = (event: CPSelect): void => {
    setTemperamentSelector(event.currentTarget.value);
  }
  
  const selectOrigin = (event: CPSelect): void => {
    setOriginSelector(event.currentTarget.value);
  }

  const selectRow = (event: CTRClick, id: number) => {
    getCat(id);
  }

  const handleClose = () => {
    setShow(false);
    setCat(undefined);
  }

  return (
    <Container fluid="md" style={bvcontainer}>
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
        handleRowClick={selectRow}
        />
      <CatModal
        cat={cat}
        show={show}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default BreedsView;
