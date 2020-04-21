import React from 'react';

interface PropertySelectorProps {
  value: string;
  property: string;
  labels: Array<string>;
  handleOnChange: Function;
}

const PropertySelector = (props: PropertySelectorProps) => {
  return (
    <form>
      <label>
        {`Filter ${props.property}`}
        <select value={props.value} onChange={event => props.handleOnChange(event)}>
          {props.labels.map((label, index) => <option key={index} value={index}>{label}</option>)}
        </select>
      </label>
    </form>
  );
};

export default PropertySelector;
