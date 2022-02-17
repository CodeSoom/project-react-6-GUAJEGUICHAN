import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

const Wrapper = styled.div``;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;

`;

const Header = styled.h1`
  display:flex;
  justify-content:center;
`;

const MenuButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;  
  color:black;
  width: 12em;
  height: 3em;
  background-color: #EC8E6A;
  border-bottom: solid gray 4px;
  border-right: solid gray 4px;
  margin:1em 0;
  border-radius:500px;
  &:hover{
    background-color: #b0512c;
    color:white;
  }
`;

export default function HomePage() {
  const { date } = useSelector((state) => ({
    date: state.date,
  }));

  return (
    <Wrapper>
      <Header>
        출석체크
        {' '}
        {date}
      </Header>
      <Container>
        <Link to="/check">
          <MenuButton>
            간편 출석체크
          </MenuButton>
        </Link>
        <Link to="/addmember">
          <MenuButton>
            학생 추가하기
          </MenuButton>
        </Link>
        <Link to="/checkedlist">
          <MenuButton>
            출석한 학생 명단
          </MenuButton>
        </Link>
        <Link to="/search">
          <MenuButton>
            학생 검색
          </MenuButton>
        </Link>

      </Container>

    </Wrapper>
  );
}
