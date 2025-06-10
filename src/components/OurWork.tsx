import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Handshake, Scale, Target, Leaf, TreePalm, TreeDeciduous, Wind, Search, UserCheck, Settings, BarChart3, TrendingUp } from 'lucide-react';
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

  const focusAreas = [
    {
      icon: TreeDeciduous,
      title: "Forest Conservation & Restoration",
      description: "Our forest conservation and restoration programs are at the heart of Sentani's work. Indonesia's forests are among the most biodiverse in the world, providing critical habitat for endangered species and ecosystem services for millions of people.",
      methods: [
        "Natural regeneration facilitation",
        "Native species reforestation", 
        "Community-based forest monitoring",
        "Sustainable forest management training",
        "Forest fire prevention and control",
        "Biodiversity monitoring and research"
      ],
      achievement: "Through collaborative partnerships with government agencies, local communities, and other stakeholders, we've targeted successfully protecting and restoring over 5,000 hectares of forest ecosystems across Indonesia."
    },
    {
      icon: TreePalm,
      title: "Community Agroforestry",
      description: "Our community agroforestry programs integrate traditional knowledge with modern sustainable farming techniques to create resilient food systems while protecting forest ecosystems.",
      explanation: "Agroforestry combines trees and shrubs with crop cultivation and/or livestock systems. This approach helps diversify income sources for local communities while maintaining forest cover and enhancing biodiversity.",
      methods: [
        "Training on sustainable agroforestry techniques",
        "Establishing demonstration plots",
        "Developing value chains for sustainable forest products", 
        "Creating market access for agroforestry products",
        "Seed and seedling distribution",
        "Farmer-to-farmer knowledge exchange"
      ],
      achievement: "By working with over 75 indigenous communities targeted, we've helped improve food security and increase income while maintaining forest cover on traditional lands."
    },
    {
      icon: Wind,
      title: "Peatland Restoration",
      description: "Indonesia's peatlands store enormous amounts of carbon and are critical for climate regulation. When degraded or burned, they release massive amounts of greenhouse gases. Our peatland protection work focuses on:",
      methods: [
        "Restoring hydrological functions through canal blocking and rewetting",
        "Reforestation of degraded peatland areas",
        "Community-based fire prevention and monitoring",
        "Sustainable livelihood development on peatlands",
        "Peatland mapping and carbon stock assessment",
        "Advocacy for peatland restoration policies"
      ],
      achievement: "Through these interventions, we've targeted reduce fire incidents by over 70% in our project areas and restored thousands of hectares of degraded peatlands. Our peatland work contributes significantly to Indonesia's climate change mitigation efforts."
    },
    {
      icon: Leaf,
      title: "Carbon Management & Climate Resilience",
      description: "Our carbon management program leverages the economic value of forest carbon to finance conservation and community development. We develop high-quality forest carbon projects that generate verified carbon credits while protecting biodiversity and supporting local livelihoods.",
      methods: [
        "Forest carbon stock assessment and monitoring",
        "Development of forest protection and restoration projects under international standards (VCS, CCBS, etc.)",
        "Benefit-sharing mechanisms that ensure equitable distribution of carbon revenues",
        "Community capacity building for carbon project implementation",
        "Climate vulnerability assessments and adaptation planning",
        "Policy advocacy for forest-based climate solutions"
      ]
    }
  ];

  const methodology = [
    {
      number: "1",
      icon: Search,
      title: "Assessment & Planning",
      description: "We begin each initiative with rigorous scientific assessment and participatory planning processes. This includes biodiversity surveys, social assessments, stakeholder consultations, and analysis of threats and opportunities. We develop detailed plans with measurable objectives, activities, and timelines."
    },
    {
      number: "2",
      icon: UserCheck,
      title: "Community Engagement & Capacity Building",
      description: "We invest significant time in building relationships with local communities, understanding their needs and aspirations, and strengthening their capacity for sustainable resource management. This includes training, awareness-raising, and institutional development."
    },
    {
      number: "3",
      icon: Settings,
      title: "Implementation & Adaptive Management",
      description: "Our field teams work closely with communities and local partners to implement planned activities. We employ adaptive management approaches, continuously monitoring progress and adjusting strategies as needed based on feedback and changing conditions."
    },
    {
      number: "4",
      icon: BarChart3,
      title: "Monitoring, Evaluation & Learning",
      description: "We use robust monitoring systems to track ecological, social, and economic indicators of success. Regular evaluations help us assess impact, identify lessons learned, and improve our approaches. We share our learning through publications, workshops, and other knowledge exchange platforms."
    },
    {
      number: "5",
      icon: TrendingUp,
      title: "Scaling & Replication",
      description: "Successful approaches are documented and shared with government agencies, other NGOs, and relevant stakeholders to encourage adoption and scaling. We advocate for supportive policies and participate in networks and forums to spread effective conservation and development approaches."
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

        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Focus Areas
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
                        {area.title === "Peatland Restoration" ? "Our methods include:" : "Our approach includes:"}
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
              Our Methodology
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
