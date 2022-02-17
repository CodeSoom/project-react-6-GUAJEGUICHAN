import React from 'react';

import context from 'jest-plugin-context';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    date: '220205',
  }));
  context("at '/'", () => {
    it('renders HomePage', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('출석체크');
    });
  });
});
