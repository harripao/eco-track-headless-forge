
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
      category: t('projects.project1.category'),
      impact: t('projects.project1.impact'),
      status: t('projects.project1.status'),
      details: {
        challenge: t('projects.project1.details.challenge'),
        solution: t('projects.project1.details.solution'),
        results: [
          t('projects.project1.details.results.0'),
          t('projects.project1.details.results.1'),
          t('projects.project1.details.results.2'),
          t('projects.project1.details.results.3')
        ],
        timeline: t('projects.project1.details.timeline'),
        technologies: ["IoT Sensors", "AI Analytics", "Cloud Platform", "Mobile Apps"]
      }
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop&auto=format",
      category: t('projects.project2.category'),
      impact: t('projects.project2.impact'),
      status: t('projects.project2.status'),
      details: {
        challenge: t('projects.project2.details.challenge'),
        solution: t('projects.project2.details.solution'),
        results: [
          t('projects.project2.details.results.0'),
          t('projects.project2.details.results.1'),
          t('projects.project2.details.results.2'),
          t('projects.project2.details.results.3')
        ],
        timeline: t('projects.project2.details.timeline'),
        technologies: ["IoT Network", "Public APIs", "Mobile Platform", "Data Visualization"]
      }
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      category: t('projects.project3.category'),
      impact: t('projects.project3.impact'),
      status: t('projects.project3.status'),
      details: {
        challenge: t('projects.project3.details.challenge'),
        solution: t('projects.project3.details.solution'),
        results: [
          t('projects.project3.details.results.0'),
          t('projects.project3.details.results.1'),
          t('projects.project3.details.results.2'),
          t('projects.project3.details.results.3')
        ],
        timeline: t('projects.project3.details.timeline'),
        technologies: ["POS Integration", "Supply Chain APIs", "Energy Monitoring", "Customer App"]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.impact}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-emerald-50 group-hover:border-emerald-300"
                  onClick={() => setSelectedProject(project)}
                >
                  {t('projects.learnMore')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-600 hover:bg-emerald-50">
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject}
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
