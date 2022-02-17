import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter, useNavigate } from 'react-router-dom';

import PageHeader from './PageHeader';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('PageHeader', () => {
  const navigate = jest.fn();

  useNavigate.mockImplementation(() => navigate);

  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <PageHeader>PageHeader</PageHeader>
    </MemoryRouter>,
  );

  expect(getByText('PageHeader')).not.toBeNull();

  fireEvent.click(getByTestId('goBack'));
  expect(navigate).toBeCalled();

  fireEvent.click(getByTestId('goHome'));
  expect(global.window.location.pathname).toEqual('/');
});
