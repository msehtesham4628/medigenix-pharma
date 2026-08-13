import React from 'react';
import { whyChooseUs } from '../config';
import { MapPin, Calendar, Users, CheckCircle } from 'lucide-react';
import { config } from '../config';

const iconMap = {
  0: MapPin,
  1: Calendar,
  2: Users,
  3: CheckCircle,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-medical-dark-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Why Choose {config.businessName}?
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                We're committed to being more than just a pharmacy. We're your trusted local health
                partner.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-6">
              {whyChooseUs.map((feature, index) => {
                const Icon = iconMap[index];
                return (
                  <div
                    key={index}
                    className="flex gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pharmacy-green/20 group-hover:bg-pharmacy-green/40 transition-colors">
                        <Icon size={24} className="text-pharmacy-green" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-100">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
              <img
                src={config.images.whyChoose}
                alt="Modern pharmacy interior demonstrating professional healthcare service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-dark-blue/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
