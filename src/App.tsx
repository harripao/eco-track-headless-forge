
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';
import Index from '@/pages/Index';
import Demo from '@/pages/Demo';
import AllProjects from '@/pages/AllProjects';
import NewsPage from '@/pages/NewsPage';
import Tracking from '@/pages/Tracking';
import Donate from '@/pages/Donate';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
