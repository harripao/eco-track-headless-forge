
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === 'id' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('id')}
        className="text-xs"
      >
        ID
      </Button>
    </div>
  );
};

export default LanguageToggle;
