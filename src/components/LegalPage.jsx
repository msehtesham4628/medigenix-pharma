import React, { useEffect } from 'react';
import { AlertTriangle, FileText, Lock, ShieldCheck, Mail, Phone } from 'lucide-react';
import { config } from '../config';

const legalSections = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: Lock,
    updated: 'Effective date: January 1, 2024',
    intro:
      'This Privacy Policy explains how MEDIGENIX PHARMA collects, uses, and protects information shared through this website, phone, email, WhatsApp, and enquiry forms.',
    points: [
      'We may collect your name, phone number, email address, enquiry details, prescription information, and any files or messages you choose to submit.',
      'Information is used to respond to pharmacy enquiries, verify request details, coordinate customer support, and maintain business records where required.',
      'Prescription or health-related information should be shared only when necessary for a pharmacy enquiry and should not be used for emergencies.',
      'We do not sell personal information. Information may be shared only with authorised staff, service providers, or authorities when required by applicable law.',
      'You may contact us to request corrections or deletion of your information, subject to legal, regulatory, and business record obligations.',
    ],
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    icon: FileText,
    updated: 'Effective date: January 1, 2024',
    intro:
      'By using this website or contacting MEDIGENIX PHARMA through any listed channel, you agree to the following terms for website and enquiry usage.',
    points: [
      'Website content is provided for general information about our pharmacy services and may be updated without prior notice.',
      'Submitting an enquiry does not guarantee product availability, pricing, fulfilment, or acceptance of any prescription-related request.',
      'Customers are responsible for providing accurate contact, prescription, and enquiry information when requesting assistance.',
      'All medicines, pharmacy products, and prescription-related services are subject to applicable laws, verification, and professional review.',
      'Users must not misuse this website, submit false information, upload harmful files, or use contact channels for unlawful requests.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Medical Disclaimer',
    icon: AlertTriangle,
    updated: 'Effective date: January 1, 2024',
    intro:
      'The information on this website is not intended to replace advice from a qualified doctor, pharmacist, or other healthcare professional.',
    points: [
      'Content on this website is for general informational purposes only and should not be treated as medical advice, diagnosis, or treatment.',
      'Always consult a qualified healthcare professional for questions about symptoms, treatment options, dosage, interactions, or side effects.',
      'For medical emergencies, contact local emergency services or visit the nearest emergency medical facility immediately.',
      'Prescription enquiries are reviewed for pharmacy assistance only and do not create a doctor-patient relationship.',
      'Do not delay seeking professional medical advice because of information viewed on this website or received through a general enquiry.',
    ],
  },
];

export default function LegalPage({ currentPath }) {
  useEffect(() => {
    const sectionId = currentPath.replace(/^\/legal\/?/, '');
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  return (
    <main className="bg-light-off-white min-h-screen pt-24 md:pt-28 pb-16">
      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-medical-blue/10 via-white to-pharmacy-green/10 border-b border-gray-100">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6 border border-medical-blue/10">
            <ShieldCheck className="text-medical-blue" size={32} aria-hidden="true" />
          </div>
          <h1 className="heading-primary text-3xl md:text-5xl font-extrabold text-dark-navy mb-4">
            Legal Information
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Review the privacy, website usage, and medical disclaimer policies for {config?.businessName || 'MEDIGENIX PHARMA'} before using our services.
          </p>
        </div>
      </section>

      {/* Main Content Articles */}
      <section className="py-12 md:py-16">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8 md:space-y-12">
          {legalSections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                tabIndex="-1"
                className="card scroll-mt-32 p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-gray-150 shadow-sm focus:outline-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-medical-blue" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-pharmacy-green bg-pharmacy-green/10 px-2.5 py-1 rounded-md mb-2">
                      {section.updated}
                    </span>
                    <h2 className="heading-secondary text-2xl md:text-3xl font-bold text-dark-navy mb-2">
                      {section.title}
                    </h2>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {section.intro}
                    </p>
                  </div>
                </div>

                <hr className="my-6 border-gray-100" />

                <ul className="space-y-3.5 text-gray-700 text-sm md:text-base leading-relaxed list-disc pl-5 marker:text-medical-blue">
                  {section.points.map((point, index) => (
                    <li key={index} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}

          {/* Contact Support Footer Box */}
          <aside className="bg-white rounded-2xl p-6 sm:p-8 border border-medical-blue/20 shadow-sm">
            <h2 className="text-xl font-bold text-dark-navy mb-2">Legal & Compliance Inquiries</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
              For queries concerning privacy policies, website terms, or data protection, reach out directly to our compliance desk:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {config?.email && (
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-medical-blue/5 text-medical-blue hover:bg-medical-blue/10 transition-colors font-medium text-sm"
                >
                  <Mail size={18} aria-hidden="true" />
                  <span>{config.email}</span>
                </a>
              )}
              {config?.phone && (
                <a
                  href={`tel:${config.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-medical-blue/5 text-medical-blue hover:bg-medical-blue/10 transition-colors font-medium text-sm"
                >
                  <Phone size={18} aria-hidden="true" />
                  <span>{config.phone}</span>
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
