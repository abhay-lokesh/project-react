import React from 'react';
import { formatDate } from '../../../utils';

const CompDate = ({ date, format }) => (
  <p>{date ? formatDate(date, format) : '-'}</p>
);

export default CompDate;
