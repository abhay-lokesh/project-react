import React from 'react';
const classMap = {
  in_progress: 'pregress',
  relesed: 'released',
  unreleased: 'unreleased',
};
const Badge = ({ status, extraClass = '' }) => (
  <span className={`badge ${classMap[status]} ${extraClass}`}>{status}</span>
);

export default Badge;
