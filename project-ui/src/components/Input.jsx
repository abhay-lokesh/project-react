import React from 'react';

const TableContainer = ({ type, placeholder, value, onChange }) => (
  <input
    type='text'
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TableContainer;
