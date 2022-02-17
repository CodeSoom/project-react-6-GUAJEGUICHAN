import React from 'react';

import styled from '@emotion/styled';

export default function TableAttributes({
  attributes,
}) {
  const Card = styled.div`
    background-color:#845EC2;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:2em;
    padding:0 1em;
    margin:0.3em 1em;
    border-radius:0.6em;
    width:${'80%'};
  font-weight:600;
    color:#FEFEDF;
  `;

  return (
    <Card>
      {attributes.map((attribute) => (
        <span key={attribute}>{attribute}</span>
      ))}
    </Card>
  );
}
