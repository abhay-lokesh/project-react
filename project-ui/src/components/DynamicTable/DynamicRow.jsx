import React from 'react';
import DynamicCell from './DynamicCell';

const DynamicRow = ({ data, metaData }) =>
  metaData ? (
    <tr>
      {metaData.map((item) => (
        <td key={`cell_${Math.random()}`}>
          <DynamicCell {...item} data={data} />
        </td>
      ))}
    </tr>
  ) : null;

export default DynamicRow;
