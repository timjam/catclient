import React from 'react';
import { PropertySelectorProps } from '../../types/GenericComponents';
import { Form } from 'react-bootstrap';

const PropertySelector = (props: PropertySelectorProps) => {

  const uniqueLabels = Array.from(new Set(props.labels));

  return (
    <Form.Group>
      <Form.Label>{`Filter ${props.property}`}</Form.Label>
      <Form.Control as="select" value={props.value} onChange={event => props.handleOnChange(event)}>
        {uniqueLabels.map((label, index) => <option key={index} value={label}>{label}</option>)}
      </Form.Control>
    </Form.Group>
  );
};

export default PropertySelector;
