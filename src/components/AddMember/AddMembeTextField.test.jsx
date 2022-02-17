import React from 'react';

import { render } from '@testing-library/react';
import context from 'jest-plugin-context';

import AddMembeTextField from './AddMembeTextField';

describe('AddMembeTextField', () => {
  const handleChange = jest.fn();

  context('when the name textbox has nothing', () => {
    it('renders', () => {
      render((
        <AddMembeTextField
          type="text"
          value="박성일"
          name="name"
          onChange={handleChange}
          error={['name blank']}
        >
          이름
        </AddMembeTextField>
      ));
    });
  });

  context('when the name has the name on the member list', () => {
    it('renders', () => {
      render((
        <AddMembeTextField
          type="text"
          value="박성일"
          name="name"
          onChange={handleChange}
          error={['duplicated']}
        >
          이름
        </AddMembeTextField>
      ));
    });
  });

  context('when doesn`t have any errors', () => {
    it('renders', () => {
      render((
        <AddMembeTextField
          type="text"
          value="박성일"
          name="name"
          onChange={handleChange}
          error={[]}
        >
          이름
        </AddMembeTextField>
      ));
    });
  });
});
