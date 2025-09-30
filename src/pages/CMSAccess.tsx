import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CMSAccess = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Akses CMS Sentani</h1>
      <p className="text-gray-600 mb-4">
        Halaman ini dibuat khusus untuk tim konten Sentani. Di sini kamu bisa login ke sistem CMS, menulis berita, mengelola proyek, dan memperbarui sumber daya langsung dari browser.
      </p>

      <div className="mb-6">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <a href="/admin/" target="_blank" rel="noopener noreferrer">
            🔐 Login ke CMS
          </a>
        </Button>
      </div>

      <div className="mt-4">
       <Button variant="outline" asChild>
          <a href="https://sentani.netlify.app/.netlify/identity/login" target="_blank" rel="noopener noreferrer">      
          🔑 Login via Netlify
          </a>
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-2">
         Jika kamu belum login, klik tombol <strong>Login via Netlify</strong> terlebih dahulu. Setelah login, kamu bisa akses CMS dan mulai menulis.
      </p>

      <p className="text-sm text-gray-500 mb-2">
        Setelah login, kamu bisa memilih koleksi seperti <strong>Berita</strong>, <strong>Proyek</strong>, <strong>Donasi</strong>, atau <strong>Sumber Daya</strong>.
      </p>

      <p className="text-sm text-gray-500">
        Semua perubahan akan langsung tersimpan ke GitHub dan tampil di situs publik.
      </p>
    </div>
  )
}

export default CMSAccess