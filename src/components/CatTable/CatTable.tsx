import React from 'react';
import CatTableRow from './CatTableRow';
import '../../styles/CatTable.css';
import { CatTableProps } from '../../types/CatClient';

const CatTable = (props: CatTableProps) => {
  const { temperamentSelector, originSelector } = props;

  const cats = props.cats.filter(cat => {
    if (originSelector && !temperamentSelector) {
      return cat.origin === originSelector;
    }

    if (!originSelector && temperamentSelector) {
      return cat.temperament === temperamentSelector;
    }

    if (originSelector && temperamentSelector) {
      return cat.origin === originSelector && cat.temperament === temperamentSelector;
    }
    
    return cat;
  });

  return (
    <table className="CatTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Temperament</th>
          <th>Origin</th>
        </tr>
      </thead>
      <tbody>
        { cats.map(cat => <CatTableRow cat={cat} />) }
      </tbody>
    </table>
  )
}

export default CatTable;
