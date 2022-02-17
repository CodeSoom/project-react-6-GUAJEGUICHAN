import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import AddStudentPage from '../Pages/AddStudentPage';
import ButtonsForCheckPage from '../Pages/ButtonsForCheckPage';
import ClassPage from '../Pages/ClassPage';
import LoginPage from '../Pages/LoginPage';
import MenuPage from '../Pages/MenuPage';
import RealtimeList from '../Pages/RealtimeListPage';
import SearchPage from '../Pages/SearchPage';
import StudentsListPage from '../Pages/StudentsListPage';
import { setMembers } from '../slice';

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

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {

  })

  return (
    <div>
      <h2>App Component</h2>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/checkbuttons" element={<ButtonsForCheckPage />} />
        <Route path="/checkbuttons/:grade/*" element={<ClassPage />} />
        <Route path="/checkbuttons/:grade/:class" element={<StudentsListPage />} />
        <Route path="/realtimelist" element={<RealtimeList />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/addstudent" element={<AddStudentPage />} />

      </Routes>
    </div>
  );
}
