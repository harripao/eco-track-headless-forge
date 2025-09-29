
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const newsItems = [
    {
      id: '1',
      titleKey: 'news.item1.title',
      excerptKey: 'news.item1.excerpt',
      contentKey: 'news.item1.content',
      author: 'Sarah Johnson',
      date: '2024-06-05',
      categoryKey: 'news.categories.milestone',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      titleKey: 'news.item2.title',
      excerptKey: 'news.item2.excerpt',
      contentKey: 'news.item2.content',
      author: 'Dr. Michael Chen',
      date: '2024-05-28',
      categoryKey: 'news.categories.productUpdate',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      titleKey: 'news.item3.title',
      excerptKey: 'news.item3.excerpt',
      contentKey: 'news.item3.content',
      author: 'Emma Rodriguez',
      date: '2024-05-15',
      categoryKey: 'news.categories.partnership',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop'
    },
    {
      id: '4',
      titleKey: 'news.item4.title',
      excerptKey: 'news.item4.excerpt',
      contentKey: 'news.item4.content',
      author: 'David Thompson',
      date: '2024-05-01',
      categoryKey: 'news.categories.resource',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    }
  ];

  const newsItem = newsItems.find(item => item.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">News Article Not Found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <Link to="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <Badge className="mb-4">{t(newsItem.categoryKey)}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t(newsItem.titleKey)}
              </h1>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {newsItem.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(newsItem.date).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={newsItem.image}
                alt={t(newsItem.titleKey)}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <div className="text-lg text-muted-foreground mb-6">
                {t(newsItem.excerptKey)}
              </div>
              <div className="text-foreground leading-relaxed">
                <p className="mb-4">
                  This is where the full article content would be displayed. In a real application, 
                  this would come from a content management system or database with rich text content.
                </p>
                <p className="mb-4">
                  The article would contain detailed information about the topic, including background, 
                  analysis, quotes from relevant stakeholders, and implications for the future.
                </p>
                <p className="mb-4">
                  For now, this serves as a placeholder to demonstrate the news article page structure 
                  and layout. The content would be dynamically loaded based on the article ID.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Tags:</span>
                <Badge variant="outline">Environment</Badge>
                <Badge variant="outline">Sustainability</Badge>
                <Badge variant="outline">Carbon Tracking</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
