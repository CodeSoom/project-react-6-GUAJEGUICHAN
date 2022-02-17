import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import PageHeader from '../components/PageHeader';
import TableAttributes from '../components/CheckedList/TableAttributes';
import MemberCard from '../components/CheckedList/MemberCard';

const Container = styled.div`
  width:100%;
  height:100%;
  background-color:#0011;
`;

const CardContainer = styled.div`
  background-color:#F3C5FF; 
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export default function CheckedListPage() {
  const { members, checkedId } = useSelector((state) => ({
    members: state.members,
    checkedId: state.checkedId,
  }));

  return (
    <Container>
      <PageHeader>
        출석한 학생 명단
      </PageHeader>
      <CardContainer>
        <TableAttributes
          attributes={['이름', '학년', '반', '출석']}
        />
        {checkedId.map((id) => {
          const {
            name, gradeNumber, classNumber, checkedToday,
          } = members.find((member) => member.id === id);

          return (
            <MemberCard
              key={id}
              name={name}
              gradeNumber={gradeNumber}
              classNumber={classNumber}
              checkedToday={checkedToday}
            />
          );
        })}
      </CardContainer>
    </Container>

  );
}
