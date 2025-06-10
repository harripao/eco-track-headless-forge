
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Building, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-background to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building harmony between people, forests and{' '}
              <span className="text-emerald-600">climate</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Empowering communities, preserving biodiversity, and promoting sustainable solutions throughout Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Explore Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format" 
              alt="Forest canopy with sunlight" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-foreground">10K+</div>
            <div className="text-muted-foreground">Communities Empowered</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-muted-foreground">Conservation Projects</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-foreground">1M+</div>
            <div className="text-muted-foreground">Trees Protected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
