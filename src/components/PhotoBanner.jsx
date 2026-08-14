import React from 'react';
import { MessageCircle } from 'lucide-react';
import { config } from '../config';

export default function PhotoBanner() {
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello MEDIGENIX PHARMA, I would like to make an enquiry.')}`;

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={config.images.photoBanner}
        alt="Professional pharmacy counter with experienced staff providing healthcare service"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-dark-blue/60 via-medical-blue/50 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your Health Matters. Your Convenience Matters Too.
          </h2>

          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Simple communication. Professional pharmacy service. Local convenience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-pharmacy-green hover:bg-pharmacy-light-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact MEDIGENIX PHARMA
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-medical-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
