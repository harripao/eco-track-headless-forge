
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturedEbookProps {
  onEbookClick: (resource: any) => void;
  featuredResource: any;
}

const FeaturedEbook = ({ onEbookClick, featuredResource }: FeaturedEbookProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 mb-12 text-white">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Badge className="bg-white text-green-600 mb-4">{t('resources.featured.badge')}</Badge>
          <h3 className="text-3xl font-bold mb-4">
            {t('resources.featured.title')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('resources.featured.description')}
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-2xl font-bold">$29.99</span>
            <Badge className="bg-white text-green-600">{t('resources.featured.downloads')}</Badge>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => onEbookClick(featuredResource)}
          >
            <Download className="mr-2 h-5 w-5" />
            {t('resources.featured.button')}
          </Button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
            alt={t('resources.featured.imageAlt')}
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedEbook;
