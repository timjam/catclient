import React from 'react';

interface RowProps {
  cat: {
    'name': string,
    'temperament': string,
    'origin': string
  };
};
const CatTableRow = (props: RowProps) => {
  const { cat } = props;

  return (
    <tr key={cat.name} data-item={cat}>
      <td data-title="Name">{cat.name}</td>
      <td data-title="Temperament">{cat.temperament}</td>
      <td data-title="Origin">{cat.origin}</td>
    </tr>
  )
}

export default CatTableRow;
