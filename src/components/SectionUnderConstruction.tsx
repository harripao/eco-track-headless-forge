
import React from 'react';
import { Construction, Clock } from 'lucide-react';

interface SectionUnderConstructionProps {
  title: string;
  message?: string;
}

const SectionUnderConstruction = ({ title, message }: SectionUnderConstructionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Construction className="h-16 w-16 text-orange-500 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">
            Sedang Dalam Perbaikan
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-gray-700 font-medium">Under Construction</span>
            </div>
            <p className="text-gray-600">
              {message || "Section ini sedang dalam tahap pembaruan untuk memberikan pengalaman yang lebih baik."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUnderConstruction;
