import React, { useEffect } from 'react';
import { AlertTriangle, FileText, Lock, ShieldCheck } from 'lucide-react';
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

export default function LegalPage({ activeHash }) {
  useEffect(() => {
    const sectionId = activeHash.replace('#legal/', '');
    const section = document.getElementById(sectionId);

    if (section) {
      requestAnimationFrame(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeHash]);

  return (
    <main className="bg-light-off-white min-h-screen pt-28">
      <section className="py-16 md:py-20 bg-gradient-to-br from-medical-blue/10 to-pharmacy-green/10">
        <div className="container-max text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-6">
            <ShieldCheck className="text-medical-blue" size={34} />
          </div>
          <h1 className="heading-primary mb-4">Legal Information</h1>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Review the privacy, website usage, and medical disclaimer information for {config.businessName} before using our enquiry forms or contact channels.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max space-y-10">
          {legalSections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                className="card scroll-mt-28"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-medical-blue" size={26} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pharmacy-green mb-2">{section.updated}</p>
                    <h2 className="heading-secondary mb-3">{section.title}</h2>
                    <p className="text-muted leading-relaxed">{section.intro}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}

          <div className="bg-white rounded-xl p-8 border border-medical-blue/10 shadow-sm">
            <h2 className="text-xl font-bold text-dark-navy mb-3">Legal Contact</h2>
            <p className="text-muted leading-relaxed mb-4">
              For privacy, terms, or website-related questions, contact {config.businessName} using the details below.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <a href={`mailto:${config.email}`} className="font-semibold text-medical-blue hover:text-medical-dark-blue">
                {config.email}
              </a>
              <a href={`tel:${config.phone}`} className="font-semibold text-medical-blue hover:text-medical-dark-blue">
                {config.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
