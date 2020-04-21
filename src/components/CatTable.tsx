import React from 'react';
import CatTableRow from './CatTableRow';
import '../styles/CatTable.css';

interface Cat {
  'name': string;
  'description': string;
  'temperament': string;
  'origin': string;
}

interface CatTableProps {
  cats: Array<Cat>;
}

const CatTable = (props: CatTableProps) => {
  const { cats } = props;

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
