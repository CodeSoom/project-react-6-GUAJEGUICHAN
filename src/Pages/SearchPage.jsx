import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import { TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { changeSearchField, loadSearchedMembers } from '../slice';

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

const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
`;

export default function SearchPage() {
  const dispatch = useDispatch();

  const { search, searchedMembers } = useSelector((state) => ({
    search: state.search,
    searchedMembers: state.searchedMembers,
  }));

  const handleChange = useCallback((event) => {
    const { target: { value } } = event;

    dispatch(changeSearchField(value));

    dispatch(loadSearchedMembers());
  }, []);

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
      <ListContainer>
        {search === ''
          ? <div>이름을 입력해 주세요!</div>
          : searchedMembers.map((member) => (
            <div key={member.id}>{member.name}</div>))}
      </ListContainer>
    </Container>
  );
}
