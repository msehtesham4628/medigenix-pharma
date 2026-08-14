import React from 'react';
import { Pill, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  const currentYear = 2023;

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
      { name: 'Legal', href: '#legal-overview' },
    ],
    contact: [
      { icon: MapPin, label: 'Address', value: 'Bandlaguda, Hyderabad' },
      { icon: Phone, label: 'Phone', value: config.phone, href: `tel:${config.phone}` },
      { icon: Mail, label: 'Email', value: config.email, href: `mailto:${config.email}` },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#legal/privacy' },
      { name: 'Terms & Conditions', href: '#legal/terms' },
      { name: 'Medical Disclaimer', href: '#legal/disclaimer' },
    ],
  };

  return (
    <footer className="bg-dark-navy text-white">
      {/* Medical Disclaimer Section */}
      <div className="bg-medical-dark-blue/50 border-t border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold block mb-2">Medical Disclaimer:</span>
              Information provided on this website is for general informational purposes only and
              is not a substitute for professional medical advice, diagnosis, or treatment. Please
              consult a qualified healthcare professional for medical concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <a
                href="#home"
                className="flex items-center gap-3 text-2xl font-bold hover:text-pharmacy-green transition-colors"
              >
                <div className="w-10 h-10 bg-pharmacy-green rounded-lg flex items-center justify-center">
                  <Pill className="text-white" size={24} />
                </div>
                <span>MEDIGENIX</span>
              </a>
              <p className="text-gray-400 text-sm">{config.tagline}</p>
              <p className="text-xs text-gray-500">
                Established {config.establishedShort} | Chemist & Druggist
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-pharmacy-green">Navigation</h4>
              <nav className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-pharmacy-green">Contact</h4>
              <div className="space-y-4">
                {footerLinks.contact.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href || '#'}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group text-sm"
                    >
                      <Icon size={18} className="flex-shrink-0 mt-0.5 group-hover:text-pharmacy-green transition-colors" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-pharmacy-green">Legal</h4>
              <nav className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p className="flex items-center justify-center gap-2 mb-4">
                © {currentYear} {config.businessName}. All rights reserved.
                <Heart size={16} className="text-pharmacy-green" />
              </p>
              <p className="text-xs text-gray-500">
                Professional Pharmacy Service in Hyderabad, Telangana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
