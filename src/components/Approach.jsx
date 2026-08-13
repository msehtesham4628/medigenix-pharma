import React from 'react';
import { approachCards } from '../config';
import { User, Award, Globe } from 'lucide-react';

const iconMap = {
  0: User,
  1: Award,
  2: Globe,
};

export default function Approach() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-medical-blue/5 to-pharmacy-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
            Built Around People, Service & Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our approach is rooted in simplicity, professionalism, and genuine care for the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachCards.map((card, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-medical-blue/30"
              >
                <div className="mb-6 p-4 bg-medical-blue/10 rounded-xl w-fit group-hover:bg-medical-blue/20 transition-colors">
                  <Icon size={32} className="text-medical-blue" />
                </div>

                <h3 className="text-2xl font-bold text-dark-navy mb-4 group-hover:text-medical-blue transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
