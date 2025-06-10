
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Handshake, Scale, Target, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurWork = () => {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: Users,
      title: "Community-Centered",
      description: "We place local and indigenous communities at the center of all our initiatives, respecting traditional knowledge and customary rights."
    },
    {
      icon: Globe,
      title: "Holistic & Integrated",
      description: "We address environmental, social, and economic challenges through comprehensive, integrated approaches."
    },
    {
      icon: Handshake,
      title: "Collaborative",
      description: "We forge partnerships across sectors - government, private, academic, and civil society - to maximize impact and sustainability."
    },
    {
      icon: Scale,
      title: "Rights-Based",
      description: "We uphold and advocate for the rights of local communities, ensuring equitable access to resources and benefits."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "We focus on measurable outcomes and impact, continuously monitoring and evaluating our progress."
    },
    {
      icon: Leaf,
      title: "Ecologically Sound",
      description: "We employ approaches that work with natural processes and enhance ecosystem functions."
    }
  ];

  return (
    <section id="work" className="py-16 bg-gradient-to-br from-gray-600 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our key focus areas where we're making a difference in Indonesia's environmental landscape.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Approach
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
      </div>
    </section>
  );
};

export default OurWork;
