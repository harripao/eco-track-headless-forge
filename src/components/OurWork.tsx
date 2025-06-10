
import React from 'react';
import { BarChart3, FileText, Target, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('work.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('work.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
              <BarChart3 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('work.carbonAnalysis.title')}</h3>
            <p className="text-muted-foreground">{t('work.carbonAnalysis.description')}</p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('work.reporting.title')}</h3>
            <p className="text-muted-foreground">{t('work.reporting.description')}</p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('work.optimization.title')}</h3>
            <p className="text-muted-foreground">{t('work.optimization.description')}</p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('work.compliance.title')}</h3>
            <p className="text-muted-foreground">{t('work.compliance.description')}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('work.dataTitle')}</h3>
            <p className="text-xl opacity-90">
              {t('work.dataDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
