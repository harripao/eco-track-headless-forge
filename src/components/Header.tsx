
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.work'), href: '#work' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.news'), href: '#news' },
    { label: t('nav.resources'), href: '#resources' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    // If we're not on the home page, navigate to home page with the section
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
    } else {
      // If we're on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e429ddc2-9145-4e69-b185-e3d9b1d61927.png" 
              alt="Sentani Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Sentani</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link to="/donate">
                {t('nav.donate')}
              </Link>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-between items-center mt-3">
                <LanguageToggle />
                <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link to="/donate">
                    {t('nav.donate')}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
