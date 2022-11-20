import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import FormPage from '../pages/FormPage';
import Footer from '../components/footer/Footer';
import WatchProjets from '../pages/WatchProjets';
import FormLinkPage from '../pages/FormLinkPage';
import Results from '../components/vista/Results';

function Base() {
  return (
    <main className="bg-white dark:bg-zinc-800 lg:pb-28 lg:h-full">
      <Router>
        <Navbar />
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* not found */}
          {/* formulario */}
          <Route path="/formulario" element={<FormPage />} />
          {/* watch projects */}
          <Route path="/watchProjets" element={<WatchProjets />} />
          <Route path="/linkFigma" element={<FormLinkPage />} />
          <Route path="/vista" element={<Results />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default Base;
