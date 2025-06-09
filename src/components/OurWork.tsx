
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Leaf, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurWork = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BarChart3,
      title: t('work.carbonAnalysis.title'),
      description: t('work.carbonAnalysis.description')
    },
    {
      icon: TrendingUp,
      title: t('work.reporting.title'),
      description: t('work.reporting.description')
    },
    {
      icon: Leaf,
      title: t('work.optimization.title'),
      description: t('work.optimization.description')
    },
    {
      icon: Shield,
      title: t('work.compliance.title'),
      description: t('work.compliance.description')
    }
  ];

  return (
    <section id="work" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('work.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('work.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
                alt="Environmental data visualization"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('work.dataTitle')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('work.dataDescription')}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time emissions tracking</li>
                <li>• Predictive impact modeling</li>
                <li>• Automated compliance reporting</li>
                <li>• Custom dashboard creation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
