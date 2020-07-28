import React from 'react';

const TableContainer = ({ type = 'text', placeholder, value, onChange }) => (
  <input
    type={type}
    className='input'
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TableContainer;
