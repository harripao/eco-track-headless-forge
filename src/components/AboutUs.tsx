
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
      title: "Community-Led Conservation",
      description: "We believe lasting conservation can only succeed when local and indigenous communities are the decision-makers and primary beneficiaries."
    },
    {
      icon: Users,
      title: "Science-Based Approach",
      description: "Our strategies and methods are grounded in rigorous scientific research and best practices in ecology and natural resource management."
    },
    {
      icon: Award,
      title: "Transparency & Accountability",
      description: "We maintain the highest standards of financial management and are committed to open communication with all our stakeholders."
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working towards ecosystem balance and improved quality of life through forest preservation and community empowerment.
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
                Our Vision
              </h3>
              <p className="text-muted-foreground mb-4">
                Building harmony between people, forests and climate through community empowerment, conservation and forest restoration to support sustainable economy, low carbon development and climate resilience.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-6">
                Our Mission
              </h3>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• Protect Indonesia's forest biodiversity in collaboration with all stakeholders.</li>
                <li>• Develop forest-based carbon management systems to finance conservation and improve community welfare.</li>
                <li>• Facilitate inclusive social forestry models and ensure local/indigenous community rights.</li>
                <li>• Promote policies supporting greenhouse gas emission reduction via forest restoration.</li>
                <li>• Improve local community capacity through training on environmentally friendly agroforestry.</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="default" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/tracking">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="default" variant="outline" asChild>
                  <Link to="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
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
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Our Team</h4>
                <p className="text-muted-foreground text-sm">
                  A diverse group of environmental scientists, data analysts, and sustainability experts dedicated to creating impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-background border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Innovation & Adaptability</h3>
          <p className="text-muted-foreground">
            We embrace creative solutions and continuously adapt our approaches to address emerging challenges in conservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
