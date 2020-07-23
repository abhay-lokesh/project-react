import React, { useMemo } from 'react';
import Graph from './Graph';
import CompDate from './CompDate';
import Dropdown from '../../Dropdown';
import CompText from './CompText';
const typeCompMap = ({ data, type }) => {
  const newmap = {
    date: <CompDate data={data} />,
    graph: <Graph data={data} />,
    text: <CompText data={data} />,
    dropdown: <Dropdown data={data} />,
  };
  return newmap[type];
};
const DynamicCell = ({ data, identifier, type }) => {
  const newData = data[identifier];
  return typeCompMap({ data: newData, type });
};

export default DynamicCell;
