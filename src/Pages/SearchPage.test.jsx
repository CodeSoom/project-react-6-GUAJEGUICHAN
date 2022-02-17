import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchPage from './SearchPage';

jest.mock('react-redux');

test('SearchPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(
    {
      search: '',
    },
  ));

  const { container, getByLabelText } = render(
    <MemoryRouter>
      <SearchPage />
    </MemoryRouter>,

  );

  fireEvent.change(getByLabelText('search'), {
    target: { value: '이명박' },
  });

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent('학생 검색');
});
