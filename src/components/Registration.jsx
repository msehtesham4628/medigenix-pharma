import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { config } from '../config';

export default function Registration() {
  return (
    <section className="py-20 md:py-32 bg-light-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 bg-medical-blue/10 rounded-full mb-6">
              <Shield size={32} className="text-medical-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
              A Registered Local Establishment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {config.businessName} is registered as a commercial establishment under the{' '}
              {config.registration.act}.
            </p>
          </div>

          {/* Registration Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Registration Number */}
            <div className="p-6 bg-medical-blue/5 rounded-xl border border-medical-blue/20 hover:border-medical-blue/40 transition-colors">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Registration Number
              </p>
              <p className="text-2xl font-bold text-medical-blue break-words">
                {config.registration.number}
              </p>
            </div>

            {/* Registered Date */}
            <div className="p-6 bg-pharmacy-green/5 rounded-xl border border-pharmacy-green/20 hover:border-pharmacy-green/40 transition-colors">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Registered Date
              </p>
              <p className="text-2xl font-bold text-pharmacy-green">
                {config.registration.registeredDate}
              </p>
            </div>

            {/* Business Type */}
            <div className="p-6 bg-dark-navy/5 rounded-xl border border-dark-navy/20 hover:border-dark-navy/40 transition-colors">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Business Type
              </p>
              <p className="text-2xl font-bold text-dark-navy">
                {config.registration.businessType}
              </p>
            </div>
          </div>

          {/* Trust Points */}
          <div className="bg-gradient-to-br from-pharmacy-green/10 to-medical-blue/10 rounded-xl p-8 mb-8 border border-medical-blue/20">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle size={24} className="text-pharmacy-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-dark-navy mb-2">Professional Registration</p>
                <p className="text-gray-700">
                  Our registration with the Telangana government confirms our legitimacy and
                  commitment to operating as a professional pharmacy establishment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-6">
              For additional verification or questions about our registration, please contact us
              directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-medical-blue hover:bg-medical-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
