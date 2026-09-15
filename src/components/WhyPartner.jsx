import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, ShieldCheck, Cpu, Sparkles, ChevronRight } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

const editorialStories = [
  {
    id: "01",
    tag: "SYNERGY & SCALE",
    title: "One Integrated Partner Replacing Fragmented Agencies",
    subheading: "One Command Center • Multi-Channel Execution",
    description: "Eliminate disjointed messaging between PR agencies, video production houses, and event coordinators. Global Aadhar unifies corporate PR, broadcast media production, and stakeholder relations under one cohesive command center.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Unified narrative across TV, print, and digital channels",
      "Streamlined coordination with zero agency friction",
      "Executive alignment with Panjim leadership"
    ],
    highlightStat: "100% Unified Control",
    icon: Layers,
    badgeColor: "bg-[#2D5A54]/10 text-[#2D5A54] border-[#2D5A54]/20"
  },
  {
    id: "02",
    tag: "REGIONAL AUTHORITY",
    title: "Unrivaled On-Ground Agility & Institutional Access",
    subheading: "Direct Editorial Desks • Government & Community Ties",
    description: "Our long-standing ties with Goa's editorial desks, government departments, industry associations, and grassroots community leaders enable rapid consensus, crisis mitigation, and credible institutional endorsement.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Direct line to regional editors & broadcast news bureaus",
      "Fast-track institutional & stakeholder dialogues",
      "Deep linguistic & cultural nuance (English, Konkani, Marathi)"
    ],
    highlightStat: "Pan-Goa Media Access",
    icon: ShieldCheck,
    badgeColor: "bg-[#1A332F]/10 text-[#1A332F] border-[#1A332F]/20"
  },
  {
    id: "03",
    tag: "TECH-POWERED FUTURE",
    title: "Strategic PR Augmented by Sumant Cloud Technology",
    subheading: "Custom Enterprise Software • Real-Time Dashboards",
    description: "We don't just write press releases — we build digital infrastructure. Through our technology arm, Sumant Cloud Ideas, we deliver custom document management systems, web applications, and analytics dashboards for your campaigns.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Custom E-DMS & CMMS enterprise systems",
      "Real-time stakeholder engagement tracking",
      "Automated compliance and impact reporting"
    ],
    highlightStat: "Sumant Cloud Stack",
    icon: Cpu,
    badgeColor: "bg-[#2D5A54]/10 text-[#2D5A54] border-[#2D5A54]/20"
  }
];

export default function WhyPartner({ onNavigateContact }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentStory = editorialStories[activeIndex];
  const IconComponent = currentStory.icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % editorialStories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + editorialStories.length) % editorialStories.length);
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="why-partner" className="deck-section bg-[#E5E3DE] relative scroll-mt-24 py-8 sm:py-12">
      <div className="deck-container space-y-5 lg:space-y-6">
        
        {/* Compact, High-Impact Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-[#D5D1C8]">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#2D5A54]/10 border border-[#2D5A54]/20 text-[#2D5A54] text-[11px] font-bold font-deck-body tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A54]"></span>
              <span>THE PARTNERSHIP ADVANTAGE</span>
            </div>
            <h2 className="font-deck-headline text-xl sm:text-2xl lg:text-3xl text-[#1A332F] font-black tracking-tight leading-tight">
              ONE INTEGRATED PARTNER FOR ALL YOUR COMMUNICATIONS NEEDS
            </h2>
            <p className="font-deck-body text-xs sm:text-[13px] text-[#4A5553] leading-relaxed max-w-2xl">
              Seamlessly coordinated under one roof for maximum credibility, speed, and measurable impact across Western India.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (onNavigateContact) onNavigateContact();
                else window.location.hash = '#contact';
              }}
              className="px-5 py-2.5 rounded-full bg-[#1A332F] hover:bg-[#2D5A54] text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>Engage Strategic Retainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Desktop-Optimized Pure White Showcase Card */}
        <div 
          className="relative bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border border-[#D5D1C8] shadow-[0_20px_50px_-15px_rgba(26,51,47,0.08),0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Top Accent in Forest Teal */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A332F] via-[#2D5A54] to-[#1A332F]"></div>

          {/* Active Story Content Grid */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              >
                {/* Left Column: Heading, Value Prop, Deliverable Micro-Cards */}
                <div className="lg:col-span-6 space-y-4">
                  
                  {/* Category Pill & Page Indicator */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold font-deck-body tracking-wider uppercase ${currentStory.badgeColor}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{currentStory.tag}</span>
                    </div>

                    <div className="text-xs font-mono font-bold text-[#6D7B78] flex items-center gap-1">
                      <span className="text-[#1A332F] text-sm font-bold">0{activeIndex + 1}</span>
                      <span>/</span>
                      <span>03</span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-deck-headline text-lg sm:text-2xl lg:text-[23px] text-[#1A332F] font-black tracking-tight leading-snug">
                    {currentStory.title}
                  </h3>

                  {/* Description */}
                  <p className="font-deck-body text-xs sm:text-[13px] text-[#45524F] leading-relaxed">
                    {currentStory.description}
                  </p>

                  {/* High Value Deliverables in Clean Micro-Cards */}
                  <div className="space-y-2 pt-1">
                    {currentStory.bullets.map((bullet, bIdx) => (
                      <div 
                        key={bIdx} 
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E8E5DC] text-xs font-deck-body font-semibold text-[#253331] hover:border-[#2D5A54]/40 hover:bg-[#F2EFE9] transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Affordance & Large Intuitive Desktop Page Switchers */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigateContact) onNavigateContact();
                        else window.location.hash = '#contact';
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A332F] hover:bg-[#2D5A54] text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
                    >
                      <span>Explore {currentStory.tag}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    {/* Prominent Page Prev/Next Controls */}
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Page"
                        className="h-9 px-3 rounded-full bg-[#F4F2EE] hover:bg-[#1A332F] text-[#1A332F] hover:text-white border border-[#DDD9CF] flex items-center gap-1 text-xs font-bold font-deck-body transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Prev</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Page"
                        className="h-9 px-3 rounded-full bg-[#F4F2EE] hover:bg-[#1A332F] text-[#1A332F] hover:text-white border border-[#DDD9CF] flex items-center gap-1 text-xs font-bold font-deck-body transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: High-Impact Photography with Proportional Desktop Height */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#D8D4CA] h-56 sm:h-72 lg:h-[340px] group bg-[#1A332F]">
                    <img
                      src={currentStory.image}
                      alt={currentStory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Deep gradient wash for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/85 via-transparent to-black/10"></div>

                    {/* Floating Bottom Status Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                      <div className="px-3 py-1.5 rounded-xl bg-[#1A332F]/90 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold tracking-wider text-white shadow-lg">
                        {currentStory.highlightStat}
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[10.5px] font-deck-body font-bold text-white">
                        <span>Page {currentStory.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}


