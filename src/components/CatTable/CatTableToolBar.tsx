import React from 'react';
import SearchBox from '../Generics/SearchBox';
import PropertySelector from '../Generics/PropertySelector';
import { CTTBProps } from '../../types/CatClient';
import { Row, Col, Form } from 'react-bootstrap';

const CatTableToolBar = (props: CTTBProps) => {
  return (
    <Form>      
      <Row>
        <Col>
          <SearchBox
            name={props.searchText}
            handleOnChange={props.changeSearchText}
          />
        </Col>
        <Col>
          <PropertySelector
            value={props.selectedTemperament}
            property={'Temperament'}
            labels={props.temperaments}
            handleOnChange={props.selectTemperament}
          />
        </Col>
        <Col>
          <PropertySelector
            value={props.selectedOrigin}
            property={'Origin'}
            labels={props.origins}
            handleOnChange={props.selectOrigin}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default CatTableToolBar;
