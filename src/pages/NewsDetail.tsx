Mantap bro Harri! Kita langsung bikin:

🧩 1. Komponen Dummy: NewsDetail.tsx
Letakkan di src/pages/NewsDetail.tsx
import React from 'react'
import { useParams } from 'react-router-dom'

const NewsDetail = () => {
  const { slug } = useParams()

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Judul Berita: {slug}</h1>
      <p className="text-gray-600 mb-2">Tanggal: 2025-09-30</p>
      <div className="prose prose-lg">
        <p>Ini adalah konten dummy untuk halaman detail berita. Konten akan diambil dari file markdown berdasarkan slug.</p>
      </div>
    </div>
  )
}

export default NewsDetail


📌 Ini akan tampil saat kamu akses /news/contoh-berita

📄 2. File Markdown Dummy
Letakkan di content/news/contoh-berita.md
---
title: "Contoh Berita"
date: "2025-09-30"
slug: "contoh-berita"
---

Ini adalah isi berita dummy untuk preview CMS. Tim konten bisa edit langsung dari Decap CMS.
