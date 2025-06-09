
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make environmental tracking accessible and actionable for everyone, driving meaningful change towards a sustainable future.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of environmental scientists, data analysts, and sustainability experts dedicated to creating impactful solutions.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Recognized by leading environmental organizations for our innovative approach to carbon footprint tracking and reduction.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About EcoTrack Pro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about empowering individuals and organizations to understand, track, and reduce their environmental impact through innovative technology and data-driven insights.
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
                Founded on Sustainability
              </h3>
              <p className="text-muted-foreground mb-4">
                EcoTrack Pro was born from the urgent need to make environmental data accessible and actionable. Our platform helps organizations and individuals make informed decisions that positively impact our planet.
              </p>
              <p className="text-muted-foreground">
                Since our launch, we've helped track and reduce millions of tons of CO2 emissions, making a real difference in the fight against climate change.
              </p>
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
