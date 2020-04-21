import React, { Fragment, useState } from 'react';
import SearchBox from './SearchBox';
import PropertySelector from './PropertySelector';

interface CTTBProps {
  temperaments: Array<string>;
  origins: Array<string>;
}

type CTText = React.FormEvent<HTMLTextAreaElement>;
type CTSelect = React.FormEvent<HTMLSelectElement>

const CatTableToolBar = (props: CTTBProps) => {

  const { temperaments, origins } = props;
  
  const [searchText, setSearchText] = useState('');
  const [temperament, setTemperament] = useState('');
  const [origin, setOrigin] = useState('');
  
  const changeSearch = (event: CTText): void => {
    setSearchText(event.currentTarget.value);
  };

  const selectTemperament = (event: CTSelect): void => {
    setTemperament(event.currentTarget.value);
  };
  
  const selectOrigin = (event: CTSelect): void => {
    setOrigin(event.currentTarget.value);
  };

  return (
    <Fragment>
      <SearchBox
        name={searchText}
        handleOnChange={changeSearch}
      />
      <PropertySelector
        value={temperament}
        property={'Temperament'}
        labels={temperaments}
        handleOnChange={selectTemperament}
        />
      <PropertySelector
        value={origin}
        property={'Origin'}
        labels={origins}
        handleOnChange={selectOrigin}
      />
    </Fragment>
  );
};

export default CatTableToolBar;
