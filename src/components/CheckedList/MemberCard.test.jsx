import React from 'react';

import context from 'jest-plugin-context';

import { render } from '@testing-library/react';

import MemberCard from './MemberCard';

describe('MemberCard', () => {
  const rendersMemberCard = ({ checkedToday }) => ((
    render(<MemberCard
      name="문재인"
      gradeNumber={1}
      classNumber={1}
      checkedToday={checkedToday}
    />)
  ));

  context('checkedToday is true', () => {
    it('renders ✅', () => {
      const { container } = rendersMemberCard({ checkedToday: true });

      expect(container).toHaveTextContent('✅');
    });
  });

  context('checkedToday is false', () => {
    it('renders ❌', () => {
      const { container } = rendersMemberCard({ checkedToday: false });

      expect(container).toHaveTextContent('❌');
    });
  });
});
