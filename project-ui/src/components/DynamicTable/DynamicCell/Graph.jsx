import React from 'react';

const Graph = ({ total = 100, current = 0 }) => (
  <div
    style={{
      background: linearGradient(
        'to right',
        current > 0 ? `blue ${current / total}%` : '',
        current > 0 ? `green ${total - current / total}%` : 'green',
      ),
    }}
  />
);

export default Graph;
