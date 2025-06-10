
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Tracking from './pages/Tracking';
import Demo from './pages/Demo';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
