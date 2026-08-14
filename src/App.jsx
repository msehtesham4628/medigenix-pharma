import React, { useEffect, useMemo, useState } from 'react';
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

const routeSections = {
  '/': 'home',
  '/about': 'about',
  '/approach': 'approach',
  '/services': 'services',
  '/prescription': 'prescription-enquiry',
  '/why-us': 'why-us',
  '/registration': 'registration',
  '/location': 'location',
  '/contact': 'contact',
  '/legal': 'legal-overview',
};

const legalRoutes = new Set(['/legal/privacy', '/legal/terms', '/legal/disclaimer']);

const normalizePath = (pathname) => {
  if (!pathname || pathname === '/') return '/';
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  return normalized || '/';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [isPageVisible, setIsPageVisible] = useState(false);

  const isLegalPage = useMemo(() => legalRoutes.has(currentPath), [currentPath]);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(normalizePath(window.location.pathname));
    const handleLinkClick = (event) => {
      const link = event.target.closest('a[href]');
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      const nextPath = normalizePath(url.pathname);
      if (nextPath !== currentPath) {
        window.history.pushState({}, '', nextPath);
        handleRouteChange();
      } else {
        window.dispatchEvent(new Event('medigenix:navigate'));
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [currentPath]);

  useEffect(() => {
    setIsPageVisible(false);
    const timer = window.setTimeout(() => setIsPageVisible(true), 30);
    return () => window.clearTimeout(timer);
  }, [currentPath]);

  useEffect(() => {
    if (isLegalPage) return;

    const scrollToCurrentSection = () => {
      const sectionId = routeSections[currentPath] || 'home';
      const targetElement = document.getElementById(sectionId);

      if (sectionId === 'home' || !targetElement) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    requestAnimationFrame(scrollToCurrentSection);
    window.addEventListener('medigenix:navigate', scrollToCurrentSection);
    return () => window.removeEventListener('medigenix:navigate', scrollToCurrentSection);
  }, [currentPath, isLegalPage]);

  useEffect(() => {
    if (isLegalPage) {
      document.title = `Legal Information | ${config?.businessName || 'MEDIGENIX PHARMA'}`;
    } else {
      document.title = config?.seo?.title || config?.businessName || 'Pharmacy';
    }

    const descriptionContent = config?.seo?.description || '';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptionContent);

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
      <Navbar />

      <div className={`flex-grow page-transition ${isPageVisible ? 'page-transition-entered' : ''}`}>
        {isLegalPage ? (
          <LegalPage currentPath={currentPath} />
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
