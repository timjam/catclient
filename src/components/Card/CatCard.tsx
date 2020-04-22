import React from 'react';
import { Card } from 'react-bootstrap';
import { CatCardProps } from '../../types/CatCardPopUp';
const CatCard = (props: CatCardProps) => {
  const { cat } = props;

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={cat?.imgUrl} />
      <Card.Body>
        <Card.Title>{cat?.name}</Card.Title>
        <Card.Text>{cat?.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CatCard;
