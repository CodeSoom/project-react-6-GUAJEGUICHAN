import React from 'react';

import context from 'jest-plugin-context';

import given from 'given2';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import AddMemberPage from './AddMemberPage';

jest.mock('react-redux');

describe('AddMemberPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(
    {
      addMemberField: {
        name: '',
        gradeNumber: '',
        classNumber: '',
        checkedToday: given.checkedToday,
      },
      errorMessage: [],

    },
  ));
  given('checkedToday', () => true);

  it('add a member', () => {
    const { container, getByRole } = render(
      <MemoryRouter>
        <AddMemberPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('학생 추가 입력란');

    fireEvent.change(getByRole('textbox', { name: '이름' }), { target: { value: '이름' } });
    expect(dispatch).toBeCalled();
    dispatch.mockClear();

    fireEvent.click(getByRole('checkbox', { name: '당일 출석 체크' }));
    expect(dispatch).toBeCalled();
    dispatch.mockClear();

    fireEvent.click(getByRole('radio', { name: '선생님' }));
    expect(dispatch).toBeCalled();
    dispatch.mockClear();

    fireEvent.click(getByRole('button', { name: '제출' }));
    expect(dispatch).toBeCalled();
    dispatch.mockClear();
  });

  context('even if checkedToday is undefined', () => {
    given('checkedToday', () => undefined);

    it('renders works well', () => {
      render(
        <MemoryRouter>
          <AddMemberPage />
        </MemoryRouter>,
      );
    });
  });
});
