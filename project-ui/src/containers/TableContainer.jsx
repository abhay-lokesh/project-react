import React from 'react';
import DynamicTable from '../components/DynamicTable';
const metaData = [
  {
    label: 'version name',
    identifier: 'version',
    type: 'text',
    source: 'data',
  },
  { label: 'status', identifier: 'badge', type: 'text', source: 'aggregate' },
  { label: 'progress', identifier: 'graph', type: 'text', source: 'calculate' },
  {
    label: 'start date',
    identifier: 'startDate',
    type: 'date',
    source: 'data',
  },
  {
    label: 'release date',
    identifier: 'releaseDate',
    type: 'date',
    source: 'data',
  },
  {
    label: 'description',
    identifier: 'description',
    type: 'text',
    source: 'data',
  },
  {
    label: 'action',
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
