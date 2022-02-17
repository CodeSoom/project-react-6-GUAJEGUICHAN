import React from 'react';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import StudentButton from './StudentButton';

const H2 = styled.h2`
  text-align:center;
`;

export default function StudentsContainer() {
  const { gradeNumber, classNumber } = useParams();

  const { members } = useSelector((state) => ({
    members: state.members.filter(
      (member) => (
        Number(member.gradeNumber) === Number(gradeNumber)
        && Number(member.classNumber) === Number(classNumber)
      ),
    ),
  }));

  return (
    <>
      <H2>
        {' '}
        {gradeNumber}
        학년
        {' '}
        {classNumber}
        반
      </H2>
      {
        members.map(
          (member) => (
            <StudentButton
              key={member.name}
              member={member}
            >
              {member.name}
            </StudentButton>
          ),
        )
      }
    </>

  );
}
