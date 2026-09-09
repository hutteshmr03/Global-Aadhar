import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WhoWeAre from './components/WhoWeAre';
import WhyGlobalAadhar from './components/WhyGlobalAadhar';
import Services from './components/Services';
import ServiceDetailPage from './components/ServiceDetailPage';
import CaseStudies from './components/CaseStudies';
import RoiCalculator from './components/RoiCalculator';
import ClientEngagementModel from './components/ClientEngagementModel';
import WhoWeServe from './components/WhoWeServe';
import EngagementModels from './components/EngagementModels';
import WhyPartner from './components/WhyPartner';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash === '#contact' || hash === '#/contact' || hash === '#contact-page' || path === '/contact') {
        return 'contact';
      }
      if (hash.startsWith('#service/')) {
        return 'service-detail';
      }
    }
    return 'home';
  });

  const [selectedServiceId, setSelectedServiceId] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#service/')) {
        return hash.replace('#service/', '');
      }
    }
    return 'gov-relations';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#contact' || hash === '#/contact' || hash === '#contact-page') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#service/')) {
        const sId = hash.replace('#service/', '');
        setSelectedServiceId(sId || 'gov-relations');
        setCurrentPage('service-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, sectionId = null) => {
    if (page === 'contact') {
      setCurrentPage('contact');
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'home') {
      setCurrentPage('home');
      if (sectionId) {
        window.location.hash = sectionId;
        setTimeout(() => {
          const el = document.getElementById(sectionId.replace('#', ''));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navigateToService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
    window.location.hash = `#service/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] selection:bg-[#2D5A54] selection:text-white">
      {/* Sticky Header with Navigation Handlers */}
      <Navbar 
        currentPage={currentPage} 
        onNavigateContact={() => navigateTo('contact')}
        onNavigateHome={() => navigateTo('home')}
        onNavigateSection={(secId) => navigateTo('home', secId)}
      />

      {/* Conditional Page Rendering */}
      {currentPage === 'contact' ? (
        <main>
          <ContactPage 
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'service-detail' ? (
        <main>
          <ServiceDetailPage 
            serviceId={selectedServiceId}
            onNavigateHome={() => navigateTo('home', '#services')}
            onNavigateContact={() => navigateTo('contact')}
            onSelectService={(sId) => navigateToService(sId)}
          />
        </main>
      ) : (
        <main>
          {/* 1. Hero */}
          <Hero onNavigateContact={() => navigateTo('contact')} />

          {/* 2. Regional Press & Broadcast Wire Feed */}
          <Ticker />

          {/* 3. Who We Are */}
          <WhoWeAre onNavigateContact={() => navigateTo('contact')} />

          {/* 4. Why Global Aadhar */}
          <WhyGlobalAadhar onNavigateContact={() => navigateTo('contact')} />

          {/* 5. Our Six Core Services */}
          <Services 
            onNavigateContact={() => navigateTo('contact')} 
            onNavigateService={(sId) => navigateToService(sId)}
          />

          {/* 6. Proven Track Record & Regional Case Studies */}
          <CaseStudies onNavigateContact={() => navigateTo('contact')} />

          {/* 7. Interactive Campaign Scope & PR ROI Estimator */}
          <RoiCalculator onNavigateContact={() => navigateTo('contact')} />

          {/* 8. Integrated Client Engagement Model */}
          <ClientEngagementModel onNavigateContact={() => navigateTo('contact')} />

          {/* 9. Who We Serve */}
          <WhoWeServe onNavigateContact={() => navigateTo('contact')} />

          {/* 10. Engagement Models & Retainers */}
          <EngagementModels onNavigateContact={() => navigateTo('contact')} />

          {/* 11. Why Partner With Global Aadhar */}
          <WhyPartner onNavigateContact={() => navigateTo('contact')} />

          {/* 12. Contact / Closing Slide */}
          <Contact onNavigateContact={() => navigateTo('contact')} />
        </main>
      )}

      {/* Footer with Navigation Handlers */}
      <Footer 
        currentPage={currentPage}
        onNavigateContact={() => navigateTo('contact')}
        onNavigateHome={() => navigateTo('home')}
        onNavigateSection={(secId) => navigateTo('home', secId)}
      />
    </div>
  );
}

export default App;
