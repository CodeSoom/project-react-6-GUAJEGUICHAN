import React from 'react';

import styled from '@emotion/styled';

import PageHeader from '../components/PageHeader';

const Container = styled.div`
  width:100%;
  height:100%;
  background-color:#0011;
`;

export default function SerachPage() {
  return (
    <Container>
      <PageHeader>
        학생 검색
      </PageHeader>
    </Container>
  );
}
