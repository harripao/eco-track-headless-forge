
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const data = [
  { month: 'Jan', emissions: 400, reductions: 240 },
  { month: 'Feb', emissions: 380, reductions: 260 },
  { month: 'Mar', emissions: 350, reductions: 290 },
  { month: 'Apr', emissions: 340, reductions: 300 },
  { month: 'May', emissions: 320, reductions: 320 },
  { month: 'Jun', emissions: 300, reductions: 340 },
  { month: 'Jul', emissions: 280, reductions: 360 },
  { month: 'Aug', emissions: 260, reductions: 380 },
  { month: 'Sep', emissions: 240, reductions: 400 },
  { month: 'Oct', emissions: 220, reductions: 420 },
  { month: 'Nov', emissions: 200, reductions: 440 },
  { month: 'Dec', emissions: 180, reductions: 460 },
];

const Tracking = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Button>
            
            <h1 className="text-3xl font-bold mb-4">{t('tracking.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('tracking.subtitle')}
            </p>
          </div>
          
          {/* Dashboard Overview */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t('tracking.totalEmissions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">1.2M</div>
                <p className="text-sm text-muted-foreground">tons CO₂e</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t('tracking.reductions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">320K</div>
                <p className="text-sm text-muted-foreground">tons CO₂e</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t('tracking.projects')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">42</div>
                <p className="text-sm text-muted-foreground">{t('tracking.active')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{t('tracking.savings')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">$4.2M</div>
                <p className="text-sm text-muted-foreground">{t('tracking.costSavings')}</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('tracking.emissionsOverTime')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="emissions" stroke="#ef4444" activeDot={{ r: 8 }} name={t('tracking.emissions')} />
                    <Line type="monotone" dataKey="reductions" stroke="#22c55e" name={t('tracking.reductions')} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Reports */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('tracking.recentReports')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div>
                      <p className="font-medium">{t(`tracking.report${i+1}.title`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`tracking.report${i+1}.date`)}</p>
                    </div>
                    <Badge variant={i === 0 ? "default" : "outline"}>
                      {i === 0 ? t('tracking.new') : t('tracking.viewed')}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('tracking.recommendations')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div className="flex-1">
                      <p className="font-medium">{t(`tracking.recommendation${i+1}.title`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`tracking.recommendation${i+1}.description`)}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      {t('tracking.apply')}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tracking;
