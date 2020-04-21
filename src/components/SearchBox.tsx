import React from 'react';
import '../styles/SearchBox.css';
import { SearchBoxProps } from '../types/GenericComponents';

const SearchBox = (props: SearchBoxProps) => {
  return (
    <form>
      <label>
        Name
        <textarea className="SearchBox" value={props.name} onChange={event => props.handleOnChange(event)} />
      </label>
    </form>
  );
};

export default SearchBox;
