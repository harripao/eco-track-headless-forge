
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectModal from './ProjectModal';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: t('projects.sumatra.title'),
      description: t('projects.sumatra.description'),
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      category: t('projects.category.forest'),
      impact: t('projects.sumatra.impact'),
      status: t('projects.status.ongoing')
    },
    {
      title: t('projects.agroforestry.title'),
      description: t('projects.agroforestry.description'),
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=250&fit=crop',
      category: t('projects.category.community'),
      impact: t('projects.agroforestry.impact'),
      status: t('projects.status.ongoing')
    },
    {
      title: t('projects.carbon.title'),
      description: t('projects.carbon.description'),
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop',
      category: t('projects.category.technology'),
      impact: t('projects.carbon.impact'),
      status: t('projects.status.beta')
    },
    {
      title: t('projects.reforestation.title'),
      description: t('projects.reforestation.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      category: t('projects.category.forest'),
      impact: t('projects.reforestation.impact'),
      status: t('projects.status.active')
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === t('projects.status.completed') ? 'default' : 'secondary'}>
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleProjectClick(project)}
                >
                  {t('projects.learnMore')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/projects">{t('projects.viewAll')}</Link>
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
