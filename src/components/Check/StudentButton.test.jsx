import React from 'react';

import context from 'jest-plugin-context';

import given from 'given2';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import StudentButton from './StudentButton';

jest.mock('react-redux');

describe('StudentButton', () => {
  const dispatch = jest.fn();

  const member = {
    id: 1,
    isStudent: true,
    name: '이승만',
    gradeNumber: 1,
    classNumber: 1,
    checkedToday: undefined,
  };

  context('has notCheckedMember', () => {
    given('notCheckedMember', () => ({
      ...member,
      checkedToday: false,
    }));

    it('renders well', () => {
      useDispatch.mockImplementation(() => dispatch);

      const { getByRole } = render((<StudentButton
        member={
          given.notCheckedMember
        }
      />));

      fireEvent.click(getByRole('button'));
      expect(dispatch).toBeCalled();
    });
  });
  context('has checkedMember', () => {
    given('checkedMember', () => ({
      ...member,
      checkedToday: true,
    }));

    it('renders well', () => {
      useDispatch.mockImplementation(() => dispatch);

      const { getByRole } = render((<StudentButton
        member={
          given.checkedMember
        }
      />));

      fireEvent.click(getByRole('button'));
      expect(dispatch).toBeCalled();
    });
  });
});
