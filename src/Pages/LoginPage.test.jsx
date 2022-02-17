import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

test('LoginPage', () => {
  const { container } = render(<LoginPage />);

  expect(container).toHaveTextContent('LoginPage');
});
