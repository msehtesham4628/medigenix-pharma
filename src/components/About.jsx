import React from 'react';
import { ArrowDown } from 'lucide-react';
import { config } from '../config';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-light-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
              <img
                src={config.images.about}
                alt="Professional pharmacist assisting customer with pharmacy enquiry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/10 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-pharmacy-green font-semibold text-sm uppercase tracking-wide mb-2">
                About {config.businessName}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight">
                Professional Pharmacy Service, Close to Home
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {config.businessName} is a Hyderabad-based chemist and druggist located in Bandlaguda, Chandrayangutta. Established in {config.establishedShort}, our focus is to provide customers with a convenient and professional pharmacy experience.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                From everyday pharmacy enquiries to prescription-related requests, our goal is to make communication simple and accessible while maintaining a professional approach to pharmaceutical service.
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Established</p>
                  <p className="text-xl md:text-2xl font-bold text-medical-blue">
                    {config.established}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Business</p>
                  <p className="text-lg font-bold text-dark-navy">
                    Chemist & Druggist
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-2">Location</p>
                  <p className="text-sm font-bold text-dark-navy">
                    Bandlaguda, Hyderabad
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-medical-blue hover:text-medical-dark-blue font-semibold transition-all duration-300 group"
            >
              Explore Our Services
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
