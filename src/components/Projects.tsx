
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
      title: 'Sumatra Forest Restoration',
      description: 'Rehabilitating 5,000 hectares of degraded rainforest in North Sumatra through native species reforestation and community stewardship.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      category: 'Forest',
      impact: '5,000 hectares restored',
      status: 'Ongoing'
    },
    {
      title: 'Indigenous Agroforestry Development',
      description: 'Partnering with 12 indigenous communities to implement sustainable agroforestry systems that preserve biodiversity while enhancing livelihoods.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=250&fit=crop',
      category: 'Community',
      impact: '12 communities engaged',
      status: 'Ongoing'
    },
    {
      title: 'Carbon Offset Marketplace',
      description: 'Platform connecting businesses with verified carbon offset projects worldwide for immediate climate action.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop',
      category: 'Technology',
      impact: '500K tons offset',
      status: 'Beta'
    },
    {
      title: 'Community Reforestation Program',
      description: 'Engaging local communities in large-scale reforestation efforts to restore degraded forest landscapes.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      category: 'Forest',
      impact: '3,000 trees planted',
      status: 'Active'
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
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our impactful initiatives driving positive change for people and the planet
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
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleProjectClick(project)}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/projects">View All Projects</Link>
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
