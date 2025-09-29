
import React from 'react';
import { Construction, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Construction className="h-20 w-20 text-orange-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Under Construction
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-6">
            Sedang Dalam Perbaikan
          </h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-gray-700 font-medium">Estimasi Selesai</span>
          </div>
          <p className="text-gray-600 mb-6">
            Website sedang dalam tahap perbaikan dan pembaruan untuk memberikan pengalaman yang lebih baik.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Terima kasih atas kesabaran Anda
          </p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Untuk informasi lebih lanjut, silakan hubungi:
          </p>
          <Button variant="outline" className="inline-flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            info@sentani.org
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          © 2024 Sentani.org - Website akan segera kembali online
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
