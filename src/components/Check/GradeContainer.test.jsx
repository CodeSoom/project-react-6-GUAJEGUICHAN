import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import GradeContainer from './GradeContainer';

test('GradeContainer', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <GradeContainer />
    </MemoryRouter>,
  );

  expect(getByText('학년 선택')).not.toBeNull();
  expect(getByText('1학년')).not.toBeNull();
  expect(getByText('2학년')).not.toBeNull();
  expect(getByText('3학년')).not.toBeNull();
});
