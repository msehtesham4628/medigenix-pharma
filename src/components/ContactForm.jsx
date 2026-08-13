import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const enquiryTypes = [
  'General Enquiry',
  'Medicine Enquiry',
  'Prescription Enquiry',
  'Customer Support',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        enquiryType: 'General Enquiry',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have a question or enquiry? We're here to help. Fill out the form below and our team
            will get back to you as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-dark-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-dark-navy mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-dark-navy mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                disabled={status === 'loading'}
              />
            </div>

            {/* Enquiry Type */}
            <div>
              <label className="block text-sm font-semibold text-dark-navy mb-2">
                Enquiry Type
              </label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all bg-white"
                disabled={status === 'loading'}
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-dark-navy mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your enquiry or message..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all resize-none"
                disabled={status === 'loading'}
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-pharmacy-green/10 border border-pharmacy-green/30 rounded-lg flex items-start gap-3">
                <Check
                  size={20}
                  className="text-pharmacy-green flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-pharmacy-green">Success!</p>
                  <p className="text-sm text-gray-700">
                    Thank you for reaching out. Our team will review your enquiry and get back to
                    you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-600">Please check the form</p>
                  <p className="text-sm text-gray-700">
                    Ensure all required fields are filled out correctly.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-medical-blue hover:bg-medical-dark-blue disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-600 mt-8">
          We respect your privacy. Your information will only be used to respond to your enquiry.
        </p>
      </div>
    </section>
  );
}
