import React from 'react';
import DynamicTable from '../components/DynamicTable';
const metaData = [
  { label: 'version name', identifier: 'action', type: 'text', source: 'data' },
  { label: 'status', identifier: 'badge', type: 'text', source: 'aggregate' },
  { label: 'progress', identifier: 'graph', type: 'text', source: 'calculate' },
  {
    label: 'start date',
    identifier: 'startDate',
    type: 'text',
    source: 'data',
  },
  {
    label: 'release date',
    identifier: 'releaseDate',
    type: 'text',
    source: 'data',
  },
  {
    label: 'description',
    identifier: 'description',
    type: 'text',
    source: 'data',
  },
  //   {
  //     label: 'action',
  //     identifier: 'action',
  //     type: 'dropdown',
  //     source: 'static',
  //     staticData: [
  //       { action: () => {}, text: 'delete task' },
  //       { action: () => {}, text: 'add task' },
  //       { action: () => {}, text: 'edit task' },
  //     ],
  //   },
];
const TableContainer = ({ tableData }) => {
  return <DynamicTable tableData={tableData} metaData={metaData} />;
};

export default TableContainer;
