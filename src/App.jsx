import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Approach from './components/Approach';
import Services from './components/Services';
import PhotoBanner from './components/PhotoBanner';
import PrescriptionEnquiry from './components/PrescriptionEnquiry';
import WhyChooseUs from './components/WhyChooseUs';
import Registration from './components/Registration';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import ContactForm from './components/ContactForm';
import LegalSection from './components/LegalSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import { config } from './config';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  // Check whether the route is pointing to legal subpages or legal section
  const isLegalPage = useMemo(() => {
    return /^#\/?legal(\/.*)?$/i.test(currentHash);
  }, [currentHash]);

  // 1. Listen for hash changes across the application
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 2. Handle in-page scrolling for non-legal landing sections
  useEffect(() => {
    if (isLegalPage) return;

    const sectionId = currentHash.replace(/^#\/?/, '');

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [currentHash, isLegalPage]);

  // 3. Dynamic Page Title & SEO Meta Tag Management
  useEffect(() => {
    // Dynamically update document title based on the active view
    if (isLegalPage) {
      document.title = `Legal Information | ${config?.businessName || 'MEDIGENIX PHARMA'}`;
    } else {
      document.title = config?.seo?.title || config?.businessName || 'Pharmacy';
    }

    // Set standard meta description
    const descriptionContent = config?.seo?.description || '';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptionContent);

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: config?.seo?.title || config?.businessName || '' },
      { property: 'og:description', content: descriptionContent },
      { property: 'og:type', content: 'business.business' },
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, [isLegalPage]);

  return (
    <div className="min-h-screen bg-light-off-white flex flex-col justify-between selection:bg-medical-blue selection:text-white">
      <Navbar activeHash={currentHash} />

      <div className="flex-grow">
        {isLegalPage ? (
          <LegalPage activeHash={currentHash} />
        ) : (
          <main id="main-content">
            <Hero />
            <TrustStrip />
            <About />
            <Approach />
            <Services />
            <PhotoBanner />
            <PrescriptionEnquiry />
            <WhyChooseUs />
            <Registration />
            <Location />
            <ContactCTA />
            <ContactForm />
            <LegalSection />
          </main>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
