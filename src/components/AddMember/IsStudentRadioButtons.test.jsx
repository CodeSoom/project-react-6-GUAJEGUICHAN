import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import IsStudentRadioButtons from './IsStudentRadioButtons';

test('IsStudentRadioButtons', () => {
  const handleChange = jest.fn();

  const { getByRole } = render((
    <IsStudentRadioButtons
      name="isStudent"
      onChange={handleChange}
    />
  ));

  fireEvent.click(getByRole('radio', { name: '선생님' }));
  expect(handleChange).toBeCalled();
});
