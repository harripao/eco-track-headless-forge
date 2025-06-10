import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ExternalLink, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';

const AllProjects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = [
    {
      title: 'Global Corporate Carbon Tracking',
      description: 'Implemented comprehensive carbon tracking for 50+ multinational corporations, resulting in 30% average emissions reduction.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      category: 'Corporate',
      impact: '2.5M tons CO2 reduced',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Smart City Sustainability Initiative',
      description: 'Developed city-wide environmental monitoring system for urban sustainability planning and implementation.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=250&fit=crop',
      category: 'Municipal',
      impact: '15 cities participating',
      status: 'Ongoing',
      year: '2024'
    },
    {
      title: 'E-book: Sustainable Business Practices',
      description: 'Comprehensive guide to implementing sustainable practices in modern business operations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      category: 'Education',
      impact: '10K+ downloads',
      status: 'Available',
      year: '2023'
    },
    {
      title: 'Carbon Offset Marketplace',
      description: 'Platform connecting businesses with verified carbon offset projects worldwide for immediate climate action.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop',
      category: 'Technology',
      impact: '500K tons offset',
      status: 'Beta',
      year: '2024'
    },
    {
      title: 'Sustainable Supply Chain Analysis',
      description: 'End-to-end supply chain sustainability assessment and optimization for manufacturing sector.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
      category: 'Corporate',
      impact: '35% reduced carbon footprint',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Renewable Energy Transition',
      description: 'Strategic planning and implementation of renewable energy systems for industrial clients.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop',
      category: 'Energy',
      impact: '60% reduction in fossil fuel use',
      status: 'Completed',
      year: '2022'
    },
    {
      title: 'Sustainable Agriculture Initiative',
      description: 'Regenerative farming practices implementation across 50,000 hectares of agricultural land.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=250&fit=crop',
      category: 'Agriculture',
      impact: '45% water usage reduction',
      status: 'Ongoing',
      year: '2024'
    },
    {
      title: 'Zero Waste Office Program',
      description: 'Comprehensive office waste reduction program for corporate environments.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=250&fit=crop',
      category: 'Corporate',
      impact: '95% waste diversion rate',
      status: 'Available',
      year: '2023'
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const filteredProjects = allProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t('allProjects.title')}</h1>
              <p className="text-muted-foreground">{t('allProjects.subtitle')}</p>
            </div>
            
            <div className="w-full md:w-auto flex gap-2">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder={t('allProjects.search')}
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">{t('allProjects.filters.all')}</TabsTrigger>
              <TabsTrigger value="corporate">{t('allProjects.filters.corporate')}</TabsTrigger>
              <TabsTrigger value="municipal">{t('allProjects.filters.municipal')}</TabsTrigger>
              <TabsTrigger value="education">{t('allProjects.filters.education')}</TabsTrigger>
              <TabsTrigger value="technology">{t('allProjects.filters.technology')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                        <span className="text-sm font-medium text-green-600">{project.impact}</span>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleProjectClick(project)}
                        >
                          {t('projects.learnMore')}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">{t('allProjects.noResults')}</h3>
                  <p className="text-muted-foreground">{t('allProjects.tryDifferent')}</p>
                </div>
              )}
            </TabsContent>
            
            {/* Other tabs would filter by category - keeping the same structure */}
            {['corporate', 'municipal', 'education', 'technology'].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects
                    .filter(p => p.category.toLowerCase() === category)
                    .map((project, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{project.category}</Badge>
                            <span className="text-sm font-medium text-green-600">{project.impact}</span>
                          </div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleProjectClick(project)}
                            >
                              {t('projects.learnMore')}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                
                {filteredProjects.filter(p => p.category.toLowerCase() === category).length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">{t('allProjects.noResults')}</h3>
                    <p className="text-muted-foreground">{t('allProjects.tryDifferent')}</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default AllProjects;
