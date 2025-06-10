
import React, { useState } from 'react';
import { BookOpen, FileText, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import EbookModal from './EbookModal';
import InquiryModal from './InquiryModal';
import FeaturedEbook from './FeaturedEbook';
import ResourceCard from './ResourceCard';
import FreeResourcesSection from './FreeResourcesSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

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

  const faqItems = [
    {
      question: "What is forest-based carbon management?",
      answer: "Forest-based carbon management refers to activities that enhance or maintain the carbon stored in forest ecosystems. This includes protecting existing forests to prevent carbon emissions, restoring degraded forests to sequester more carbon, and sustainable forest management practices. These activities can generate carbon credits that can be sold on voluntary or compliance carbon markets, providing financial incentives for conservation and community development."
    },
    {
      question: "How does Sentani work with indigenous communities?",
      answer: "Sentani follows a rights-based approach to working with indigenous communities. We recognize and respect their customary rights to land and resources, traditional knowledge, and governance systems. Our partnerships with indigenous communities are based on principles of Free, Prior, and Informed Consent (FPIC). We collaborate on project planning and implementation, ensure equitable benefit sharing, strengthen community institutions, and support communities in securing legal recognition of their rights."
    },
    {
      question: "What is agroforestry and how does it help conservation?",
      answer: "Agroforestry is a land use management system that combines trees or shrubs with crop cultivation and/or livestock. By integrating trees into agricultural landscapes, agroforestry helps maintain forest cover and connectivity, enhances biodiversity, improves soil health, and provides multiple income streams for communities. This reduces pressure on primary forests while building climate resilience and supporting sustainable livelihoods."
    },
    {
      question: "Why are peatlands so important for climate change mitigation?",
      answer: "Peatlands are wetland ecosystems that contain thick layers of organic soil (peat) formed from partially decomposed plant material. Although they cover only 3% of Earth's land surface, they store nearly 30% of all soil carbon. Indonesian peatlands are particularly carbon-rich. When drained or burned, peatlands release massive amounts of greenhouse gases. Protecting and restoring peatlands is therefore a critical climate change mitigation strategy with high carbon benefits per hectare."
    },
    {
      question: "How can I verify that my donation is being used effectively?",
      answer: "Sentani is committed to transparency and accountability in all our operations. We publish annual reports with detailed financial information and program outcomes, undergo regular external audits, and maintain open communication with donors. For major gifts, we can provide tailored reporting on the specific projects supported. We also welcome donors to visit our project sites when possible to see the impact of their contributions firsthand."
    },
    {
      question: "What volunteer opportunities are available with Sentani?",
      answer: "We offer various volunteer opportunities depending on your skills, interests, and availability. These range from field-based roles supporting conservation activities and community engagement to professional services like communications, graphic design, translation, research, and technical expertise. Both in-person and remote volunteering options are available. Visit our Volunteer page for current opportunities and application details."
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

  const handleContactTeam = () => {
    setInquirySubject('General Inquiry');
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

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-green-700 hover:text-green-800">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Don't see your question answered here?
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleContactTeam}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
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
