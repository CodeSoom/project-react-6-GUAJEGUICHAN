import React from 'react';

import context from 'jest-plugin-context';

import { render } from '@testing-library/react';

import { useOutletContext, useParams } from 'react-router-dom';

import ClassContainer from './ClassContainer';

jest.mock('react-router-dom');

describe('ClassContainer', () => {
  context('get classNumber', () => {
    it('ClassContainer', () => {
      useOutletContext.mockReturnValue({ 1: [1, 2, 3] });
      useParams.mockReturnValue({ gradeNumber: 1 });

      const { getAllByRole } = render(<ClassContainer />);

      expect(getAllByRole('button')[0]).toHaveTextContent('1반');
      expect(getAllByRole('button')[1]).toHaveTextContent('2반');
      expect(getAllByRole('button')[2]).toHaveTextContent('3반');
    });
  });

  context('has 5 classes', () => {
    it('ClassContainer', () => {
      useOutletContext.mockReturnValue({ 1: [1, 2, 3, 4, 5, 6] });
      useParams.mockReturnValue({ gradeNumber: 1 });

      const { getAllByRole } = render(<ClassContainer />);

      expect(getAllByRole('button')[0]).toHaveTextContent('1반');
      expect(getAllByRole('button')[1]).toHaveTextContent('2반');
      expect(getAllByRole('button')[2]).toHaveTextContent('3반');
      expect(getAllByRole('button')[3]).toHaveTextContent('4반');
      expect(getAllByRole('button')[4]).toHaveTextContent('5반');
    });
  });
});
