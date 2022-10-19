import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import FormPage from '../pages/FormPage';
import Footer from '../components/footer/Footer';
import WatchProjets from '../pages/WatchProjets';

function Base() {
  return (
    <main className="bg-white dark:bg-zinc-800 pb-28 h-full">
      <Router>
        <Navbar />
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
          {/* formulario */}
          <Route path="/formulario" element={<FormPage />} />
          {/* watch projects */}
          <Route paht="/watchProjets" element={<WatchProjets />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default Base;
