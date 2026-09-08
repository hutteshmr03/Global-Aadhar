import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhyGlobalAadhar from './components/WhyGlobalAadhar';
import Services from './components/Services';
import ClientEngagementModel from './components/ClientEngagementModel';
import WhoWeServe from './components/WhoWeServe';
import EngagementModels from './components/EngagementModels';
import WhyPartner from './components/WhyPartner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] selection:bg-[#2D5A54] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Pitch Deck Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Who We Are */}
        <WhoWeAre />

        {/* 3. Why Global Aadhar */}
        <WhyGlobalAadhar />

        {/* 4. Our Six Core Services */}
        <Services />

        {/* 5. Integrated Client Engagement Model */}
        <ClientEngagementModel />

        {/* 6. Who We Serve */}
        <WhoWeServe />

        {/* 7. Engagement Models */}
        <EngagementModels />

        {/* 8. Why Partner With Global Aadhar */}
        <WhyPartner />

        {/* 9. Contact / Closing */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
