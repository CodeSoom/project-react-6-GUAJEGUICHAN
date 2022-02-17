import React from 'react';

import { Route, Routes } from 'react-router-dom';
import AddMemberPage from '../Pages/AddMemberPage';

import CheckPage from '../Pages/CheckPage';
import HomePage from '../Pages/HomePage';
import ClassContainer from './Check/ClassContainer';
import GradeContainer from './Check/GradeContainer';
import StudentsContainer from './Check/StudentsContainer';
import CheckedListPage from '../Pages/CheckedListPage';
import SerachPage from '../Pages/SerachPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/check" element={<CheckPage />}>
        <Route path="" element={<GradeContainer />} />
        <Route path=":gradeNumber" element={<ClassContainer />} />
        <Route path=":gradeNumber/:classNumber" element={<StudentsContainer />} />
      </Route>
      <Route path="/addmember" element={<AddMemberPage />} />
      <Route path="/checkedlist" element={<CheckedListPage />} />
      <Route path="/search" element={<SerachPage />} />

    </Routes>
  );
}
