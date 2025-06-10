
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Building, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-background to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            {t('hero.title')} <span className="text-foreground">Sentani</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              {t('hero.getStarted')}
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              {t('hero.watchDemo')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">15,000+</div>
              <div className="text-muted-foreground">{t('hero.activeUsers')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">{t('hero.companies')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">2.5M</div>
              <div className="text-muted-foreground">{t('hero.co2Tracked')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
