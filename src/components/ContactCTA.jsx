import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { config } from '../config';

export default function ContactCTA() {
  const whatsappNumber = config.whatsapp.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello MEDIGENIX PHARMA, I would like to make an enquiry.')}`;

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={config.images.contactCta}
        alt="Professional healthcare worker providing pharmacy consultation"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-medical-dark-blue/70 via-medical-blue/60 to-medical-dark-blue/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Need Help With a Pharmacy Enquiry?
          </h2>

          <p className="text-xl text-gray-100 mb-10 leading-relaxed">
            Whether you have a general enquiry, prescription request, or need to get in touch with our team, we're
            ready to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-pharmacy-green hover:bg-pharmacy-light-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Call Us
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-medical-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>

            <a
              href="/location"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
