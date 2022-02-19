import React from 'react';

import context from 'jest-plugin-context';

import given from 'given2';

import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchPage from './SearchPage';

jest.mock('react-redux');

describe('SearchPage', () => {
  const dispatch = jest.fn();

  const renderSerachPage = () => (render((
    <MemoryRouter>
      <SearchPage />
    </MemoryRouter>
  )));
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    search: given.search,
    searchedMembers: [{
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: undefined,
    }],
  }));

  it('renders TextField', () => {
    const { getByLabelText } = renderSerachPage();

    fireEvent.change(getByLabelText('search'), {
      target: { value: '이명박' },
    });

    expect(dispatch).toBeCalled();
  });

  context('when search is `` ', () => {
    given('search', () => '');
    it('shows 이름을 입력해주세요', () => {
      const { container } = renderSerachPage();

      expect(container).toHaveTextContent('이름을 입력해 주세요!');
    });
  });
  context('when search is `이` ', () => {
    given('search', () => '이');
    it('shows 이승만', () => {
      const { container } = renderSerachPage();

      expect(container).toHaveTextContent('이승만');
    });
  });
});
