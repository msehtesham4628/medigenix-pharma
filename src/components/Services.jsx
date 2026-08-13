import React from 'react';
import { services } from '../config';
import {
  Pill,
  ClipboardList,
  Heart,
  Stethoscope,
  Headphones,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Pill,
  ClipboardList,
  Heart,
  Stethoscope,
  Headphones,
  MessageCircle,
};

export default function Services() {
  const handleServiceClick = (title) => {
    // Scroll to prescription enquiry or contact form based on service type
    if (title.includes('Prescription')) {
      document.getElementById('prescription')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-pharmacy-green font-semibold text-sm uppercase tracking-wide mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
            Pharmacy Services Designed Around Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional pharmacy assistance for all your health and wellness enquiries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-blue/30 cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                {/* Icon */}
                <div className="mb-6 p-4 bg-medical-blue/10 rounded-xl w-fit group-hover:bg-medical-blue/20 transition-colors">
                  <Icon size={28} className="text-medical-blue" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-medical-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[60px]">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-medical-blue hover:text-medical-dark-blue font-semibold transition-all duration-300 group/btn">
                  {service.cta}
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-16 p-6 bg-medical-blue/5 border border-medical-blue/20 rounded-xl">
          <p className="text-sm text-gray-700 leading-relaxed text-center">
            <span className="font-semibold">Professional Pharmacy Service:</span> Our team provides
            professional assistance with your pharmacy and healthcare enquiries. We do not provide
            medical diagnosis, prescribe medications, or recommend dosage instructions. For medical
            concerns, please consult a qualified healthcare professional.
          </p>
        </div>
      </div>
    </section>
  );
}
