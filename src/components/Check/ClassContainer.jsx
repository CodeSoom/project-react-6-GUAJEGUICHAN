import React from 'react';

import { useOutletContext, useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import NavigateButton from '../NavigateButton';

const H2 = styled.h2`
  text-align:center;
`;

export default function ClassContainer() {
  const classes = useOutletContext();
  const { gradeNumber } = useParams();

  const buttonCss = css`
  width:${(classes[gradeNumber].length > 4) ? '50%' : '100%'};
`;

  return (
    <>
      <H2>
        {gradeNumber}
        학년
        {' '}
      </H2>
      {classes[Number(gradeNumber)].map((classNumber) => (
        <NavigateButton key={classNumber} sx={buttonCss} to={`${classNumber}`}>
          {classNumber}
          반
        </NavigateButton>
      ))}
    </>
  );
}
