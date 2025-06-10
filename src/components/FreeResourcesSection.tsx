
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FreeResourceItem from './FreeResourceItem';

interface FreeResourcesSectionProps {
  onFreeResourceClick: (resourceKey: string) => void;
}

const FreeResourcesSection = ({ onFreeResourceClick }: FreeResourcesSectionProps) => {
  const { t } = useLanguage();

  const freeResourcesKeys = [
    'resources.free.newsletter',
    'resources.free.newsDigest',
    'resources.free.bestPractices',
    'resources.free.dashboard',
    'resources.free.certification'
  ];

  return (
    <div className="bg-green-50 rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {t('resources.freeSection.title')}
        </h3>
        <p className="text-muted-foreground">
          {t('resources.freeSection.description')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {freeResourcesKeys.map((resourceKey, index) => (
          <FreeResourceItem
            key={index}
            resourceKey={resourceKey}
            onResourceClick={onFreeResourceClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeResourcesSection;
