import React from 'react';

import styled from '@emotion/styled';

export default function MemberCard({
  name, gradeNumber, classNumber, checkedToday,
}) {
  const Card = styled.div`
    background-color:#845EC2;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:2em;
    padding:1em 1em;
    margin:0.3em 1em;
    border-radius:1em;
    width:${'80%'};
    color:#FEFEDF;
  `;

  return (
    <Card>
      <span>{name}</span>
      <span>{gradeNumber}</span>
      <span>{classNumber}</span>
      <span>{checkedToday ? '✅' : '❌'}</span>
    </Card>
  );
}
