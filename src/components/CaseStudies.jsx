import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/mockData';
import { 
  ChevronLeft, ChevronRight, ArrowRight, X, Newspaper, 
  Briefcase, HeartHandshake, Building2, Cloud, CheckCircle2 
} from 'lucide-react';

const storyTabs = [
  { label: '01. CSR & Community', index: 0, icon: HeartHandshake },
  { label: '02. Pharma & Corporate', index: 1, icon: Building2 },
  { label: '03. Cloud & Digital PR', index: 2, icon: Cloud }
];

export default function CaseStudies({ onNavigateContact }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const totalStories = caseStudies.length; // 3 stories
  const activeCase = caseStudies[currentIndex] || caseStudies[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalStories - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalStories - 1 ? 0 : prev + 1));
  };

  const formattedPage = `0${currentIndex + 1} / 0${totalStories}`;

  return (
    <section id="case-studies" className="py-8 sm:py-12 lg:py-14 bg-[#E5E3DE] border-b border-[#D5D1C8] scroll-mt-28">
      <div className="deck-container space-y-6 sm:space-y-7">
        {/* Slide Header Bar */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>PROVEN TRACK RECORD & CASE STUDIES</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            REGIONAL IMPACT ARCHIVE • PAGE {formattedPage}
          </div>
        </div>

        {/* Section Heading & Interactive Story Switchers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A54]"></span>
              <span>Recent Client Stories (Page {formattedPage})</span>
            </div>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54] tracking-tight leading-tight">
              STRATEGIC PR CAMPAIGNS THAT DELIVERED MEASURABLE IMPACT
            </h2>
          </div>

          {/* Direct Story / Page Select Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {storyTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = currentIndex === tab.index;

              return (
                <button
                  key={tab.index}
                  type="button"
                  onClick={() => setCurrentIndex(tab.index)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-deck-body text-xs font-bold tracking-wide transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#2D5A54] text-white shadow-xs'
                      : 'bg-[#EDEBE7] text-[#2B2B2B] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-white'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CAPGEMINI-STYLE COMPACT PANORAMIC HERO SHOWCASE */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-[#1A332F] border border-[#2D5A54]/40 min-h-[380px] sm:min-h-[410px] lg:h-[430px] flex items-center">
          {/* Animated Panoramic Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeCase.image}
                alt={activeCase.headline}
                className="w-full h-full object-cover"
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/80 via-transparent to-black/30"></div>
            </motion.div>
          </AnimatePresence>

          {/* Left-Aligned Floating Compact Card (True Capgemini Fit) */}
          <div className="relative z-10 w-full max-w-xl lg:max-w-lg xl:max-w-xl m-4 sm:m-6 lg:m-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl border border-white/80 space-y-3.5"
              >
                {/* Eyebrow & Page Indicator Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A54] text-white font-deck-body text-[10px] font-bold uppercase tracking-wider">
                    Page {formattedPage}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10px] font-bold uppercase tracking-wider">
                    {activeCase.category.split('&')[0].trim()}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#EDEBE7] border border-[#D5D1C8] text-[#555555] font-deck-body text-[10px] font-semibold truncate max-w-[200px]">
                    {activeCase.client}
                  </span>
                </div>

                {/* Big Headline */}
                <h3 className="font-deck-headline text-lg sm:text-xl lg:text-2xl text-[#1A332F] tracking-tight leading-snug line-clamp-2">
                  {activeCase.headline}
                </h3>

                {/* Summary Description */}
                <p className="font-deck-body text-xs sm:text-sm text-[#444444] leading-relaxed line-clamp-3">
                  {activeCase.summary}
                </p>

                {/* Compact Highlights Strip */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {activeCase.metrics.slice(0, 2).map((m, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EDEBE7] border border-[#D5D1C8] text-xs font-bold font-deck-body text-[#2D5A54]">
                      <span className="font-deck-headline text-sm text-[#2D5A54]">{m.value}</span>
                      <span className="text-[10px] text-[#555555] font-semibold uppercase">{m.label}</span>
                    </span>
                  ))}
                  <span className="text-[10.5px] font-deck-body font-semibold text-[#666666]">
                    ✦ {activeCase.featuredIn.slice(0, 2).join(' • ')}
                  </span>
                </div>

                {/* Bottom Row: Read More Pill Button */}
                <div className="pt-2 border-t border-[#E5E3DE] flex items-center justify-between">
                  <span className="text-[11px] font-deck-body text-[#777777] font-semibold">
                    Full verified metrics & client review
                  </span>

                  <button
                    type="button"
                    onClick={() => setShowDetailModal(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border-2 border-[#2D5A54] text-[#2D5A54] hover:bg-[#2D5A54] hover:text-white font-deck-body text-xs font-bold transition-all shadow-xs cursor-pointer group shrink-0"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Pill Carousel Controls - Always Centered/Visible */}
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 z-30 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/90 shadow-2xl flex items-center gap-3.5 sm:gap-4 text-[#1A332F]">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous story"
              className="p-1 rounded-full hover:bg-black/10 active:scale-90 text-[#1A332F] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* 3 Pagination Dots */}
            <div className="flex items-center gap-2">
              {caseStudies.map((_, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to story page ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-3 h-3 bg-[#2D5A54] ring-2 ring-[#2D5A54]/40 scale-110'
                        : 'w-2.5 h-2.5 border-2 border-[#2D5A54]/60 hover:bg-[#2D5A54]/30'
                    }`}
                  />
                );
              })}
            </div>

            {/* Page Mention */}
            <span className="font-deck-body text-[11px] sm:text-xs font-bold text-[#2D5A54] tracking-wider pl-1 border-l border-[#D5D1C8]">
              {formattedPage}
            </span>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next story"
              className="p-1 rounded-full hover:bg-black/10 active:scale-90 text-[#1A332F] transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Detailed Story Modal */}
        <AnimatePresence>
          {showDetailModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl bg-[#EDEBE7] border border-[#2D5A54] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setShowDetailModal(false)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-[#2B2B2B] shadow-xs cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[#2D5A54] text-xs font-bold font-deck-body uppercase tracking-wider">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>Story {formattedPage} • {activeCase.client}</span>
                  </div>
                  <h3 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54] leading-snug">
                    {activeCase.headline}
                  </h3>
                </div>

                <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                  {activeCase.summary}
                </p>

                {/* Client Quote */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#E5E3DE] border-l-4 border-[#2D5A54] space-y-2 shadow-2xs">
                  <p className="font-deck-body text-xs sm:text-sm italic text-[#2B2B2B] font-medium leading-relaxed">
                    "{activeCase.quote}"
                  </p>
                  <div className="text-[11.5px] font-bold text-[#2D5A54] font-deck-body">
                    — {activeCase.author}
                  </div>
                </div>

                {/* Full Verified Outcomes Grid */}
                <div className="space-y-2">
                  <div className="font-deck-body text-xs font-bold text-[#2D5A54] uppercase tracking-wider">
                    Measurable Campaign Outcomes:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeCase.metrics.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#D5D1C8] text-center shadow-2xs">
                        <div className="font-deck-headline text-xl text-[#2D5A54]">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-bold text-[#555555] font-deck-body mt-1 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowDetailModal(false);
                      if (onNavigateContact) onNavigateContact();
                      else window.location.hash = '#contact';
                    }}
                    className="w-full btn-primary-teal text-xs py-3 justify-center shadow-md cursor-pointer"
                  >
                    <span>Initiate A Similar Campaign Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDetailModal(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#D5D1C8] text-[#555555] hover:bg-white font-deck-body text-xs font-bold transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
