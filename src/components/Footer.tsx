
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    organization: [
      { label: t('nav.about'), href: '#about' },
      { label: t('nav.work'), href: '#work' },
      { label: t('nav.projects'), href: '#projects' },
      { label: t('nav.news'), href: '#news' }
    ],
    resources: [
      { label: t('footer.resources.ebooks'), href: '#resources' },
      { label: t('footer.resources.templates'), href: '#resources' },
      { label: t('footer.resources.guides'), href: '#resources' },
      { label: t('footer.resources.blog'), href: '#news' }
    ],
    support: [
      { label: t('nav.contact'), href: '#contact' },
      { label: t('footer.support.helpCenter'), href: '#' },
      { label: t('footer.support.privacy'), href: '#' },
      { label: t('footer.support.terms'), href: '#' }
    ]
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-4 flex justify-center">
                <img 
                  src="/lovable-uploads/e429ddc2-9145-4e69-b185-e3d9b1d61927.png" 
                  alt="Sentani Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold mb-4">Sentani</span>
              <p className="text-gray-300 mb-6 text-center lg:text-left">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-green-400">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-green-400">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-green-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-green-400">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.organization')}</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.resources')}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.sections.support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">{t('footer.email')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">{t('footer.phone')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">{t('footer.location')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="mt-4 md:mt-0">
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/donate">
                {t('footer.donateMission')}
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <a href="/admin/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-green-600">
            🔐 Login CMS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
