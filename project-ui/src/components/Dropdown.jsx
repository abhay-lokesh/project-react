import React from 'react';

const Dropdown = ({ headerType, headerText, onChange, dropdownBody }) => (
  <select onChange={onChange}>
    {dropdownBody.map(({ text, value }) => (
      <option value={value}>{text}</option>
    ))}
  </select>
);

export default Dropdown;
