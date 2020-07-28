import React from 'react';
import DynamicRow from './DynamicRow';
import './DynamicTable.scss';
const DynamicTable = ({ tableData, metaData }) => (
  <table>
    <thead>
      <tr>
        {metaData
          ? metaData.map(({ label, width }) => (
              <th
                className='cell--header'
                style={{ width: `${width}%` }}
                key={`table_head_${Math.random()}`}>
                {label}
              </th>
            ))
          : null}
      </tr>
    </thead>
    <tbody>
      {tableData
        ? tableData.map((data) => (
            <DynamicRow
              key={`table_body_${Math.random()}`}
              data={data}
              metaData={metaData}
            />
          ))
        : null}
    </tbody>
  </table>
);

export default DynamicTable;
