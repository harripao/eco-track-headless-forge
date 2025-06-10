
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
    'about.founded.description': 'Since our launch, we\'ve helped track and reduce millions of tons of CO2 emissions, making a real difference in the fight against climate change.',
    'about.story.title': 'Our Story',
    'about.story.description1': 'Sentani was born from the urgent need to make environmental data accessible and actionable. Our platform helps organizations and individuals make informed decisions that positively impact our planet.',
    'about.story.description2': 'Since our launch, we\'ve helped track and reduce millions of tons of CO2 emissions, making a real difference in the fight against climate change.',
    
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
    'projects.project1.title': 'Smart Agriculture Initiative',
    'projects.project1.description': 'Implementing IoT sensors and AI analytics to optimize farming practices and reduce agricultural carbon emissions.',
    'projects.project1.category': 'Agriculture',
    'projects.project1.impact': '30% Reduction',
    'projects.project1.status': 'Active',
    'projects.project1.details.challenge': 'Traditional farming methods leading to high carbon emissions',
    'projects.project1.details.solution': 'IoT-based monitoring and AI-driven recommendations',
    'projects.project1.details.results.0': '30% reduction in carbon emissions',
    'projects.project1.details.results.1': 'Increased crop yield by 25%',
    'projects.project1.details.results.2': 'Water usage optimized by 40%',
    'projects.project1.details.results.3': '500+ farmers participating',
    'projects.project1.details.timeline': '18 months',
    'projects.project2.title': 'Urban Air Quality Monitoring',
    'projects.project2.description': 'Deploying city-wide sensor networks to track air pollution and provide real-time environmental data to citizens.',
    'projects.project2.category': 'Urban Planning',
    'projects.project2.impact': '50 Cities',
    'projects.project2.status': 'Expanding',
    'projects.project2.details.challenge': 'Lack of real-time air quality data in urban areas',
    'projects.project2.details.solution': 'Dense sensor network with public data access',
    'projects.project2.details.results.0': '50 cities with active monitoring',
    'projects.project2.details.results.1': '1M+ citizens accessing data daily',
    'projects.project2.details.results.2': '20% improvement in air quality awareness',
    'projects.project2.details.results.3': 'Policy changes in 15 cities',
    'projects.project2.details.timeline': '2 years',
    'projects.project3.title': 'Sustainable Supply Chain',
    'projects.project3.description': 'Helping businesses track and optimize their supply chain carbon footprint through advanced analytics and reporting.',
    'projects.project3.category': 'Business',
    'projects.project3.impact': '200+ Companies',
    'projects.project3.status': 'Completed',
    'projects.project3.details.challenge': 'Complex supply chains with hidden carbon emissions',
    'projects.project3.details.solution': 'End-to-end tracking and optimization platform',
    'projects.project3.details.results.0': '200+ companies onboarded',
    'projects.project3.details.results.1': 'Average 35% emission reduction',
    'projects.project3.details.results.2': '$50M in cost savings achieved',
    'projects.project3.details.results.3': '1000+ suppliers engaged',
    'projects.project3.details.timeline': '12 months',
    
    // News
    'news.title': 'Latest News & Updates',
    'news.subtitle': 'Stay informed about our latest developments, partnerships, and insights in environmental sustainability and carbon tracking technology.',
    'news.item1.title': 'Sentani Reaches 1 Million Tons of CO2 Tracked',
    'news.item1.excerpt': 'A major milestone in our mission to make environmental impact visible and actionable for everyone.',
    'news.item2.title': 'New AI-Powered Emission Prediction Features',
    'news.item2.excerpt': 'Advanced machine learning algorithms now help predict future emissions based on current patterns and planned activities.',
    'news.item3.title': 'Partnership with Global Climate Initiative',
    'news.item3.excerpt': 'Sentani joins forces with leading environmental organizations to accelerate climate action worldwide.',
    'news.item4.title': 'Sustainable Business E-book Now Available',
    'news.item4.excerpt': 'Our comprehensive guide to implementing sustainable practices in modern business operations is now ready for download.',
    'news.categories.milestone': 'Milestone',
    'news.categories.productUpdate': 'Product Update',
    'news.categories.partnership': 'Partnership',
    'news.categories.resource': 'Resource',
    'news.filters.all': 'All News',
    'news.filters.productUpdates': 'Product Updates',
    'news.filters.partnerships': 'Partnerships',
    'news.filters.resources': 'Resources',
    
    // Resources
    'resources.title': 'Resources & E-books',
    'resources.subtitle': 'Access our comprehensive library of sustainability resources, including e-books, templates, and guides to help you on your environmental journey.',
    'resources.featured.badge': 'Featured E-book',
    'resources.featured.title': 'Sustainable Business Practices Guide',
    'resources.featured.description': 'Transform your business with our comprehensive 150-page e-book covering everything from carbon tracking to sustainable supply chain management.',
    'resources.featured.downloads': '2,500+ Downloads',
    'resources.featured.button': 'Purchase & Download',
    'resources.featured.imageAlt': 'E-book preview',
    'resources.items.ebook.title': 'Sustainable Business Practices E-book',
    'resources.items.ebook.description': 'Complete guide to implementing eco-friendly practices in your business operations.',
    'resources.items.template.title': 'Carbon Footprint Calculator Template',
    'resources.items.template.description': 'Excel template for calculating and tracking your organization\'s carbon emissions.',
    'resources.items.checklist.title': 'Environmental Compliance Checklist',
    'resources.items.checklist.description': 'Comprehensive checklist to ensure your business meets environmental regulations.',
    'resources.items.videoSeries.title': 'Video Series: Green Business Transformation',
    'resources.items.videoSeries.description': '10-part video series on transforming your business into a sustainable operation.',
    'resources.types.ebook': 'E-book',
    'resources.types.template': 'Template',
    'resources.types.guide': 'Guide',
    'resources.types.videoCourse': 'Video Course',
    'resources.pricing.free': 'Free',
    'resources.badges.featured': 'Featured',
    'resources.labels.downloads': 'downloads',
    'resources.buttons.buyNow': 'Buy Now',
    'resources.buttons.downloadFree': 'Download Free',
    'resources.buttons.purchaseNow': 'Purchase Now',
    'resources.freeSection.title': 'Free Resources',
    'resources.freeSection.description': 'Access our collection of free sustainability resources and stay updated with the latest environmental insights.',
    'resources.free.newsletter': 'Monthly Sustainability Newsletter',
    'resources.free.newsDigest': 'Weekly Environmental News Digest',
    'resources.free.bestPractices': 'Carbon Tracking Best Practices Guide',
    'resources.free.dashboard': 'Sustainability Metrics Dashboard Template',
    'resources.free.certification': 'Green Business Certification Roadmap',
    'resources.modal.whatYouGet': 'What You\'ll Get',
    'resources.modal.benefit1': 'Comprehensive 150-page guide',
    'resources.modal.benefit2': 'Actionable implementation strategies',
    'resources.modal.benefit3': 'Real-world case studies',
    'resources.modal.benefit4': 'Downloadable templates and checklists',
    'resources.modal.rating': '4.8/5 (120 reviews)',
    'resources.modal.instantDownload': 'Instant Download',
    'resources.messages.purchaseRedirect': 'You will be redirected to our secure payment processor.',
    
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
    'about.founded.description': 'Sejak peluncuran kami, kami telah membantu melacak dan mengurangi jutaan ton emisi CO2, membuat perbedaan nyata dalam melawan perubahan iklim.',
    'about.story.title': 'Cerita Kami',
    'about.story.description1': 'Sentani lahir dari kebutuhan mendesak untuk membuat data lingkungan dapat diakses dan ditindaklanjuti. Platform kami membantu organisasi dan individu membuat keputusan yang berdampak positif bagi planet kita.',
    'about.story.description2': 'Sejak peluncuran kami, kami telah membantu melacak dan mengurangi jutaan ton emisi CO2, membuat perbedaan nyata dalam melawan perubahan iklim.',
    
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
    'projects.project1.title': 'Inisiatif Pertanian Pintar',
    'projects.project1.description': 'Mengimplementasikan sensor IoT dan analitik AI untuk mengoptimalkan praktik pertanian dan mengurangi emisi karbon pertanian.',
    'projects.project1.category': 'Pertanian',
    'projects.project1.impact': 'Pengurangan 30%',
    'projects.project1.status': 'Aktif',
    'projects.project1.details.challenge': 'Metode pertanian tradisional yang menyebabkan emisi karbon tinggi',
    'projects.project1.details.solution': 'Pemantauan berbasis IoT dan rekomendasi bertenaga AI',
    'projects.project1.details.results.0': 'Pengurangan emisi karbon 30%',
    'projects.project1.details.results.1': 'Peningkatan hasil panen 25%',
    'projects.project1.details.results.2': 'Optimisasi penggunaan air 40%',
    'projects.project1.details.results.3': '500+ petani berpartisipasi',
    'projects.project1.details.timeline': '18 bulan',
    'projects.project2.title': 'Pemantauan Kualitas Udara Perkotaan',
    'projects.project2.description': 'Menerapkan jaringan sensor di seluruh kota untuk melacak polusi udara dan memberikan data lingkungan real-time kepada warga.',
    'projects.project2.category': 'Perencanaan Kota',
    'projects.project2.impact': '50 Kota',
    'projects.project2.status': 'Berkembang',
    'projects.project2.details.challenge': 'Kurangnya data kualitas udara real-time di daerah perkotaan',
    'projects.project2.details.solution': 'Jaringan sensor padat dengan akses data publik',
    'projects.project2.details.results.0': '50 kota dengan pemantauan aktif',
    'projects.project2.details.results.1': '1M+ warga mengakses data harian',
    'projects.project2.details.results.2': 'Peningkatan kesadaran kualitas udara 20%',
    'projects.project2.details.results.3': 'Perubahan kebijakan di 15 kota',
    'projects.project2.details.timeline': '2 tahun',
    'projects.project3.title': 'Rantai Pasokan Berkelanjutan',
    'projects.project3.description': 'Membantu bisnis melacak dan mengoptimalkan jejak karbon rantai pasokan mereka melalui analitik dan pelaporan canggih.',
    'projects.project3.category': 'Bisnis',
    'projects.project3.impact': '200+ Perusahaan',
    'projects.project3.status': 'Selesai',
    'projects.project3.details.challenge': 'Rantai pasokan kompleks dengan emisi karbon tersembunyi',
    'projects.project3.details.solution': 'Platform pelacakan dan optimisasi end-to-end',
    'projects.project3.details.results.0': '200+ perusahaan terdaftar',
    'projects.project3.details.results.1': 'Rata-rata pengurangan emisi 35%',
    'projects.project3.details.results.2': '$50M penghematan biaya tercapai',
    'projects.project3.details.results.3': '1000+ pemasok terlibat',
    'projects.project3.details.timeline': '12 bulan',
    
    // News
    'news.title': 'Berita & Pembaruan Terkini',
    'news.subtitle': 'Tetap terinformasi tentang perkembangan terbaru kami, kemitraan, dan wawasan dalam keberlanjutan lingkungan dan teknologi pelacakan karbon.',
    'news.item1.title': 'Sentani Mencapai 1 Juta Ton CO2 yang Dilacak',
    'news.item1.excerpt': 'Pencapaian penting dalam misi kami untuk membuat dampak lingkungan terlihat dan dapat ditindaklanjuti untuk semua orang.',
    'news.item2.title': 'Fitur Prediksi Emisi Bertenaga AI Terbaru',
    'news.item2.excerpt': 'Algoritma pembelajaran mesin canggih kini membantu memprediksi emisi masa depan berdasarkan pola dan aktivitas yang direncanakan saat ini.',
    'news.item3.title': 'Kemitraan dengan Inisiatif Iklim Global',
    'news.item3.excerpt': 'Sentani bergabung dengan organisasi lingkungan terkemuka untuk mempercepat aksi iklim di seluruh dunia.',
    'news.item4.title': 'E-book Bisnis Berkelanjutan Kini Tersedia',
    'news.item4.excerpt': 'Panduan komprehensif kami untuk menerapkan praktik berkelanjutan dalam operasi bisnis modern kini siap diunduh.',
    'news.categories.milestone': 'Pencapaian',
    'news.categories.productUpdate': 'Pembaruan Produk',
    'news.categories.partnership': 'Kemitraan',
    'news.categories.resource': 'Sumber Daya',
    'news.filters.all': 'Semua Berita',
    'news.filters.productUpdates': 'Pembaruan Produk',
    'news.filters.partnerships': 'Kemitraan',
    'news.filters.resources': 'Sumber Daya',
    
    // Resources
    'resources.title': 'Sumber Daya & E-book',
    'resources.subtitle': 'Akses perpustakaan komprehensif sumber daya keberlanjutan kami, termasuk e-book, template, dan panduan untuk membantu perjalanan lingkungan Anda.',
    'resources.featured.badge': 'E-book Unggulan',
    'resources.featured.title': 'Panduan Praktik Bisnis Berkelanjutan',
    'resources.featured.description': 'Transformasikan bisnis Anda dengan e-book komprehensif 150 halaman kami yang mencakup segala hal mulai dari pelacakan karbon hingga manajemen rantai pasokan berkelanjutan.',
    'resources.featured.downloads': '2.500+ Unduhan',
    'resources.featured.button': 'Beli & Unduh',
    'resources.featured.imageAlt': 'Pratinjau e-book',
    'resources.items.ebook.title': 'E-book Praktik Bisnis Berkelanjutan',
    'resources.items.ebook.description': 'Panduan lengkap untuk menerapkan praktik ramah lingkungan dalam operasi bisnis Anda.',
    'resources.items.template.title': 'Template Kalkulator Jejak Karbon',
    'resources.items.template.description': 'Template Excel untuk menghitung dan melacak emisi karbon organisasi Anda.',
    'resources.items.checklist.title': 'Daftar Periksa Kepatuhan Lingkungan',
    'resources.items.checklist.description': 'Daftar periksa komprehensif untuk memastikan bisnis Anda memenuhi regulasi lingkungan.',
    'resources.items.videoSeries.title': 'Seri Video: Transformasi Bisnis Hijau',
    'resources.items.videoSeries.description': 'Seri video 10 bagian tentang mentransformasi bisnis Anda menjadi operasi berkelanjutan.',
    'resources.types.ebook': 'E-book',
    'resources.types.template': 'Template',
    'resources.types.guide': 'Panduan',
    'resources.types.videoCourse': 'Kursus Video',
    'resources.pricing.free': 'Gratis',
    'resources.badges.featured': 'Unggulan',
    'resources.labels.downloads': 'unduhan',
    'resources.buttons.buyNow': 'Beli Sekarang',
    'resources.buttons.downloadFree': 'Unduh Gratis',
    'resources.buttons.purchaseNow': 'Beli Sekarang',
    'resources.freeSection.title': 'Sumber Daya Gratis',
    'resources.freeSection.description': 'Akses koleksi sumber daya keberlanjutan gratis kami dan tetap update dengan wawasan lingkungan terbaru.',
    'resources.free.newsletter': 'Newsletter Keberlanjutan Bulanan',
    'resources.free.newsDigest': 'Ringkasan Berita Lingkungan Mingguan',
    'resources.free.bestPractices': 'Panduan Praktik Terbaik Pelacakan Karbon',
    'resources.free.dashboard': 'Template Dashboard Metrik Keberlanjutan',
    'resources.free.certification': 'Peta Jalan Sertifikasi Bisnis Hijau',
    'resources.modal.whatYouGet': 'Yang Akan Anda Dapatkan',
    'resources.modal.benefit1': 'Panduan komprehensif 150 halaman',
    'resources.modal.benefit2': 'Strategi implementasi yang dapat ditindaklanjuti',
    'resources.modal.benefit3': 'Studi kasus dunia nyata',
    'resources.modal.benefit4': 'Template dan daftar periksa yang dapat diunduh',
    'resources.modal.rating': '4,8/5 (120 ulasan)',
    'resources.modal.instantDownload': 'Unduh Instan',
    'resources.messages.purchaseRedirect': 'Anda akan diarahkan ke prosesor pembayaran aman kami.',
    
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

export default LanguageContext;
