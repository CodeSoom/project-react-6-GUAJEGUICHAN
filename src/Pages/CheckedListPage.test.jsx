import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CheckedListPage from './CheckedListPage';

jest.mock('react-redux');

test('CheckedListPage', () => {
  useSelector.mockImplementation((selector) => selector({
    members: [{
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: true,
    }],
    checkedId: [1],
  }));

  const { container } = render(
    <MemoryRouter>
      <CheckedListPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('출석한 학생 명단');
  expect(container).toHaveTextContent('이름');
  expect(container).toHaveTextContent('이승만');
});
