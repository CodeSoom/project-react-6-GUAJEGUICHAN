import React from 'react';

import { render } from '@testing-library/react';

import TableAttributes from './TableAttributes';

test('TableAttributes', () => {
  render(<TableAttributes
    attributes={['이름, 학년, 반, 출석']}

  />);
});
