import React, { useCallback } from 'react';

import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { checkId } from '../../slice';

const unselected = {
  light: '#f8ffd7',
  primary: '#c5e1a5',
  dark: '#94af76',
};

const green = {
  light: '#99d066',
  primary: '#689f38',
  dark: '#387002',
};

function StudentButton({ children, member }) {
  const dispatch = useDispatch();

  const CustomButtonRoot = styled('button')`
  flex:1;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${member.checkedToday ? green.light : unselected.light};
  padding: 12px 24px;
  border: 3px solid ${unselected.primary};
  border-radius: 8px;
  color: 'dark';
  transition: all 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${member.checkedToday ? green.primary : unselected.primary};  
  }

  &.${buttonUnstyledClasses.active} {
   background-color: ${unselected.primary};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

  const handleClick = useCallback(() => {
    dispatch(checkId(member));
  }, []);

  return (
    <ButtonUnstyled
      component={CustomButtonRoot}
      onClick={handleClick}
    >
      {children}
    </ButtonUnstyled>
  );
}

export default React.memo(StudentButton);
