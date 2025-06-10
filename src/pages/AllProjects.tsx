
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
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = [
    {
      title: t('allProjects.project1.title'),
      description: t('allProjects.project1.description'),
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      category: t('allProjects.category.corporate'),
      impact: t('allProjects.project1.impact'),
      status: t('allProjects.status.completed'),
      year: '2023'
    },
    {
      title: t('allProjects.project2.title'),
      description: t('allProjects.project2.description'),
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=250&fit=crop',
      category: t('allProjects.category.municipal'),
      impact: t('allProjects.project2.impact'),
      status: t('allProjects.status.ongoing'),
      year: '2024'
    },
    {
      title: t('allProjects.project3.title'),
      description: t('allProjects.project3.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      category: t('allProjects.category.education'),
      impact: t('allProjects.project3.impact'),
      status: t('allProjects.status.available'),
      year: '2023'
    },
    {
      title: t('allProjects.project4.title'),
      description: t('allProjects.project4.description'),
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop',
      category: t('allProjects.category.technology'),
      impact: t('allProjects.project4.impact'),
      status: t('allProjects.status.beta'),
      year: '2024'
    },
    {
      title: t('allProjects.project5.title'),
      description: t('allProjects.project5.description'),
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
      category: t('allProjects.category.corporate'),
      impact: t('allProjects.project5.impact'),
      status: t('allProjects.status.completed'),
      year: '2023'
    },
    {
      title: t('allProjects.project6.title'),
      description: t('allProjects.project6.description'),
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop',
      category: t('allProjects.category.energy'),
      impact: t('allProjects.project6.impact'),
      status: t('allProjects.status.completed'),
      year: '2022'
    },
    {
      title: t('allProjects.project7.title'),
      description: t('allProjects.project7.description'),
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=250&fit=crop',
      category: t('allProjects.category.agriculture'),
      impact: t('allProjects.project7.impact'),
      status: t('allProjects.status.ongoing'),
      year: '2024'
    },
    {
      title: t('allProjects.project8.title'),
      description: t('allProjects.project8.description'),
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=250&fit=crop',
      category: t('allProjects.category.corporate'),
      impact: t('allProjects.project8.impact'),
      status: t('allProjects.status.available'),
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
          <Button variant="outline" className="mb-6" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
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
                        <Badge variant={project.status === t('allProjects.status.completed') ? 'default' : 'secondary'}>
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
                    .filter(p => p.category.toLowerCase() === t(`allProjects.category.${category}`).toLowerCase())
                    .map((project, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge variant={project.status === t('allProjects.status.completed') ? 'default' : 'secondary'}>
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
                
                {filteredProjects.filter(p => p.category.toLowerCase() === t(`allProjects.category.${category}`).toLowerCase()).length === 0 && (
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
