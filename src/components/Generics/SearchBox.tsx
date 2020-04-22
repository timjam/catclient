import React from 'react';
import '../../styles/SearchBox.css';
import { SearchBoxProps } from '../../types/GenericComponents';
import { Form } from 'react-bootstrap';

const SearchBox = (props: SearchBoxProps) => {
  return (
    <Form.Group controlId="formGroupSearchBox">
      <Form.Label>Search by name</Form.Label>
      {/* There seems to be some problem with FormControl event types and I don't have time to investigate it 
          and create a correct type for event. That's why it is set to any. -Timo */}
      <Form.Control type="input" value={props.name} onChange={(event: any) => props.handleOnChange(event)} />
    </Form.Group>
  );
};

export default SearchBox;
