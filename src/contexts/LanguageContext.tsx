
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
    'hero.title': 'Building harmony between people, forests and',
    'hero.climate': 'climate',
    'hero.subtitle': 'Empowering communities, preserving biodiversity, and promoting sustainable solutions throughout Indonesia',
    'hero.donateNow': 'Donate Now',
    'hero.exploreWork': 'Explore Our Work',
    'hero.activeUsers': 'Active Users',
    'hero.companies': 'Companies',
    'hero.co2Tracked': 'CO2 Tracked',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Working towards ecosystem balance and improved quality of life through forest preservation and community empowerment.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'Building harmony between people, forests and climate through community empowerment, conservation and forest restoration to support sustainable economy, low carbon development and climate resilience.',
    'about.mission.title': 'Our Mission',
    'about.mission.point1': 'Protect Indonesia\'s forest biodiversity in collaboration with all stakeholders.',
    'about.mission.point2': 'Develop forest-based carbon management systems to finance conservation and improve community welfare.',
    'about.mission.point3': 'Facilitate inclusive social forestry models and ensure local/indigenous community rights.',
    'about.mission.point4': 'Promote policies supporting greenhouse gas emission reduction via forest restoration.',
    'about.mission.point5': 'Improve local community capacity through training on environmentally friendly agroforestry.',
    'about.team.title': 'Our Team',
    'about.team.description': 'A diverse group of environmental scientists, data analysts, and sustainability experts dedicated to creating impactful solutions.',
    'about.values.title': 'Our Values',
    'about.community.title': 'Community-Led Conservation',
    'about.community.description': 'We believe lasting conservation can only succeed when local and indigenous communities are the decision-makers and primary beneficiaries.',
    'about.science.title': 'Science-Based Approach',
    'about.science.description': 'Our strategies and methods are grounded in rigorous scientific research and best practices in ecology and natural resource management.',
    'about.transparency.title': 'Transparency & Accountability',
    'about.transparency.description': 'We maintain the highest standards of financial management and are committed to open communication with all our stakeholders.',
    'about.innovation.title': 'Innovation & Adaptability',
    'about.innovation.description': 'We embrace creative solutions and continuously adapt our approaches to address emerging challenges in conservation.',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Discover our impactful initiatives driving positive change for people and the planet',
    'projects.sumatra.title': 'Sumatra Forest Restoration',
    'projects.sumatra.description': 'Rehabilitating 5,000 hectares of degraded rainforest in North Sumatra through native species reforestation and community stewardship.',
    'projects.sumatra.impact': '5,000 hectares restored',
    'projects.agroforestry.title': 'Indigenous Agroforestry Development',
    'projects.agroforestry.description': 'Partnering with 12 indigenous communities to implement sustainable agroforestry systems that preserve biodiversity while enhancing livelihoods.',
    'projects.agroforestry.impact': '12 communities engaged',
    'projects.carbon.title': 'Carbon Offset Marketplace',
    'projects.carbon.description': 'Platform connecting businesses with verified carbon offset projects worldwide for immediate climate action.',
    'projects.carbon.impact': '500K tons offset',
    'projects.reforestation.title': 'Community Reforestation Program',
    'projects.reforestation.description': 'Engaging local communities in large-scale reforestation efforts to restore degraded forest landscapes.',
    'projects.reforestation.impact': '3,000 trees planted',
    'projects.category.forest': 'Forest',
    'projects.category.community': 'Community',
    'projects.category.technology': 'Technology',
    'projects.status.ongoing': 'Ongoing',
    'projects.status.beta': 'Beta',
    'projects.status.active': 'Active',
    'projects.status.completed': 'Completed',
    'projects.learnMore': 'Learn More',
    'projects.viewAll': 'View All Projects',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions or want to learn more about our work? We\'d love to hear from you',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company/Organization',
    'contact.form.message': 'Message',
    'contact.form.placeholder': 'Tell us about your sustainability goals and how we can help...',
    'contact.form.send': 'Send Message',
    'contact.info.email.title': 'Email Us',
    'contact.info.phone.title': 'Call Us',
    'contact.info.phone.hours': 'Mon-Fri, 9am-6pm EST',
    'contact.info.address.title': 'Visit Us',
    'contact.info.address.text': 'Bekasi, West Java Province,\nIndonesia',
    
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
    'footer.description': 'Building harmony between people, forests and climate',
    'footer.sections.organization': 'Organization',
    'footer.sections.resources': 'Resources',
    'footer.sections.support': 'Support',
    'footer.resources.ebooks': 'E-books',
    'footer.resources.templates': 'Templates',
    'footer.resources.guides': 'Guides',
    'footer.resources.blog': 'Blog',
    'footer.support.helpCenter': 'Help Center',
    'footer.support.privacy': 'Privacy Policy',
    'footer.support.terms': 'Terms of Service',
    'footer.email': 'admin@sentani.org',
    'footer.phone': '+62 8128 5905 342',
    'footer.location': 'Bekasi, West Java Province, Indonesia',
    'footer.copyright': '© 2024 Sentani. All rights reserved.',
    'footer.donateMission': 'Support Our Mission'
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
    'hero.title': 'Membangun harmoni antara manusia, hutan dan',
    'hero.climate': 'iklim',
    'hero.subtitle': 'Memberdayakan komunitas, melestarikan keanekaragaman hayati, dan mempromosikan solusi berkelanjutan di seluruh Indonesia',
    'hero.donateNow': 'Donasi Sekarang',
    'hero.exploreWork': 'Jelajahi Karya Kami',
    'hero.activeUsers': 'Pengguna Aktif',
    'hero.companies': 'Perusahaan',
    'hero.co2Tracked': 'CO2 Terlacak',
    
    // About
    'about.title': 'Tentang Kami',
    'about.subtitle': 'Bekerja menuju keseimbangan ekosistem dan peningkatan kualitas hidup melalui pelestarian hutan dan pemberdayaan komunitas.',
    'about.vision.title': 'Visi Kami',
    'about.vision.description': 'Membangun harmoni antara manusia, hutan dan iklim melalui pemberdayaan masyarakat, konservasi dan restorasi hutan untuk mendukung ekonomi berkelanjutan, pembangunan rendah karbon dan ketahanan iklim.',
    'about.mission.title': 'Misi Kami',
    'about.mission.point1': 'Melindungi keanekaragaman hayati hutan Indonesia dengan berkolaborasi dengan semua pemangku kepentingan.',
    'about.mission.point2': 'Mengembangkan sistem pengelolaan karbon berbasis hutan untuk membiayai konservasi dan meningkatkan kesejahteraan masyarakat.',
    'about.mission.point3': 'Memfasilitasi model perhutanan sosial yang inklusif dan memastikan hak-hak masyarakat lokal/adat.',
    'about.mission.point4': 'Mempromosikan kebijakan yang mendukung pengurangan emisi gas rumah kaca melalui restorasi hutan.',
    'about.mission.point5': 'Meningkatkan kapasitas masyarakat lokal melalui pelatihan agroforestri yang ramah lingkungan.',
    'about.team.title': 'Tim Kami',
    'about.team.description': 'Kelompok beragam ilmuwan lingkungan, analis data, dan ahli keberlanjutan yang berdedikasi menciptakan solusi berdampak.',
    'about.values.title': 'Nilai-Nilai Kami',
    'about.community.title': 'Konservasi yang Dipimpin Komunitas',
    'about.community.description': 'Kami percaya konservasi yang berkelanjutan hanya dapat berhasil ketika komunitas lokal dan adat menjadi pembuat keputusan dan penerima manfaat utama.',
    'about.science.title': 'Pendekatan Berbasis Sains',
    'about.science.description': 'Strategi dan metode kami didasarkan pada penelitian ilmiah yang ketat dan praktik terbaik dalam ekologi dan pengelolaan sumber daya alam.',
    'about.transparency.title': 'Transparansi & Akuntabilitas',
    'about.transparency.description': 'Kami mempertahankan standar tertinggi dalam pengelolaan keuangan dan berkomitmen pada komunikasi terbuka dengan semua pemangku kepentingan.',
    'about.innovation.title': 'Inovasi & Adaptabilitas',
    'about.innovation.description': 'Kami merangkul solusi kreatif dan terus menerus menyesuaikan pendekatan kami untuk mengatasi tantangan yang muncul dalam konservasi.',
    
    // Projects
    'projects.title': 'Proyek Kami',
    'projects.subtitle': 'Temukan inisiatif berdampak kami yang mendorong perubahan positif bagi manusia dan planet',
    'projects.sumatra.title': 'Restorasi Hutan Sumatera',
    'projects.sumatra.description': 'Merehabilitasi 5.000 hektar hutan hujan yang terdegradasi di Sumatera Utara melalui reboisasi spesies asli dan pengurusan komunitas.',
    'projects.sumatra.impact': '5.000 hektar dipulihkan',
    'projects.agroforestry.title': 'Pengembangan Agroforestri Masyarakat Adat',
    'projects.agroforestry.description': 'Bermitra dengan 12 komunitas adat untuk menerapkan sistem agroforestri berkelanjutan yang melestarikan keanekaragaman hayati sambil meningkatkan mata pencaharian.',
    'projects.agroforestry.impact': '12 komunitas terlibat',
    'projects.carbon.title': 'Pasar Offset Karbon',
    'projects.carbon.description': 'Platform yang menghubungkan bisnis dengan proyek offset karbon terverifikasi di seluruh dunia untuk aksi iklim segera.',
    'projects.carbon.impact': '500K ton offset',
    'projects.reforestation.title': 'Program Reboisasi Komunitas',
    'projects.reforestation.description': 'Melibatkan komunitas lokal dalam upaya reboisasi skala besar untuk memulihkan lanskap hutan yang terdegradasi.',
    'projects.reforestation.impact': '3.000 pohon ditanam',
    'projects.category.forest': 'Hutan',
    'projects.category.community': 'Komunitas',
    'projects.category.technology': 'Teknologi',
    'projects.status.ongoing': 'Berlangsung',
    'projects.status.beta': 'Beta',
    'projects.status.active': 'Aktif',
    'projects.status.completed': 'Selesai',
    'projects.learnMore': 'Pelajari Lebih Lanjut',
    'projects.viewAll': 'Lihat Semua Proyek',
    
    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Ada pertanyaan atau ingin mempelajari lebih lanjut tentang karya kami? Kami senang mendengar dari Anda',
    'contact.form.title': 'Kirim Pesan kepada Kami',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.company': 'Perusahaan/Organisasi',
    'contact.form.message': 'Pesan',
    'contact.form.placeholder': 'Ceritakan tentang tujuan keberlanjutan Anda dan bagaimana kami dapat membantu...',
    'contact.form.send': 'Kirim Pesan',
    'contact.info.email.title': 'Email Kami',
    'contact.info.phone.title': 'Telepon Kami',
    'contact.info.phone.hours': 'Sen-Jum, 9am-6pm EST',
    'contact.info.address.title': 'Kunjungi Kami',
    'contact.info.address.text': 'Bekasi, Provinsi Jawa Barat,\nIndonesia',
    
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
    'footer.description': 'Membangun harmoni antara manusia, hutan dan iklim',
    'footer.sections.organization': 'Organisasi',
    'footer.sections.resources': 'Sumber Daya',
    'footer.sections.support': 'Dukungan',
    'footer.resources.ebooks': 'E-book',
    'footer.resources.templates': 'Template',
    'footer.resources.guides': 'Panduan',
    'footer.resources.blog': 'Blog',
    'footer.support.helpCenter': 'Pusat Bantuan',
    'footer.support.privacy': 'Kebijakan Privasi',
    'footer.support.terms': 'Syarat Layanan',
    'footer.email': 'admin@sentani.org',
    'footer.phone': '+62 8128 5905 342',
    'footer.location': 'Bekasi, Provinsi Jawa Barat, Indonesia',
    'footer.copyright': '© 2024 Sentani. Hak cipta dilindungi.',
    'footer.donateMission': 'Dukung Misi Kami'
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
