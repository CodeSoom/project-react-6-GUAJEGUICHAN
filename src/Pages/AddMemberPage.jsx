import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addMember, changeAddMemberField, clearAddMemberField } from '../slice';

import styled from '@emotion/styled';

import { Checkbox, FormControlLabel } from '@mui/material';

import PageHeader from '../components/PageHeader';
import AddMembeTextField from '../components/AddMember/AddMembeTextField';
import IsStudentRadioButtons from '../components/AddMember/IsStudentRadioButtons';
import AddMemberButton from '../components/AddMember/AddMemberButton';

const Container = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
`;

const InputContainer = styled.form`
width:${'60%'};
display:flex;
flex-direction:column;
align-self:center;
`;

const ButtonContainer = styled.div`
  display:flex;
flex-direction:row-reverse;
`;

export default function AddMemberPage() {
  const dispatch = useDispatch();

  const {
    name, gradeNumber, classNumber, checkedToday = true, errorMessage,
  } = useSelector((state) => ({
    name: state.addMemberField.name,
    gradeNumber: state.addMemberField.gradeNumber,
    classNumber: state.addMemberField.classNumber,
    checkedToday: state.addMemberField.checkedToday,
    errorMessage: state.errorMessage,
  }));

  useEffect(() => {
    if (errorMessage.length === 0) {
      dispatch(clearAddMemberField());
    }
  }, [errorMessage]);

  const handleChange = useCallback((event) => {
    const { target: { name: dataName, value, checked } } = event;

    if (dataName === 'checkedToday') {
      dispatch(changeAddMemberField({ name: dataName, value: checked }));

    } else {
      dispatch(changeAddMemberField({ name: dataName, value }));
    }
  });

  const handleSubmit = useCallback(() => {
    dispatch(addMember());
  });

  return (
    <Container>
      <PageHeader>학생 추가 입력란</PageHeader>
      <InputContainer>
        <AddMembeTextField
          error={errorMessage}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        >
          이름
        </AddMembeTextField>
        <AddMembeTextField
          error={errorMessage}
          type="number"
          value={gradeNumber}
          name="gradeNumber"
          onChange={handleChange}

        >
          학년
        </AddMembeTextField>
        <AddMembeTextField
          error={errorMessage}
          type="number"
          value={classNumber}
          name="classNumber"
          onChange={handleChange}

        >
          반
        </AddMembeTextField>
        <IsStudentRadioButtons
          name="isStudent"
          onChange={handleChange}
        />
        <FormControlLabel
          label="당일 출석 체크"
          control={(
            <Checkbox
              checked={checkedToday}
              name="checkedToday"
              onChange={handleChange}
            />
          )}
        />
        <ButtonContainer>
          <AddMemberButton
            onClick={handleSubmit}
          >
            제출
          </AddMemberButton>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
}
