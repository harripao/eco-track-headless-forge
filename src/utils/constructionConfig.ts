
// Konfigurasi untuk mengontrol section mana yang under construction
export const constructionConfig = {
  // Set ke true untuk mengaktifkan under construction mode
  news: true,
  projects: false, // Diubah ke false untuk mengaktifkan section Projects kembali
  resources: false,
  contact: false,
  
  // Pesan khusus untuk setiap section
  messages: {
    news: "Section berita dan update sedang dalam tahap pembaruan dengan konten terbaru.",
    projects: "Section proyek sedang dalam tahap pembaruan dengan konten dan gambar terbaru.",
    resources: "Section resources sedang dalam tahap pembaruan.",
    contact: "Section kontak sedang dalam tahap pembaruan."
  }
};

// Helper function untuk mengecek apakah section sedang under construction
export const isUnderConstruction = (section: keyof typeof constructionConfig.messages): boolean => {
  return constructionConfig[section] as boolean;
};

// Helper function untuk mendapatkan pesan under construction
export const getConstructionMessage = (section: keyof typeof constructionConfig.messages): string => {
  return constructionConfig.messages[section];
};
