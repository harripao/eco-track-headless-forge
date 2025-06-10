
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ResourceCardProps {
  resource: any;
  onResourceClick: (resource: any) => void;
}

const ResourceCard = ({ resource, onResourceClick }: ResourceCardProps) => {
  const { t } = useLanguage();

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow cursor-pointer ${resource.featured ? 'ring-2 ring-green-600' : ''}`}
      onClick={() => onResourceClick(resource)}
    >
      <div className="relative">
        <img
          src={resource.image}
          alt={t(resource.titleKey)}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        {resource.featured && (
          <Badge className="absolute top-2 right-2 bg-green-600">
            {t('resources.badges.featured')}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{resource.type}</Badge>
          <span className="text-sm text-muted-foreground">{resource.downloadCount} {t('resources.labels.downloads')}</span>
        </div>
        <CardTitle className="text-lg">{t(resource.titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          {t(resource.descriptionKey)}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-green-600">{resource.price}</span>
          <Button 
            size="sm" 
            variant={resource.price === t('resources.pricing.free') ? 'outline' : 'default'}
          >
            {resource.price === t('resources.pricing.free') ? <Download className="h-4 w-4" /> : t('resources.buttons.buyNow')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
