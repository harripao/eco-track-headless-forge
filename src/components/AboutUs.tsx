
import React from 'react';
import { Target, Users, Award, Sprout } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.mission.title')}</h3>
            <p className="text-muted-foreground">{t('about.mission.description')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.team.title')}</h3>
            <p className="text-muted-foreground">{t('about.team.description')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.impact.title')}</h3>
            <p className="text-muted-foreground">{t('about.impact.description')}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
              <Sprout className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.founded.title')}</h3>
            <p className="text-muted-foreground">{t('about.founded.description1')}</p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('about.founded.title')}</h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.founded.description1')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about.founded.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
