import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { get } from '../utils';

type Member = {
  id: number,
  isStudent: boolean,
  name: string,
  grade: number,
  class: number,
  attendedDates: string[],
}

const theDateOfToday = '220130';

const initialMembers = [
  {
    id: 1,
    isStudent: true,
    name: '이승만',
    grade: 1,
    class: 1,
    attendedDates: ['220102', '220109', '220116', '220123'],
  }, {
    id: 2,
    isStudent: true,
    name: '윤보선',
    grade: 1,
    class: 1,
    attendedDates: ['220102', '220109', '220116', '220123'],
  }, {
    id: 3,
    isStudent: true,
    name: '박정희',
    grade: 1,
    class: 1,
    attendedDates: ['220102', '220109', '220116', '220123'],
  }, {
    id: 4,
    isStudent: true,
    name: '최규하',
    grade: 1,
    class: 1,
    attendedDates: ['220102', '220109', '220116', '220123', '220130'],
  },
];

export default function StudentsListPage() {
  const params = useParams();

  const [members, setMembers] = useState(initialMembers);

  const memebers = useSelector(state => ({
    members
  }))

  function handleClick(member: Member) {
    let editedDates;

    if (member.attendedDates.includes(theDateOfToday)) {
      editedDates = member.attendedDates.filter((date) => date !== theDateOfToday);
    } else {
      editedDates = [...member.attendedDates, theDateOfToday];
    }

    const otherMembers = members.filter((otherMember) => otherMember.id !== member.id);

    setMembers(
      [...otherMembers,
      {
        ...member,
        attendedDates: editedDates,
      },
      ].sort((a, b) => a.id - b.id),
    );
  }

  return (
    <div>
      <h2>StudentsListPage</h2>
      <span>
        {params.grade}
        학년
        {' '}
        {params.class}
        반 학생 명단
      </span>
      <ul>
        {members.map((member: Member) => {
          if (member.grade !== Number(params.grade)
            || member.class !== Number(params.class)) {
            return false;
          }
          return (
            <li key={member.id}>
              <button
                type="button"
                name="memberName"
                onClick={() => handleClick(member)}
              >
                {member.name}
                {member.attendedDates.includes(theDateOfToday) && '(V)'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
