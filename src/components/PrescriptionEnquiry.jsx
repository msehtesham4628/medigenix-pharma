import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { config } from '../config';

export default function PrescriptionEnquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    file: null,
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      setFormData((prev) => ({
        ...prev,
        file: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.phone || !formData.email) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    // Simulate form submission
    // In a real application, you would send this to your backend
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: '',
        file: null,
      });
      setFileName('');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="prescription" className="py-20 md:py-32 bg-light-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
              <img
                src={config.images.prescription}
                alt="Professional pharmacist handling prescription and providing consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/10 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2">
            <div>
              <p className="text-pharmacy-green font-semibold text-sm uppercase tracking-wide mb-2">
                Prescription Enquiry
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
                Have a Prescription to Submit?
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Send your prescription and enquiry details to {config.businessName}. Our team can
              review the request and get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-dark-navy mb-2">
                  Upload Prescription (JPG, PNG, PDF - Max 10MB)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-3 border-2 border-dashed border-medical-blue/30 rounded-lg cursor-pointer hover:border-medical-blue transition-colors"
                    disabled={status === 'loading'}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Upload size={20} className="text-medical-blue" />
                  </div>
                </div>
                {fileName && (
                  <p className="text-sm text-pharmacy-green font-medium mt-2">
                    ✓ {fileName}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-dark-navy mb-2">
                  Message / Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide any additional details about your enquiry..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all resize-none"
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-pharmacy-green/10 border border-pharmacy-green/30 rounded-lg flex items-start gap-3">
                  <Check size={20} className="text-pharmacy-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-pharmacy-green">Success!</p>
                    <p className="text-sm text-gray-700">
                      Thank you. Your enquiry has been received. Our team will review your
                      prescription and get back to you soon.
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
                      Ensure all required fields are filled and file is under 10MB.
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
                {status === 'loading' ? 'Submitting...' : 'Submit Prescription Enquiry'}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-600 text-center">
                Prescription requests are subject to applicable laws and professional review.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
