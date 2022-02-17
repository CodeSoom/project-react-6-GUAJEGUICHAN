import React from 'react';

import { css } from '@emotion/react';

import styled from '@emotion/styled';

import NavigateButton from '../NavigateButton';

const buttonCss = css`
  height:${'39%'};
  width:${'100%'};
`;

const H2 = styled.h2`
  text-align:center;
`;

export default function GradeContainer() {
  return (
    <>
      <H2>학년 선택</H2>
      <NavigateButton sx={buttonCss} to="1">1학년</NavigateButton>
      <NavigateButton sx={buttonCss} to="2">2학년</NavigateButton>
      <NavigateButton sx={buttonCss} to="3">3학년</NavigateButton>
    </>
  );
}
