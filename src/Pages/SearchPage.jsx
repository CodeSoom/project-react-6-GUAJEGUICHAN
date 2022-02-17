import React from 'react';

import styled from '@emotion/styled';

import { TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { changeSearchField } from '../slice';

import PageHeader from '../components/PageHeader';

const Container = styled.div`
  width:100%;
  height:100%;
  /* background-color:#0011; */
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  height:56px;
  margin:0px 30px;
`;

export default function SearchPage() {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => ({
    search: state.search,
  }));

  const handleChange = (event) => {
    const { target: { value } } = event;

    dispatch(changeSearchField(value));
  };

  return (
    <Container>
      <PageHeader>
        학생 검색
      </PageHeader>
      <SearchContainer>
        <TextField
          label="search"
          placeholder="학년, 반, 이름 검색 가능"
          variant="outlined"
          style={{
            flex: 1,
          }}
          onChange={handleChange}
          value={search}
        />

      </SearchContainer>
    </Container>
  );
}
