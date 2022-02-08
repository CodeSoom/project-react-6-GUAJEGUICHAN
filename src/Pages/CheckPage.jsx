import React from 'react';

import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import PageHeader from '../components/PageHeader';

const Container = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
  align-content:center;
`;

const ButtonContainer = styled.div`
`;

export default function CheckPage() {
  const { classes } = useSelector((state) => ({
    classes: state.classes,
  }));

  return (
    <Container>
      <PageHeader>Check Page</PageHeader>
      <ButtonContainer>
        <Outlet context={classes} />
      </ButtonContainer>
    </Container>
  );
}
