
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

  // UPDATED PROJECTS DATA dengan konten dan gambar baru
  const projects = [
    {
      title: "Restorasi Hutan Mangrove Sentani",
      description: "Program restorasi ekosistem mangrove di pesisir Danau Sentani untuk melindungi biodiversitas dan mencegah erosi pantai. Melibatkan 150 keluarga nelayan lokal.",
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop',
      category: "Konservasi Alam",
      impact: "2,500 pohon mangrove",
      status: "Sedang Berjalan"
    },
    {
      title: "Program Agroforestri Kampung Abar",
      description: "Pengembangan sistem agroforestri berkelanjutan yang menggabungkan budidaya tanaman pangan dengan pelestarian hutan. Meningkatkan pendapatan petani hingga 40%.",
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=400&h=250&fit=crop',
      category: "Pemberdayaan Masyarakat",
      impact: "80 keluarga petani",
      status: "Fase Perluasan"
    },
    {
      title: "Monitoring Karbon Digital Hutan Papua",
      description: "Implementasi teknologi IoT dan satelit untuk monitoring real-time emisi karbon hutan Papua. Sistem peringatan dini untuk deforestasi.",
      image: 'https://images.unsplash.com/photo-1596273158045-89a0e0f2ee59?w=400&h=250&fit=crop',
      category: "Teknologi Hijau",
      impact: "50,000 hektar dipantau",
      status: "Pilot Project"
    },
    {
      title: "Reforestasi Perbukitan Cyclops",
      description: "Program penanaman kembali hutan di Perbukitan Cyclops dengan spesies endemik Papua. Melibatkan sekolah-sekolah dan komunitas lokal dalam kegiatan penanaman.",
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
      category: "Restorasi Hutan",
      impact: "10,000 bibit ditanam",
      status: "Tahap 2 Aktif"
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
            Proyek-Proyek Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inisiatif konkret untuk kelestarian lingkungan dan pemberdayaan masyarakat Papua
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
                  <Badge variant={project.status === 'Selesai' ? 'default' : 'secondary'}>
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
                  Pelajari Lebih Lanjut
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/projects">Lihat Semua Proyek</Link>
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
