
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
import Donate from './pages/Donate';
import UITest from './pages/UITest'
import CMSAccess from '@/pages/CMSAccess'
import NewsDetail from './pages/NewsDetail'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ui-test" element={<UITest />} />
          <Route path="/cms-access" element={<CMSAccess />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Routes>
      </Router>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
