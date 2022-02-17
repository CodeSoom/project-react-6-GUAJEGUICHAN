import React from 'react';

import { render } from '@testing-library/react';

import StatePage from './StatePage';

test('StatePage', () => {
  const { container } = render(<StatePage />);

  expect(container).toHaveTextContent('StatePage');
});
