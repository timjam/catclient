import React from 'react';
import { CatTableRowProps } from '../../types/CatClient';

/** 
 * A bind call or arrow function in a JSX prop will create a brand new function
 * on every single render. This is bad for performance, as it will result in the
 * garbage collector being invoked way more than is necessary.
 * However, for some reason I couldn't get this work without this nor without
 * passing the event into the function. No time or energy to investigate and fix.
 * Will fix though, if I figure out how
 * -Timo 
 */

const CatTableRow = (props: CatTableRowProps) => {
  const { cat, handleClick } = props;

  return (
    <tr onClick={(e) => handleClick(e, cat.id)}>
      <td>{cat.name}</td>
      <td>{cat.temperament}</td>
      <td>{cat.origin}</td>
    </tr>
  )
}

export default CatTableRow;
