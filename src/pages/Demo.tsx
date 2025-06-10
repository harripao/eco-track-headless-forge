
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Play, Pause } from 'lucide-react';

const Demo = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Button>
            
            <h1 className="text-3xl font-bold mb-4">{t('demo.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              {t('demo.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary">{t('demo.duration')}: 15 {t('demo.minutes')}</Badge>
              <Badge variant="secondary">{t('demo.updated')}: 2024-06-01</Badge>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="mb-8 relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=675&fit=crop" 
                alt="Demo Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button 
                  className="bg-white/90 text-black hover:bg-white rounded-full w-16 h-16"
                  onClick={togglePlayback}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{t('demo.videoTitle')}</h2>
                <p className="text-muted-foreground">{t('demo.presenter')}</p>
              </div>
              <Button>{t('demo.download')}</Button>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">{t('demo.tabs.overview')}</TabsTrigger>
              <TabsTrigger value="features">{t('demo.tabs.features')}</TabsTrigger>
              <TabsTrigger value="testimonials">{t('demo.tabs.testimonials')}</TabsTrigger>
              <TabsTrigger value="resources">{t('demo.tabs.resources')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <h3 className="text-xl font-medium mb-2">{t('demo.overview.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('demo.overview.description')}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t('demo.overview.keyFeature1')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('demo.overview.keyFeature1Desc')}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t('demo.overview.keyFeature2')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('demo.overview.keyFeature2Desc')}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6">
              <h3 className="text-xl font-medium mb-2">{t('demo.features.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('demo.features.description')}</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">{t(`demo.features.feature${i}`)}</h4>
                      <p className="text-sm text-muted-foreground">{t(`demo.features.feature${i}Desc`)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials" className="space-y-6">
              <h3 className="text-xl font-medium mb-2">{t('demo.testimonials.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="relative">
                    <CardContent className="pt-6">
                      <blockquote className="italic">
                        "{t(`demo.testimonials.quote${i}`)}"
                      </blockquote>
                      <div className="mt-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-muted"></div>
                        <div className="ml-3">
                          <p className="font-medium">{t(`demo.testimonials.person${i}`)}</p>
                          <p className="text-sm text-muted-foreground">{t(`demo.testimonials.title${i}`)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <h3 className="text-xl font-medium mb-2">{t('demo.resources.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('demo.resources.description')}</p>
              
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="flex items-center p-4">
                      <div className="w-12 h-12 bg-muted flex items-center justify-center rounded"></div>
                      <div className="ml-4 flex-grow">
                        <p className="font-medium">{t(`demo.resources.resource${i}`)}</p>
                        <p className="text-sm text-muted-foreground">{t(`demo.resources.resource${i}Type`)}</p>
                      </div>
                      <Button size="sm">{t('demo.resources.download')}</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">{t('demo.cta.title')}</h3>
                <p className="mb-6 opacity-90 max-w-2xl mx-auto">{t('demo.cta.description')}</p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  {t('demo.cta.button')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
