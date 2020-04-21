import React from 'react';
import '../styles/SearchBox.css';

interface SearchBoxProps {
  name: string;
  handleOnChange: Function;
}

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
