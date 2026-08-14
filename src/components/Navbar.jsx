import React, { useState, useEffect } from 'react';
import { Menu, X, Pill } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Legal', href: '/legal' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-medical-blue"
          >
            <div className="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
              <Pill className="text-white" size={24} />
            </div>
            <span>MEDIGENIX</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-navy hover:text-medical-blue transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-medical-blue hover:bg-medical-dark-blue text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-medical-blue" />
            ) : (
              <Menu size={28} className="text-medical-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-dark-navy hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="block w-full text-left px-4 py-3 bg-medical-blue text-white font-medium rounded-lg m-4 mt-4 hover:bg-medical-dark-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
