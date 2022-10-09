import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

function Base() {
  return (
    <main className="bg-white dark:bg-zinc-800 h-screen">
      <Router>
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Base;
