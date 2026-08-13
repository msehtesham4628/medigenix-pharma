import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { config } from '../config';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = config.whatsapp.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello MEDIGENIX PHARMA, I would like to make an enquiry.')}`;

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-pharmacy-green hover:bg-pharmacy-light-green text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in"
        aria-label="Chat with MEDIGENIX PHARMA on WhatsApp"
      >
        <MessageCircle size={28} />

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-dark-navy text-white text-sm rounded-lg whitespace-nowrap shadow-lg pointer-events-none animate-fade-in">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-2 h-2 bg-dark-navy transform rotate-45"></div>
          </div>
        )}

        {/* Pulse Animation */}
        <span className="absolute inset-0 bg-pharmacy-green rounded-full animate-pulse opacity-50"></span>
      </a>

      {/* Mobile Bottom Bar Spacing */}
      <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none sm:hidden"></div>
    </>
  );
}
