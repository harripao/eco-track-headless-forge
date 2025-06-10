
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    category: string;
    impact: string;
    status: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-semibold">{project.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Impact</p>
                <p className="font-semibold">{project.impact}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold">{project.status}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Community-driven approach with local engagement</li>
              <li>Sustainable practices for long-term impact</li>
              <li>Measurable environmental benefits</li>
              <li>Partnership with local organizations</li>
            </ul>
          </div>
          
          <div className="flex space-x-2">
            <Button onClick={onClose} variant="outline" className="flex-1">
              Close
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
