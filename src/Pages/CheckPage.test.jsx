import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CheckPage from './CheckPage';

jest.mock('react-redux');

test('CheckPage', () => {
  useSelector.mockImplementation((selector) => selector({
    classes: { 1: [1, 2, 3, 4] },
  }));

  const { container } = render(
    <MemoryRouter initialEntries={['/check']}>
      <CheckPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('Check Page');
});
