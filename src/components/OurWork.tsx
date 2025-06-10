
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Handshake, Scale, Target, Leaf, TreePalm, TreeDeciduous, Wind, Search, UserCheck, Settings, BarChart3, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurWork = () => {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: Users,
      title: t('work.approach.community.title'),
      description: t('work.approach.community.description')
    },
    {
      icon: Globe,
      title: t('work.approach.holistic.title'),
      description: t('work.approach.holistic.description')
    },
    {
      icon: Handshake,
      title: t('work.approach.collaborative.title'),
      description: t('work.approach.collaborative.description')
    },
    {
      icon: Scale,
      title: t('work.approach.rights.title'),
      description: t('work.approach.rights.description')
    },
    {
      icon: Target,
      title: t('work.approach.results.title'),
      description: t('work.approach.results.description')
    },
    {
      icon: Leaf,
      title: t('work.approach.ecological.title'),
      description: t('work.approach.ecological.description')
    }
  ];

  const focusAreas = [
    {
      icon: TreeDeciduous,
      title: t('work.focus.forest.title'),
      description: t('work.focus.forest.description'),
      methods: [
        t('work.focus.forest.method1'),
        t('work.focus.forest.method2'),
        t('work.focus.forest.method3'),
        t('work.focus.forest.method4'),
        t('work.focus.forest.method5'),
        t('work.focus.forest.method6')
      ],
      achievement: t('work.focus.forest.achievement')
    },
    {
      icon: TreePalm,
      title: t('work.focus.agroforestry.title'),
      description: t('work.focus.agroforestry.description'),
      explanation: t('work.focus.agroforestry.explanation'),
      methods: [
        t('work.focus.agroforestry.method1'),
        t('work.focus.agroforestry.method2'),
        t('work.focus.agroforestry.method3'),
        t('work.focus.agroforestry.method4'),
        t('work.focus.agroforestry.method5'),
        t('work.focus.agroforestry.method6')
      ],
      achievement: t('work.focus.agroforestry.achievement')
    },
    {
      icon: Wind,
      title: t('work.focus.peatland.title'),
      description: t('work.focus.peatland.description'),
      methods: [
        t('work.focus.peatland.method1'),
        t('work.focus.peatland.method2'),
        t('work.focus.peatland.method3'),
        t('work.focus.peatland.method4'),
        t('work.focus.peatland.method5'),
        t('work.focus.peatland.method6')
      ],
      achievement: t('work.focus.peatland.achievement')
    },
    {
      icon: Leaf,
      title: t('work.focus.carbon.title'),
      description: t('work.focus.carbon.description'),
      methods: [
        t('work.focus.carbon.method1'),
        t('work.focus.carbon.method2'),
        t('work.focus.carbon.method3'),
        t('work.focus.carbon.method4'),
        t('work.focus.carbon.method5'),
        t('work.focus.carbon.method6')
      ]
    }
  ];

  const methodology = [
    {
      number: "1",
      icon: Search,
      title: t('work.methodology.assessment.title'),
      description: t('work.methodology.assessment.description')
    },
    {
      number: "2",
      icon: UserCheck,
      title: t('work.methodology.engagement.title'),
      description: t('work.methodology.engagement.description')
    },
    {
      number: "3",
      icon: Settings,
      title: t('work.methodology.implementation.title'),
      description: t('work.methodology.implementation.description')
    },
    {
      number: "4",
      icon: BarChart3,
      title: t('work.methodology.monitoring.title'),
      description: t('work.methodology.monitoring.description')
    },
    {
      number: "5",
      icon: TrendingUp,
      title: t('work.methodology.scaling.title'),
      description: t('work.methodology.scaling.description')
    }
  ];

  return (
    <section id="work" className="py-16 bg-gradient-to-br from-gray-600 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('work.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('work.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('work.approach.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <approach.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {approach.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('work.focus.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <area.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  {area.explanation && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {area.explanation}
                    </p>
                  )}

                  {area.methods && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {area.title === t('work.focus.peatland.title') ? t('work.focus.methodsInclude') : t('work.focus.approachInclude')}
                      </h4>
                      <ul className="space-y-2">
                        {area.methods.map((method, methodIndex) => (
                          <li key={methodIndex} className="text-muted-foreground">
                            • {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {area.achievement && (
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {area.achievement}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('work.methodology.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <step.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
