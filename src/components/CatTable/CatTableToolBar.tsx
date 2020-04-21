import React, { Fragment } from 'react';
import SearchBox from '../SearchBox';
import PropertySelector from '../PropertySelector';
import { CTTBProps } from '../../types/CatClient';

const CatTableToolBar = (props: CTTBProps) => {
  return (
    <Fragment>
      <SearchBox
        name={props.searchText}
        handleOnChange={props.changeSearchText}
      />
      <PropertySelector
        value={props.selectedTemperament}
        property={'Temperament'}
        labels={props.temperaments}
        handleOnChange={props.selectTemperament}
        />
      <PropertySelector
        value={props.selectedOrigin}
        property={'Origin'}
        labels={props.origins}
        handleOnChange={props.selectOrigin}
      />
    </Fragment>
  );
};

export default CatTableToolBar;
