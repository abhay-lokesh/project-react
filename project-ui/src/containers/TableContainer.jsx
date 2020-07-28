import React from 'react';
import DynamicTable from '../components/DynamicTable';
const metaData = [
  {
    label: 'version name',
    identifier: 'version',
    type: 'text',
    width: 25,
    source: 'data',
  },
  {
    label: 'status',
    width: 10,
    identifier: 'badge',
    type: 'text',
    source: 'aggregate',
  },
  {
    label: 'progress',
    width: 15,
    identifier: 'graph',
    type: 'text',
    source: 'calculate',
  },
  {
    label: 'start date',
    width: 10,
    identifier: 'startDate',
    type: 'date',
    source: 'data',
  },
  {
    label: 'release date',
    width: 15,
    identifier: 'releaseDate',
    type: 'date',
    source: 'data',
  },
  {
    label: 'description',
    width: 20,
    identifier: 'description',
    type: 'text',
    source: 'data',
  },
  {
    label: 'action',
    width: 5,
    identifier: 'action',
    type: 'text',
    source: 'static',
    staticData: [
      { action: () => {}, text: 'delete task' },
      { action: () => {}, text: 'add task' },
      { action: () => {}, text: 'edit task' },
    ],
  },
];
const TableContainer = ({ tableData }) => {
  return <DynamicTable tableData={tableData} metaData={metaData} />;
};

export default TableContainer;
