
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, BookOpen, FileText, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import EbookModal from './EbookModal';
import InquiryModal from './InquiryModal';

const Resources = () => {
  const { t } = useLanguage();
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  const resources = [
    {
      titleKey: 'resources.items.ebook.title',
      descriptionKey: 'resources.items.ebook.description',
      type: t('resources.types.ebook'),
      icon: BookOpen,
      price: '$29.99',
      featured: true,
      downloadCount: '2.5K',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
    },
    {
      titleKey: 'resources.items.template.title',
      descriptionKey: 'resources.items.template.description',
      type: t('resources.types.template'),
      icon: FileText,
      price: t('resources.pricing.free'),
      featured: false,
      downloadCount: '5.2K',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      titleKey: 'resources.items.checklist.title',
      descriptionKey: 'resources.items.checklist.description',
      type: t('resources.types.guide'),
      icon: FileText,
      price: t('resources.pricing.free'),
      featured: false,
      downloadCount: '3.8K',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop'
    },
    {
      titleKey: 'resources.items.videoSeries.title',
      descriptionKey: 'resources.items.videoSeries.description',
      type: t('resources.types.videoCourse'),
      icon: Video,
      price: '$49.99',
      featured: true,
      downloadCount: '1.2K',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop'
    }
  ];

  const freeResourcesKeys = [
    'resources.free.newsletter',
    'resources.free.newsDigest',
    'resources.free.bestPractices',
    'resources.free.dashboard',
    'resources.free.certification'
  ];

  const handleResourceClick = (resource) => {
    setSelectedEbook(resource);
  };

  const handleFreeResourceClick = (resourceKey) => {
    setInquirySubject(t(resourceKey));
    setShowInquiry(true);
  };

  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('resources.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        {/* Featured E-book Section */}
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
                onClick={() => handleResourceClick(resources[0])}
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

        {/* All Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow cursor-pointer ${resource.featured ? 'ring-2 ring-green-600' : ''}`}>
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
                    onClick={() => handleResourceClick(resource)}
                  >
                    {resource.price === t('resources.pricing.free') ? <Download className="h-4 w-4" /> : t('resources.buttons.buyNow')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Resources Section */}
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
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                <FileText className="h-5 w-5 text-green-600" />
                <span className="text-muted-foreground flex-1">{t(resourceKey)}</span>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => handleFreeResourceClick(resourceKey)}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedEbook && (
        <EbookModal
          isOpen={!!selectedEbook}
          onClose={() => setSelectedEbook(null)}
          ebook={selectedEbook}
        />
      )}

      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        subject={inquirySubject}
      />
    </section>
  );
};

export default Resources;
