
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: t('news.item1.title'),
      excerpt: t('news.item1.excerpt'),
      date: '2024-03-15',
      category: 'milestone',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop&auto=format'
    },
    {
      id: 2,
      title: t('news.item2.title'),
      excerpt: t('news.item2.excerpt'),
      date: '2024-03-10',
      category: 'productUpdate',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format'
    },
    {
      id: 3,
      title: t('news.item3.title'),
      excerpt: t('news.item3.excerpt'),
      date: '2024-03-05',
      category: 'partnership',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&auto=format'
    },
    {
      id: 4,
      title: t('news.item4.title'),
      excerpt: t('news.item4.excerpt'),
      date: '2024-02-28',
      category: 'resource',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const categories = {
    milestone: t('news.categories.milestone'),
    productUpdate: t('news.categories.productUpdate'),
    partnership: t('news.categories.partnership'),
    resource: t('news.categories.resource')
  };

  const filteredNews = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  const getCategoryColor = (category: string) => {
    const colors = {
      milestone: 'bg-emerald-100 text-emerald-700',
      productUpdate: 'bg-blue-100 text-blue-700',
      partnership: 'bg-purple-100 text-purple-700',
      resource: 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('news.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            {t('news.filters.all')}
          </Button>
          <Button
            variant={filter === 'productUpdate' ? 'default' : 'outline'}
            onClick={() => setFilter('productUpdate')}
            className="rounded-full"
          >
            {t('news.filters.productUpdates')}
          </Button>
          <Button
            variant={filter === 'partnership' ? 'default' : 'outline'}
            onClick={() => setFilter('partnership')}
            className="rounded-full"
          >
            {t('news.filters.partnerships')}
          </Button>
          <Button
            variant={filter === 'resource' ? 'default' : 'outline'}
            onClick={() => setFilter('resource')}
            className="rounded-full"
          >
            {t('news.filters.resources')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <article key={item.id} className="group bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(item.category)}>
                    {categories[item.category]}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
