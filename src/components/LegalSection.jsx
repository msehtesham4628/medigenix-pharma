import React from 'react';
import { AlertTriangle, ArrowRight, FileText, Lock } from 'lucide-react';

const legalItems = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    description:
      'Learn how MEDIGENIX PHARMA handles enquiry, contact, and prescription-related information.',
    href: '#legal/privacy',
    icon: Lock,
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    description:
      'Review the website usage terms, enquiry limitations, and customer responsibilities.',
    href: '#legal/terms',
    icon: FileText,
  },
  {
    id: 'disclaimer',
    title: 'Medical Disclaimer',
    description:
      'Understand that website information is general and is not a substitute for professional medical advice.',
    href: '#legal/disclaimer',
    icon: AlertTriangle,
  },
];

export default function LegalSection() {
  return (
    <section id="legal-overview" aria-labelledby="legal-heading" className="section bg-white py-16 md:py-24">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-pharmacy-green font-semibold mb-3 uppercase tracking-wider text-xs md:text-sm">
            Legal Information
          </p>
          <h2 id="legal-heading" className="heading-secondary text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
            Privacy, Terms, and Medical Disclaimer
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Read the important legal information for using our website, enquiry forms, and pharmacy contact channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {legalItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-label={`Read details about ${item.title}`}
                className="card card-hover group flex flex-col justify-between h-full p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-6 group-hover:bg-medical-blue transition-colors duration-300">
                    <Icon
                      className="text-medical-blue group-hover:text-white transition-colors duration-300"
                      size={24}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-medical-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-50 flex items-center gap-2 text-medical-blue font-semibold text-sm group-hover:text-medical-dark-blue">
                  <span>Read details</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
