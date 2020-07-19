import React from 'react';
import DynamicCell from './DynamicCell';

const DynamicRow = ({ data }) => (
  <tr>
    {data.map(({ item }) => (
      <td>
        <DynamicCell item={item} />
      </td>
    ))}
  </tr>
);

export default DynamicRow;
