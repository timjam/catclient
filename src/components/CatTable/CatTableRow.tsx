import React from 'react';
import { CatTableRowProps } from '../../types/CatClient';

const CatTableRow = (props: CatTableRowProps) => {
  const { cat } = props;

  const handleClick = (event: any) => {
    console.log(event.target);
  };

  return (
    <tr key={cat.id} data-item={cat} onClick={(e) => handleClick(e)}>
      <td data-title="Name">{cat.name}</td>
      <td data-title="Temperament">{cat.temperament}</td>
      <td data-title="Origin">{cat.origin}</td>
    </tr>
  )
}

export default CatTableRow;
