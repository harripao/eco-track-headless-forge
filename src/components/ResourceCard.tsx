
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

  // Fallback text mapping for resource keys
  const getResourceText = (key: string) => {
    const fallbacks = {
      'resources.ebook1.title': 'Sustainable Business Practices E-book',
      'resources.ebook1.description': 'Complete guide to implementing eco-friendly practices in your business operations.',
      'resources.template1.title': 'Carbon Footprint Calculator Template',
      'resources.template1.description': 'Easy-to-use template for calculating your organization\'s carbon footprint.',
      'resources.guide1.title': 'Green Office Setup Guide',
      'resources.guide1.description': 'Step-by-step guide to creating an environmentally friendly workplace.'
    };
    return t(key) !== key ? t(key) : fallbacks[key] || key;
  };

  const getPriceText = (price: string) => {
    return price === 'resources.pricing.free' ? 'Free' : price;
  };

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow cursor-pointer ${resource.featured ? 'ring-2 ring-green-600' : ''}`}
      onClick={() => onResourceClick(resource)}
    >
      <div className="relative">
        <img
          src={resource.image}
          alt={getResourceText(resource.titleKey)}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        {resource.featured && (
          <Badge className="absolute top-2 right-2 bg-green-600">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{resource.type}</Badge>
          <span className="text-sm text-muted-foreground">{resource.downloadCount} Downloads</span>
        </div>
        <CardTitle className="text-lg">{getResourceText(resource.titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          {getResourceText(resource.descriptionKey)}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-green-600">{getPriceText(resource.price)}</span>
          <Button 
            size="sm" 
            variant={getPriceText(resource.price) === 'Free' ? 'outline' : 'default'}
          >
            {getPriceText(resource.price) === 'Free' ? <Download className="h-4 w-4" /> : 'Buy Now'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
