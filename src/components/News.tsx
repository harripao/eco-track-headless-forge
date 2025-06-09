
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: 'EcoTrack Pro Reaches 1 Million Tons of CO2 Tracked',
      excerpt: 'A major milestone in our mission to make environmental impact visible and actionable for everyone.',
      author: 'Sarah Johnson',
      date: '2024-06-05',
      category: 'Milestone',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=200&fit=crop'
    },
    {
      title: 'New AI-Powered Emission Prediction Features',
      excerpt: 'Advanced machine learning algorithms now help predict future emissions based on current patterns and planned activities.',
      author: 'Dr. Michael Chen',
      date: '2024-05-28',
      category: 'Product Update',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop'
    },
    {
      title: 'Partnership with Global Climate Initiative',
      excerpt: 'EcoTrack Pro joins forces with leading environmental organizations to accelerate climate action worldwide.',
      author: 'Emma Rodriguez',
      date: '2024-05-15',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop'
    },
    {
      title: 'Sustainable Business E-book Now Available',
      excerpt: 'Our comprehensive guide to implementing sustainable practices in modern business operations is now ready for download.',
      author: 'David Thompson',
      date: '2024-05-01',
      category: 'Resource',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
    }
  ];

  return (
    <section id="news" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, partnerships, and insights in environmental sustainability and carbon tracking technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{item.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-green-600 transition-colors">
                  {item.title}
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
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex space-x-4">
            <Badge variant="outline" className="px-4 py-2">All News</Badge>
            <Badge variant="outline" className="px-4 py-2">Product Updates</Badge>
            <Badge variant="outline" className="px-4 py-2">Partnerships</Badge>
            <Badge variant="outline" className="px-4 py-2">Resources</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
