import React, { useMemo } from 'react';
import Graph from './Graph';
import CompDate from './CompDate';
import Dropdown from '../../Dropdown';
import CompText from './CompText';
import '../DynamicTable.scss';
const typeCompMap = ({ data, type }) => {
  const newmap = {
    date: <CompDate date={data} />,
    graph: <Graph data={data} />,
    text: <CompText data={data} />,
    dropdown: <Dropdown data={data} />,
  };
  return newmap[type];
};
const DynamicCell = ({ data, identifier, type }) => {
  const newData = data[identifier];
  return <td className='cell--body'>{typeCompMap({ data: newData, type })}</td>;
};

export default DynamicCell;
