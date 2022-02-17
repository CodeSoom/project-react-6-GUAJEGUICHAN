import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import AddMemberButton from './AddMemberButton';

test('AddMemberButton', () => {
  const handleClick = jest.fn();

  const { getByRole } = render((
    <AddMemberButton
      onClick={handleClick}
    >
      문재인
    </AddMemberButton>
  ));

  fireEvent.click(getByRole('button', { name: '문재인' }));
  expect(handleClick).toBeCalled();
});
