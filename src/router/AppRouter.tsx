import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { OnlineCourse } from '../pages/OnlineCourse';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OfflineCourse } from '../pages/OfflineCourse';

const AppRouter:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnlineCourse />} />
        <Route path="/online-course" element={<OnlineCourse />} />
        <Route path="/offline-course" element={<OfflineCourse />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
