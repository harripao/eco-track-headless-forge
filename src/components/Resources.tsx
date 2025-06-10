
import React, { useState } from 'react';
import { BookOpen, FileText, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import EbookModal from './EbookModal';
import InquiryModal from './InquiryModal';
import FeaturedEbook from './FeaturedEbook';
import ResourceCard from './ResourceCard';
import FreeResourcesSection from './FreeResourcesSection';

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

  const handleResourceClick = (resource) => {
    if (resource.price === t('resources.pricing.free')) {
      setInquirySubject(t(resource.titleKey));
      setShowInquiry(true);
    } else {
      setSelectedEbook(resource);
    }
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

        <FeaturedEbook
          onEbookClick={handleResourceClick}
          featuredResource={resources[0]}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              resource={resource}
              onResourceClick={handleResourceClick}
            />
          ))}
        </div>

        <FreeResourcesSection onFreeResourceClick={handleFreeResourceClick} />
      </div>

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
