import React from 'react';
import DynamicCell from './DynamicCell';

const DynamicRow = ({ data, metaData }) =>
  metaData ? (
    <tr>
      {metaData.map((item) => (
        <DynamicCell key={`cell_${Math.random()}`} {...item} data={data} />
      ))}
    </tr>
  ) : null;

export default DynamicRow;
