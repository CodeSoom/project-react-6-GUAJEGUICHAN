import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter, useNavigate } from 'react-router-dom';

import NavigateButton from './NavigateButton';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('NavigateButton', () => {
  const navigate = jest.fn();

  useNavigate.mockImplementation(() => navigate);

  const { getByText } = render(
    <MemoryRouter>
      <NavigateButton>NavigateButton</NavigateButton>
    </MemoryRouter>,
  );

  expect(getByText('NavigateButton')).not.toBeNull();

  fireEvent.click(getByText('NavigateButton'));
  expect(navigate).toBeCalled();
});
