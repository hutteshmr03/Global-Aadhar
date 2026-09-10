import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, User, ArrowUpRight, ShieldCheck, Award, Radio, Clock, Sparkles } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

const heroHeadlines = [
  { primary: 'BUILDING TRUST.', secondary: 'CREATING IMPACT.' },
  { primary: 'AMPLIFYING REACH.', secondary: 'CONNECTING OPPORTUNITIES.' },
  { primary: 'SHAPING NARRATIVES.', secondary: 'DELIVERING VALUE.' },
  { primary: 'INSPIRING CONFIDENCE.', secondary: 'DRIVING CHANGE.' }
];

const credentialsStats = [
  { label: 'Strategic Leadership', value: '15+ Years', icon: Award },
  { label: 'Media & Press Outlets', value: '450+ Wires', icon: Radio },
  { label: 'Sentiment Retention', value: '98.5%', icon: ShieldCheck },
  { label: 'Crisis War Room Desk', value: '24/7 Panjim', icon: Clock }
];

export default function Hero({ onNavigateContact }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentHeadline = heroHeadlines[headlineIndex];

  return (
    <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-[#E5E3DE]">
      <div className="deck-container">
        {/* Slide Header Bar */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            SLIDE 01 • EXECUTIVE STRATEGIC BRIEF
          </div>
        </div>

        {/* Main Deck Hero Card */}
        <div className="relative min-w-0 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2D5A54]/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2D5A54]/5 blur-3xl pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 space-y-6 sm:space-y-7"
          >
            {/* Top Brand Stack */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-b border-[#D5D1C8]/80 pb-4">
              <h1 className="min-w-0 font-deck-headline text-3xl sm:text-4xl lg:text-5xl text-[#2D5A54] tracking-tight leading-tight">
                GLOBAL AADHAR
              </h1>
              <span className="min-w-0 font-deck-headline text-sm sm:text-base lg:text-lg text-[#2D5A54] tracking-normal sm:border-l-2 sm:border-[#D5D1C8] sm:pl-4">
                STRATEGIC COMMUNICATIONS
              </span>
            </div>

            {/* Impact Headline Cycler & Subtext */}
            <div className="space-y-3.5 max-w-3xl min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="space-y-1"
                >
                  <h2 className="font-deck-headline text-2xl sm:text-3xl lg:text-4xl text-[#2D5A54] tracking-tight leading-snug">
                    {currentHeadline.primary} <br />
                    <span className="text-[#23413C] underline decoration-[#2D5A54] decoration-2 sm:decoration-4 underline-offset-6">
                      {currentHeadline.secondary}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>

              <p className="font-deck-body text-xs sm:text-sm lg:text-base text-[#2B2B2B] leading-relaxed pt-1 max-w-2xl">
                A Goa-based Public Relations and Strategic Communications company delivering integrated media, stakeholder engagement, and communications solutions that connect opportunities and drive measurable impact.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onNavigateContact) {
                    e.preventDefault();
                    onNavigateContact();
                  }
                }}
                className="btn-primary-teal text-xs px-6 py-3 shadow-md cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="btn-secondary-outline text-xs px-6 py-3"
              >
                <span>Explore Core Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Executive Credentials & Stats Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {credentialsStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] flex flex-col justify-between shadow-2xs hover:border-[#2D5A54] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group/stat"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="font-deck-body text-[10px] font-bold text-[#555555] group-hover/stat:text-[#2D5A54] uppercase tracking-wider transition-colors">
                        {stat.label}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center shrink-0 group-hover/stat:bg-[#2D5A54] group-hover/stat:text-white transition-colors duration-200">
                        <StatIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="font-deck-headline text-base sm:text-lg text-[#2D5A54]">
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Deck Slide Footer Metadata Line */}
            <div className="pt-5 border-t border-[#D5D1C8]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-deck-body text-xs font-semibold text-[#555555]">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span>Presented by: <strong className="text-[#2B2B2B]">{brandMeta.presentedBy}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span className="text-[#2B2B2B] font-bold">{brandMeta.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
