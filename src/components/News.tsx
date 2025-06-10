
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InquiryModal from './InquiryModal';

const News = () => {
  const { t } = useLanguage();
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  const newsItems = [
    {
      titleKey: 'news.item1.title',
      excerptKey: 'news.item1.excerpt',
      author: 'Sarah Johnson',
      date: '2024-06-05',
      categoryKey: 'news.categories.milestone',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=200&fit=crop'
    },
    {
      titleKey: 'news.item2.title',
      excerptKey: 'news.item2.excerpt',
      author: 'Dr. Michael Chen',
      date: '2024-05-28',
      categoryKey: 'news.categories.productUpdate',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop'
    },
    {
      titleKey: 'news.item3.title',
      excerptKey: 'news.item3.excerpt',
      author: 'Emma Rodriguez',
      date: '2024-05-15',
      categoryKey: 'news.categories.partnership',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop'
    },
    {
      titleKey: 'news.item4.title',
      excerptKey: 'news.item4.excerpt',
      author: 'David Thompson',
      date: '2024-05-01',
      categoryKey: 'news.categories.resource',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
    }
  ];

  const handleNewsClick = (item) => {
    setInquirySubject(t(item.titleKey));
    setShowInquiry(true);
  };

  return (
    <section id="news" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleNewsClick(item)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{t(item.categoryKey)}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-green-600 transition-colors">
                  {t(item.titleKey)}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(item.excerptKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex space-x-4">
            <Badge variant="outline" className="px-4 py-2">{t('news.filters.all')}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t('news.filters.productUpdates')}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t('news.filters.partnerships')}</Badge>
            <Badge variant="outline" className="px-4 py-2">{t('news.filters.resources')}</Badge>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        subject={inquirySubject}
      />
    </section>
  );
};

export default News;
