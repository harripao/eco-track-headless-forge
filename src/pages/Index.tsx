
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurWork from '../components/OurWork';
import Projects from '../components/Projects';
import News from '../components/News';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionUnderConstruction from '../components/SectionUnderConstruction';
import { isUnderConstruction, getConstructionMessage } from '../utils/constructionConfig';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutUs />
      <OurWork />
      
      {/* Projects - conditional rendering */}
      {isUnderConstruction('projects') ? (
        <SectionUnderConstruction 
          title="Our Projects"
          message={getConstructionMessage('projects')}
        />
      ) : (
        <Projects />
      )}
      
      {/* News - conditional rendering */}
      {isUnderConstruction('news') ? (
        <SectionUnderConstruction 
          title="News & Updates"
          message={getConstructionMessage('news')}
        />
      ) : (
        <News />
      )}
      
      {/* Resources - conditional rendering */}
      {isUnderConstruction('resources') ? (
        <SectionUnderConstruction 
          title="Resources"
          message={getConstructionMessage('resources')}
        />
      ) : (
        <Resources />
      )}
      
      {/* Contact - conditional rendering */}
      {isUnderConstruction('contact') ? (
        <SectionUnderConstruction 
          title="Contact Us"
          message={getConstructionMessage('contact')}
        />
      ) : (
        <Contact />
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
