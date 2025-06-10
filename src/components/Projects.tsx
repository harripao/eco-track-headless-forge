
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
      title: "Global Manufacturing CO2 Reduction",
      description: "Helped a multinational manufacturing company reduce their carbon footprint by 35% through comprehensive tracking and optimization strategies.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
      category: "Manufacturing",
      impact: "35% CO2 Reduction",
      status: "Completed",
      details: {
        challenge: "A large manufacturing company was struggling to track and reduce their carbon emissions across multiple facilities worldwide.",
        solution: "We implemented our comprehensive carbon tracking platform with real-time monitoring, automated reporting, and AI-powered optimization recommendations.",
        results: ["35% reduction in CO2 emissions", "50% improvement in energy efficiency", "$2.3M annual cost savings", "ISO 14001 certification achieved"],
        timeline: "18 months",
        technologies: ["IoT Sensors", "AI Analytics", "Cloud Platform", "Mobile Apps"]
      }
    },
    {
      id: 2,
      title: "Smart City Sustainability Initiative",
      description: "Partnered with Jakarta to implement city-wide environmental monitoring and citizen engagement platform for sustainable urban development.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop&auto=format",
      category: "Smart Cities",
      impact: "City-wide Impact",
      status: "Ongoing",
      details: {
        challenge: "Jakarta needed a comprehensive system to monitor environmental impact and engage citizens in sustainability efforts.",
        solution: "Developed a city-wide platform with public dashboards, citizen reporting tools, and real-time environmental monitoring.",
        results: ["40% increase in citizen engagement", "25% reduction in waste generation", "Real-time air quality monitoring", "15 new green spaces created"],
        timeline: "24 months",
        technologies: ["IoT Network", "Public APIs", "Mobile Platform", "Data Visualization"]
      }
    },
    {
      id: 3,
      title: "Retail Chain Sustainability Program",
      description: "Enabled a major retail chain to track and reduce environmental impact across 500+ stores, achieving carbon neutrality goals ahead of schedule.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      category: "Retail",
      impact: "Carbon Neutral",
      status: "Completed",
      details: {
        challenge: "A retail chain with 500+ stores needed to achieve carbon neutrality while maintaining operational efficiency.",
        solution: "Implemented store-level tracking, supply chain monitoring, and customer engagement tools for sustainable shopping.",
        results: ["Carbon neutral certification", "30% reduction in packaging waste", "20% energy savings per store", "Enhanced brand reputation"],
        timeline: "12 months",
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
