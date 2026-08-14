import React from 'react';
import { AlertTriangle, ArrowRight, FileText, Lock } from 'lucide-react';

const legalItems = [
  {
    title: 'Privacy Policy',
    description: 'Learn how MEDIGENIX PHARMA handles enquiry, contact, and prescription-related information.',
    href: '#legal/privacy',
    icon: Lock,
  },
  {
    title: 'Terms & Conditions',
    description: 'Review the website usage terms, enquiry limitations, and customer responsibilities.',
    href: '#legal/terms',
    icon: FileText,
  },
  {
    title: 'Medical Disclaimer',
    description: 'Understand that website information is general and is not a substitute for professional medical advice.',
    href: '#legal/disclaimer',
    icon: AlertTriangle,
  },
];

export default function LegalSection() {
  return (
    <section id="legal-overview" className="section bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-pharmacy-green font-semibold mb-3 uppercase tracking-wide text-sm">
            Legal Information
          </p>
          <h2 className="heading-secondary mb-4">Privacy, terms, and medical disclaimer</h2>
          <p className="text-muted leading-relaxed">
            Read the important legal information for using our website, enquiry forms, and pharmacy contact channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {legalItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="card card-hover group block h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-5 group-hover:bg-medical-blue transition-colors">
                  <Icon className="text-medical-blue group-hover:text-white transition-colors" size={26} />
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-medical-blue font-semibold group-hover:text-medical-dark-blue">
                  Read details
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
