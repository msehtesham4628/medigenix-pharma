import React from 'react';
import { trustItems } from '../config';
import { CheckCircle, MapPin, Users, Award } from 'lucide-react';

const iconMap = {
  0: CheckCircle,
  1: MapPin,
  2: Users,
  3: Award,
};

export default function TrustStrip() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {trustItems.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 p-3 bg-medical-blue/10 rounded-full group-hover:bg-medical-blue/20 transition-colors">
                  <Icon size={28} className="text-medical-blue" />
                </div>
                <p className="text-sm md:text-base font-semibold text-dark-navy">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
