
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.about': 'About Us',
    'nav.work': 'Our Work',
    'nav.projects': 'Projects',
    'nav.news': 'News',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    
    // Hero
    'hero.title': 'Track Your Environmental Impact with',
    'hero.subtitle': 'Professional carbon footprint tracking and sustainability management for businesses and individuals committed to making a positive environmental impact.',
    'hero.getStarted': 'Get Started Free',
    'hero.watchDemo': 'Watch Demo',
    'hero.activeUsers': 'Active Users',
    'hero.companies': 'Companies',
    'hero.co2Tracked': 'Tons CO2 Tracked',
    
    // About
    'about.title': 'About Sentani',
    'about.subtitle': 'We\'re passionate about empowering individuals and organizations to understand, track, and reduce their environmental impact through innovative technology and data-driven insights.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To make environmental tracking accessible and actionable for everyone, driving meaningful change towards a sustainable future.',
    'about.team.title': 'Our Team',
    'about.team.description': 'A diverse group of environmental scientists, data analysts, and sustainability experts dedicated to creating impactful solutions.',
    'about.impact.title': 'Our Impact',
    'about.impact.description': 'Recognized by leading environmental organizations for our innovative approach to carbon footprint tracking and reduction.',
    'about.founded.title': 'Founded on Sustainability',
    'about.founded.description1': 'Sentani was born from the urgent need to make environmental data accessible and actionable. Our platform helps organizations and individuals make informed decisions that positively impact our planet.',
    'about.founded.description2': 'Since our launch, we\'ve helped track and reduce millions of tons of CO2 emissions, making a real difference in the fight against climate change.',
    
    // Work
    'work.title': 'Our Work & Services',
    'work.subtitle': 'We provide comprehensive environmental tracking solutions that help you understand, measure, and reduce your carbon footprint through cutting-edge technology.',
    'work.carbonAnalysis.title': 'Carbon Footprint Analysis',
    'work.carbonAnalysis.description': 'Comprehensive tracking and analysis of your carbon emissions across all business operations and personal activities.',
    'work.reporting.title': 'Sustainability Reporting',
    'work.reporting.description': 'Automated generation of detailed sustainability reports that meet international standards and regulatory requirements.',
    'work.optimization.title': 'Eco-Impact Optimization',
    'work.optimization.description': 'AI-powered recommendations to reduce your environmental impact while maintaining operational efficiency.',
    'work.compliance.title': 'Compliance Monitoring',
    'work.compliance.description': 'Stay ahead of environmental regulations with real-time compliance tracking and automated alerts.',
    'work.dataTitle': 'Data-Driven Environmental Solutions',
    'work.dataDescription': 'Our platform leverages advanced analytics and machine learning to provide actionable insights into your environmental impact. From real-time monitoring to predictive modeling, we help you make informed decisions.',
    
    // Projects
    'projects.title': 'Our Projects & Impact',
    'projects.subtitle': 'Explore our successful projects and initiatives that are making a real difference in environmental sustainability across industries and communities.',
    'projects.viewAll': 'View All Projects',
    'projects.learnMore': 'Learn More',
    
    // Footer
    'footer.description': 'Empowering businesses and individuals to track, understand, and reduce their environmental impact through innovative technology.',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.email': 'hello@sentani.org',
    'footer.phone': '+62 21 1234 5678',
    'footer.location': 'Jakarta, Indonesia',
    'footer.copyright': '© 2024 Sentani. All rights reserved.',
    'footer.donateMission': 'Donate to Support Our Mission'
  },
  id: {
    // Header
    'nav.about': 'Tentang Kami',
    'nav.work': 'Karya Kami',
    'nav.projects': 'Proyek',
    'nav.news': 'Berita',
    'nav.resources': 'Sumber Daya',
    'nav.contact': 'Kontak',
    'nav.donate': 'Donasi',
    
    // Hero
    'hero.title': 'Lacak Dampak Lingkungan Anda dengan',
    'hero.subtitle': 'Pelacakan jejak karbon profesional dan manajemen keberlanjutan untuk bisnis dan individu yang berkomitmen membuat dampak lingkungan positif.',
    'hero.getStarted': 'Mulai Gratis',
    'hero.watchDemo': 'Tonton Demo',
    'hero.activeUsers': 'Pengguna Aktif',
    'hero.companies': 'Perusahaan',
    'hero.co2Tracked': 'Ton CO2 Dilacak',
    
    // About
    'about.title': 'Tentang Sentani',
    'about.subtitle': 'Kami bersemangat memberdayakan individu dan organisasi untuk memahami, melacak, dan mengurangi dampak lingkungan mereka melalui teknologi inovatif dan wawasan berbasis data.',
    'about.mission.title': 'Misi Kami',
    'about.mission.description': 'Membuat pelacakan lingkungan dapat diakses dan ditindaklanjuti untuk semua orang, mendorong perubahan bermakna menuju masa depan yang berkelanjutan.',
    'about.team.title': 'Tim Kami',
    'about.team.description': 'Kelompok beragam ilmuwan lingkungan, analis data, dan ahli keberlanjutan yang berdedikasi menciptakan solusi berdampak.',
    'about.impact.title': 'Dampak Kami',
    'about.impact.description': 'Diakui oleh organisasi lingkungan terkemuka atas pendekatan inovatif kami dalam pelacakan dan pengurangan jejak karbon.',
    'about.founded.title': 'Didirikan atas Keberlanjutan',
    'about.founded.description1': 'Sentani lahir dari kebutuhan mendesak untuk membuat data lingkungan dapat diakses dan ditindaklanjuti. Platform kami membantu organisasi dan individu membuat keputusan yang berdampak positif bagi planet kita.',
    'about.founded.description2': 'Sejak peluncuran kami, kami telah membantu melacak dan mengurangi jutaan ton emisi CO2, membuat perbedaan nyata dalam melawan perubahan iklim.',
    
    // Work
    'work.title': 'Karya & Layanan Kami',
    'work.subtitle': 'Kami menyediakan solusi pelacakan lingkungan komprehensif yang membantu Anda memahami, mengukur, dan mengurangi jejak karbon Anda melalui teknologi mutakhir.',
    'work.carbonAnalysis.title': 'Analisis Jejak Karbon',
    'work.carbonAnalysis.description': 'Pelacakan dan analisis komprehensif emisi karbon Anda di semua operasi bisnis dan aktivitas pribadi.',
    'work.reporting.title': 'Pelaporan Keberlanjutan',
    'work.reporting.description': 'Pembuatan otomatis laporan keberlanjutan terperinci yang memenuhi standar internasional dan persyaratan regulasi.',
    'work.optimization.title': 'Optimisasi Dampak Lingkungan',
    'work.optimization.description': 'Rekomendasi bertenaga AI untuk mengurangi dampak lingkungan Anda sambil mempertahankan efisiensi operasional.',
    'work.compliance.title': 'Pemantauan Kepatuhan',
    'work.compliance.description': 'Tetap unggul dalam regulasi lingkungan dengan pelacakan kepatuhan real-time dan peringatan otomatis.',
    'work.dataTitle': 'Solusi Lingkungan Berbasis Data',
    'work.dataDescription': 'Platform kami memanfaatkan analitik canggih dan pembelajaran mesin untuk memberikan wawasan yang dapat ditindaklanjuti tentang dampak lingkungan Anda. Dari pemantauan real-time hingga pemodelan prediktif, kami membantu Anda membuat keputusan yang tepat.',
    
    // Projects
    'projects.title': 'Proyek & Dampak Kami',
    'projects.subtitle': 'Jelajahi proyek dan inisiatif sukses kami yang membuat perbedaan nyata dalam keberlanjutan lingkungan di berbagai industri dan komunitas.',
    'projects.viewAll': 'Lihat Semua Proyek',
    'projects.learnMore': 'Pelajari Lebih Lanjut',
    
    // Footer
    'footer.description': 'Memberdayakan bisnis dan individu untuk melacak, memahami, dan mengurangi dampak lingkungan mereka melalui teknologi inovatif.',
    'footer.company': 'Perusahaan',
    'footer.resources': 'Sumber Daya',
    'footer.support': 'Dukungan',
    'footer.helpCenter': 'Pusat Bantuan',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat Layanan',
    'footer.email': 'halo@sentani.org',
    'footer.phone': '+62 21 1234 5678',
    'footer.location': 'Jakarta, Indonesia',
    'footer.copyright': '© 2024 Sentani. Hak cipta dilindungi.',
    'footer.donateMission': 'Donasi untuk Mendukung Misi Kami'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
