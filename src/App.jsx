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
import StickyContactAffordance from './components/StickyContactAffordance';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BrandIntroSplash from './components/BrandIntroSplash';

// Dedicated Standalone Pages
import WhoWeArePage from './pages/WhoWeArePage';
import WhyUsPage from './pages/WhyUsPage';
import ServicesPage from './pages/ServicesPage';
import EngagementModelPage from './pages/EngagementModelPage';
import WhoWeServePage from './pages/WhoWeServePage';
import CommercialModelsPage from './pages/CommercialModelsPage';

function App() {
  const parseRouteFromHash = () => {
    if (typeof window === 'undefined') return { page: 'home', serviceId: 'gov-relations' };

    const hash = window.location.hash.toLowerCase();
    if (hash === '#contact' || hash === '#/contact' || hash === '#contact-page') {
      return { page: 'contact', serviceId: 'gov-relations' };
    }
    if (hash === '#/who-we-are' || hash === '#about' || hash === '#who-we-are') {
      return { page: 'who-we-are', serviceId: 'gov-relations' };
    }
    if (hash === '#/why-us' || hash === '#why-us') {
      return { page: 'why-us', serviceId: 'gov-relations' };
    }
    if (hash === '#/services' || hash === '#services') {
      return { page: 'services', serviceId: 'gov-relations' };
    }
    if (hash === '#/engagement-model' || hash === '#engagement-model') {
      return { page: 'engagement-model', serviceId: 'gov-relations' };
    }
    if (hash === '#/who-we-serve' || hash === '#who-we-serve') {
      return { page: 'who-we-serve', serviceId: 'gov-relations' };
    }
    if (hash === '#/commercial-models' || hash === '#models' || hash === '#commercial-models') {
      return { page: 'commercial-models', serviceId: 'gov-relations' };
    }
    if (hash.startsWith('#service/') || hash.startsWith('#/service/')) {
      const sId = hash.replace('#service/', '').replace('#/service/', '');
      return { page: 'service-detail', serviceId: sId || 'gov-relations' };
    }
    return { page: 'home', serviceId: 'gov-relations' };
  };

  const initialRoute = parseRouteFromHash();
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState(initialRoute.serviceId);

  useEffect(() => {
    const handleHashChange = () => {
      const route = parseRouteFromHash();
      setCurrentPage(route.page);
      setSelectedServiceId(route.serviceId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#/${pageId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
    window.location.hash = `#/service/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] selection:bg-[#2D5A54] selection:text-white relative agency-bg-pattern">
      {/* Burson-Style Full-Screen Brand Intro/Splash Animation (First Visit Only) */}
      <BrandIntroSplash />

      {/* Dynamic Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Header with Exact Multi-Page Navigation Handlers */}
      <Navbar 
        currentPage={currentPage} 
        onNavigatePage={navigateToPage}
        onNavigateContact={() => navigateToPage('contact')}
        onNavigateHome={() => navigateToPage('home')}
      />

      {/* Standalone Page Routing Switch */}
      <main>
        {currentPage === 'who-we-are' ? (
          <WhoWeArePage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'why-us' ? (
          <WhyUsPage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateService={navigateToService}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'engagement-model' ? (
          <EngagementModelPage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'who-we-serve' ? (
          <WhoWeServePage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'commercial-models' ? (
          <CommercialModelsPage 
            onNavigateContact={() => navigateToPage('contact')}
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage 
            onNavigateHome={() => navigateToPage('home')}
          />
        ) : currentPage === 'service-detail' ? (
          <ServiceDetailPage 
            serviceId={selectedServiceId}
            onNavigateHome={() => navigateToPage('services')}
            onNavigateContact={() => navigateToPage('contact')}
            onSelectService={(sId) => navigateToService(sId)}
          />
        ) : (
          /* Home Hub Overview Page */
          <div>
            {/* 1. Hero */}
            <Hero 
              onNavigateContact={() => navigateToPage('contact')}
              onNavigateService={navigateToService}
            />

            {/* 2. Regional Press & Broadcast Wire Feed */}
            <Ticker />

            {/* 3. Who We Are */}
            <WhoWeAre onNavigateContact={() => navigateToPage('contact')} />

            {/* 4. Why Global Aadhar */}
            <WhyGlobalAadhar onNavigateContact={() => navigateToPage('contact')} />

            {/* 5. Our Six Core Services */}
            <Services 
              onNavigateContact={() => navigateToPage('contact')} 
              onNavigateService={navigateToService}
            />

            {/* 6. How We Work */}
            <ClientEngagementModel onNavigateContact={() => navigateToPage('contact')} />

            {/* 7. Proven Track Record & Regional Case Studies */}
            <CaseStudies onNavigateContact={() => navigateToPage('contact')} />

            {/* 8. Interactive Campaign Scope & PR ROI Estimator */}
            <RoiCalculator onNavigateContact={() => navigateToPage('contact')} />

            {/* 9. Who We Serve */}
            <WhoWeServe onNavigateContact={() => navigateToPage('contact')} />

            {/* 10. Why Partner With Global Aadhar */}
            <WhyPartner onNavigateContact={() => navigateToPage('contact')} />

            {/* 11. Engagement Models & Retainers */}
            <EngagementModels onNavigateContact={() => navigateToPage('contact')} />

            {/* 12. Full-Bleed Dark Ink CTA Band */}
            <Contact onNavigateContact={() => navigateToPage('contact')} />
          </div>
        )}
      </main>

      {/* Footer with Navigation Handlers */}
      <Footer 
        currentPage={currentPage} 
        onNavigatePage={navigateToPage}
        onNavigateContact={() => navigateToPage('contact')}
        onNavigateHome={() => navigateToPage('home')}
      />

      {/* Media Mantra Sticky Contact Affordance (WhatsApp / Direct Phone) */}
      <StickyContactAffordance onNavigateContact={() => navigateToPage('contact')} />
    </div>
  );
}

export default App;
