import React from 'react';

const CatTableHeader = () => {
  return (
    <thead>
      <tr>
        <th key={'name-header'} style={{ width: "33%" }}>Name</th>
        <th key={'temp-header'} style={{ width: "34%" }}>Temperament</th>
        <th key={'orig-header'} style={{ width: "33%" }}>Origin</th>
      </tr>
    </thead>
  )
};

export default CatTableHeader;
