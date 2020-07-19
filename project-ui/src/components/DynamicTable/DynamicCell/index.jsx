import React, { useMemo } from 'react';
import Graph from './Graph';
import CompDate from './CompDate';
import CompText from './CompText';
const typeCompMap = useMemo(() => {
  return {
    date: CompDate,
    graph: Graph,
    text: CompText,
  };
});
const DynamicCell = ({ itemData, type }) =>
  typeCompMap[type] ? typeCompMap[type] : null;

export default DynamicCell;
