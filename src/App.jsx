import React, { useEffect } from 'react';
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
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { config } from './config';

function App() {
  useEffect(() => {
    // Set page title
    document.title = config.seo.title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.seo.description;
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: config.seo.title },
      { property: 'og:description', content: config.seo.description },
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
  }, []);

  return (
    <div className="min-h-screen bg-light-off-white">
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
