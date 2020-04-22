import React from 'react';
import CatTableRow from './CatTableRow';
import '../../styles/CatTable.css';
import { CatTableProps } from '../../types/CatClient';
import { Table } from 'react-bootstrap';
import CatTableHeader from './CatTableHeader';

const CatTable = (props: CatTableProps) => {
  const { temperamentSelector, originSelector, handleRowClick } = props;

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
    <Table striped bordered hover variant="dark" size="sm" responsive>
      <CatTableHeader />
      <tbody>
        { cats.map(cat => <CatTableRow key={cat.id} cat={cat} handleClick={handleRowClick} />) }
      </tbody>
      <tfoot style={{ textAlign: 'center' }}>
        <tr>
          <td colSpan={3}>Click the rows!</td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default CatTable;
