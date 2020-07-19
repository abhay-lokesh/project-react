import React from 'react';
import DynamicRow from './DynamicRow';

const DynamicTable = ({ tableData, metaData }) => (
  <table>
    <thead></thead>
    <tbody>
      {tableData.map((data) => (
        <DynamicRow data={data} metaData={metaData} />
      ))}
    </tbody>
  </table>
);

export default DynamicTable;
