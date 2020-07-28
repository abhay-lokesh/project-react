import React from 'react';

const Button = ({ label, type, onClick, extraClass }) => (
  <button onClick={onClick} className={`btn ${type || ''} ${extraClass || ''}`}>
    {label}
  </button>
);

export default Button;
