import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';
import { config } from '../config';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const whatsappNumber = config.whatsapp.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello MEDIGENIX PHARMA, I would like to make an enquiry.')}`;

  return (
    <section id="home" className="pt-24 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-pharmacy-green/10 border border-pharmacy-green/30 rounded-full text-pharmacy-green font-semibold text-sm transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Shield size={16} />
              TRUSTED PHARMACY • HYDERABAD
            </div>

            {/* Main Headline */}
            <h1
              className={`text-5xl md:text-6xl font-bold text-dark-navy leading-tight transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Your Trusted Pharmacy Partner in Hyderabad
            </h1>

            {/* Description */}
            <p
              className={`text-lg text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {config.businessName} is a local chemist and druggist serving the Bandlaguda and Chandrayangutta community with professional pharmacy assistance and a customer-first approach.
            </p>

            {/* Trust Points */}
            <div
              className={`flex flex-wrap gap-4 md:gap-6 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-pharmacy-green" />
                <span className="font-semibold text-dark-navy">Established 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-pharmacy-green" />
                <span className="font-semibold text-dark-navy">Chemist & Druggist</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-pharmacy-green" />
                <span className="font-semibold text-dark-navy">Hyderabad Based</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-medical-blue hover:bg-medical-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight size={20} />
              </a>
              <a
                href="#location"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-medical-blue border-2 border-medical-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Directions
                <MapPin size={20} />
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pharmacy-green hover:text-pharmacy-light-green font-semibold transition-colors duration-300"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={config.images.hero}
              alt="Modern pharmacy interior with professional healthcare service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
