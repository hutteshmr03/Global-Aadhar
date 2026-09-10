import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, MessageSquare, PhoneCall } from 'lucide-react';
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

  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBar(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] selection:bg-[#2D5A54] selection:text-white relative">
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

      {/* Floating Speed Dial & Back to Top Widget */}
      {showFloatingBar && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 animate-fade-in">
          <button
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2D5A54] text-white hover:bg-[#23413C] font-deck-body font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer ring-2 ring-[#EDEBE7]"
            aria-label="Book Consultation"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 15-Min Briefing</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#EDEBE7] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white border border-[#D5D1C8] flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer ring-2 ring-white/80"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
