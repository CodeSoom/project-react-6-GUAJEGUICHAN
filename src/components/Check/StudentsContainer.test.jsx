import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import StudentsContainer from './StudentsContainer';

jest.mock('react-redux');
jest.mock('react-router-dom');

test('StudentsContainer', () => {
  useParams.mockImplementation(() => ({ gradeNumber: 1, classNumber: 1 }));

  useSelector.mockImplementation((selector) => (selector({
    members: [
      {
        isStudent: true,
        name: '이승만',
        gradeNumber: 1,
        classNumber: 1,
        attendedDates: ['220102', '220109', '220116', '220123'],
      },
      {
        isStudent: true,
        name: '문재인',
        gradeNumber: 2,
        classNumber: 1,
        attendedDates: ['220102', '220109', '220116', '220123'],
      },
    ],
  })));
  const { container } = render(<StudentsContainer />);

  expect(container).toHaveTextContent('이승만');
  expect(container).not.toHaveTextContent('문재인');
});
