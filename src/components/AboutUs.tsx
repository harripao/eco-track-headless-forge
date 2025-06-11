
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: Target,
      title: t('about.community.title'),
      description: t('about.community.description')
    },
    {
      icon: Users,
      title: t('about.science.title'),
      description: t('about.science.description')
    },
    {
      icon: Award,
      title: t('about.transparency.title'),
      description: t('about.transparency.description')
    },
    {
      icon: Lightbulb,
      title: t('about.innovation.title'),
      description: t('about.innovation.description')
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('about.vision.description')}
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">
                {t('about.mission.title')}
              </h3>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• {t('about.mission.point1')}</li>
                <li>• {t('about.mission.point2')}</li>
                <li>• {t('about.mission.point3')}</li>
                <li>• {t('about.mission.point4')}</li>
                <li>• {t('about.mission.point5')}</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=400&fit=crop&auto=format"
                alt="Seorang laki-laki Indonesia dari suku Dayak dengan pakaian tradisional sedang mengumpulkan tumbuhan obat di hutan"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{t('about.team.title')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('about.team.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('about.values.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <approach.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
