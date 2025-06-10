
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const AboutUs = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.description')
    },
    {
      icon: Users,
      title: t('about.team.title'),
      description: t('about.team.description')
    },
    {
      icon: Award,
      title: t('about.impact.title'),
      description: t('about.impact.description')
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('about.founded.title')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('about.founded.description1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('about.founded.description2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="default" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/tracking">
                    {t('hero.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="default" variant="outline" asChild>
                  <Link to="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    {t('hero.watchDemo')}
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop"
                alt="Team working on sustainability"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
