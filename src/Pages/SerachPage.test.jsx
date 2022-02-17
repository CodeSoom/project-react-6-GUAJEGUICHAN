import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import SerachPage from './SerachPage';

test('SerachPage', () => {
  const { container } = render(
    <MemoryRouter>
      <SerachPage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('학생 검색');
});
