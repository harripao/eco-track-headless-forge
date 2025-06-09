
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              {t('hero.title')}
              <span className="text-green-600"> Sentani</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                {t('hero.watchDemo')}
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10K+</div>
                <div className="text-sm text-muted-foreground">{t('hero.activeUsers')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-muted-foreground">{t('hero.companies')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-sm text-muted-foreground">{t('hero.co2Tracked')}</div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
              alt="Environmental sustainability"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
