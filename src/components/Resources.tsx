
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, BookOpen, FileText, Video } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Sustainable Business Practices E-book',
      description: 'Complete guide to implementing eco-friendly practices in your business operations.',
      type: 'E-book',
      icon: BookOpen,
      price: '$29.99',
      featured: true,
      downloadCount: '2.5K',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop'
    },
    {
      title: 'Carbon Footprint Calculator Template',
      description: 'Excel template for calculating and tracking your organization\'s carbon emissions.',
      type: 'Template',
      icon: FileText,
      price: 'Free',
      featured: false,
      downloadCount: '5.2K',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop'
    },
    {
      title: 'Environmental Compliance Checklist',
      description: 'Comprehensive checklist to ensure your business meets environmental regulations.',
      type: 'Guide',
      icon: FileText,
      price: 'Free',
      featured: false,
      downloadCount: '3.8K',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop'
    },
    {
      title: 'Video Series: Green Business Transformation',
      description: '10-part video series on transforming your business into a sustainable operation.',
      type: 'Video Course',
      icon: Video,
      price: '$49.99',
      featured: true,
      downloadCount: '1.2K',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop'
    }
  ];

  const freeResources = [
    'Monthly Sustainability Newsletter',
    'Weekly Environmental News Digest',
    'Carbon Tracking Best Practices Guide',
    'Sustainability Metrics Dashboard Template',
    'Green Business Certification Roadmap'
  ];

  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resources & E-books
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive library of sustainability resources, including e-books, templates, and guides to help you on your environmental journey.
          </p>
        </div>

        {/* Featured E-book Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 mb-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-white text-green-600 mb-4">Featured E-book</Badge>
              <h3 className="text-3xl font-bold mb-4">
                Sustainable Business Practices Guide
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Transform your business with our comprehensive 150-page e-book covering everything from carbon tracking to sustainable supply chain management.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-bold">$29.99</span>
                <Badge className="bg-white text-green-600">2,500+ Downloads</Badge>
              </div>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Purchase & Download
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                alt="E-book preview"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* All Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${resource.featured ? 'ring-2 ring-green-600' : ''}`}>
              <div className="relative">
                <img
                  src={resource.image}
                  alt={resource.title}
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
                  <span className="text-sm text-muted-foreground">{resource.downloadCount} downloads</span>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-green-600">{resource.price}</span>
                  <Button size="sm" variant={resource.price === 'Free' ? 'outline' : 'default'}>
                    {resource.price === 'Free' ? <Download className="h-4 w-4" /> : 'Buy Now'}
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
              Free Resources
            </h3>
            <p className="text-muted-foreground">
              Access our collection of free sustainability resources and stay updated with the latest environmental insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {freeResources.map((resource, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                <FileText className="h-5 w-5 text-green-600" />
                <span className="text-muted-foreground">{resource}</span>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
