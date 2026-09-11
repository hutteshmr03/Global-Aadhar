import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, Award, Radio, MapPin, User } from 'lucide-react';
import { brandMeta } from '../data/brandContent';
import AnimatedCounter from './AnimatedCounter';

const heroHeadlines = [
  { primary: 'BUILDING TRUST.', secondary: 'CREATING IMPACT.' },
  { primary: 'AMPLIFYING REACH.', secondary: 'CONNECTING OPPORTUNITIES.' },
  { primary: 'SHAPING NARRATIVES.', secondary: 'DELIVERING VALUE.' },
  { primary: 'INSPIRING CONFIDENCE.', secondary: 'DRIVING CHANGE.' }
];

const credentialsStats = [
  { label: 'Strategic Leadership', value: '15+ Years', icon: Award, sub: 'Western India Focus' },
  { label: 'Media & Press Outlets', value: '450+ Wires', icon: Radio, sub: 'Daily Editorial Access' },
  { label: 'Sentiment Retention', value: '98.5%', icon: ShieldCheck, sub: 'Audited Brand Trust' },
  { label: 'Headquarters Bureau', value: 'Panjim, Goa', icon: MapPin, sub: 'Municipal Garden Desk' }
];

export default function Hero({ onNavigateContact, onNavigateService }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentHeadline = heroHeadlines[headlineIndex];

  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 overflow-hidden bg-[#E5E3DE]">
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2D5A54]/12 blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>

      <div className="deck-container relative z-10">
        {/* Top Eyebrow Section Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="slide-header-bar"
        >
          <div className="flex items-center gap-2.5 font-deck-body font-bold text-[#2D5A54]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D5A54] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2D5A54]"></span>
            </span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            STRATEGIC PR & COMMUNICATIONS • GOA & WESTERN INDIA
          </div>
        </motion.div>

        {/* Hero Card Container with High-Visibility Background & Kinetic Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-w-0 p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(45,90,84,0.25)] transition-all duration-500 overflow-hidden group"
        >
          {/* Enhanced Visible Architectural Background with Smooth Zoom Animation */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
              alt="Corporate Strategic Infrastructure"
              className="w-full h-full object-cover object-right sm:object-center opacity-70 sm:opacity-80 group-hover:opacity-90 contrast-110 brightness-[0.98] scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Elegant Asymmetric Gradient Shield for 100% Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EDEBE7] via-[#EDEBE7]/80 to-[#EDEBE7]/25 sm:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#EDEBE7] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-8 lg:space-y-10">
            {/* Brand Title Bar */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#D5D1C8]/90 pb-5 backdrop-blur-[2px]">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <h1 className="font-deck-headline text-3xl sm:text-4xl lg:text-5xl text-[#2D5A54] tracking-tight leading-none drop-shadow-xs">
                  GLOBAL AADHAR
                </h1>
                <span className="font-deck-body text-xs sm:text-sm font-bold text-[#555555] tracking-[0.16em] uppercase sm:border-l-2 sm:border-[#D5D1C8] sm:pl-4">
                  STRATEGIC COMMUNICATIONS
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#2D5A54]/20 text-xs font-deck-body font-bold text-[#2D5A54] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span>Panjim, Goa Bureau</span>
              </div>
            </div>

            {/* Kinetic Dynamic Display Headline */}
            <div className="space-y-4 max-w-4xl min-h-[150px] sm:min-h-[170px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 22, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -22, filter: 'blur(5px)' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2"
                >
                  <h2 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08] drop-shadow-xs">
                    {currentHeadline.primary} <br />
                    <span className="text-[#2D5A54] underline decoration-[#2D5A54]/40 decoration-4 underline-offset-8">
                      {currentHeadline.secondary}
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>

              <p className="font-deck-body text-sm sm:text-base lg:text-lg text-[#2B2B2B] font-medium leading-relaxed max-w-3xl pt-2">
                A Goa-based Public Relations and Strategic Communications firm delivering integrated media relations, stakeholder engagement, crisis positioning, and digital transformations that connect opportunities and deliver measurable impact.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
                className="btn-primary-teal text-xs sm:text-sm px-7 py-3.5 shadow-lg cursor-pointer group hover:scale-[1.03] active:scale-[0.98] transition-all relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let's Build Impact Together</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#2D5A54] text-[#2D5A54] hover:bg-[#2D5A54] hover:text-white font-deck-body text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer group hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore Core Services</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Animated Interactive Credentials & Stat Strip with Glassmorphism */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {credentialsStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 sm:p-5 rounded-2xl bg-[#EDEBE7]/90 backdrop-blur-md border border-[#D5D1C8] flex flex-col justify-between shadow-xs hover:border-[#2D5A54] hover:shadow-xl transition-all duration-300 group/stat relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#2D5A54]/5 rounded-full blur-xl group-hover/stat:bg-[#2D5A54]/15 transition-all"></div>

                    <div className="relative z-10 flex items-center justify-between gap-1 mb-2">
                      <span className="font-deck-body text-[10.5px] font-bold text-[#555555] group-hover/stat:text-[#2D5A54] uppercase tracking-wider transition-colors">
                        {stat.label}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center shrink-0 group-hover/stat:bg-[#2D5A54] group-hover/stat:text-white transition-all duration-300 shadow-2xs">
                        <StatIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10 font-deck-headline text-xl sm:text-2xl text-[#2D5A54] tracking-tight">
                      <AnimatedCounter value={stat.value} />
                    </div>

                    <div className="relative z-10 text-[10px] font-deck-body font-semibold text-[#666666] mt-1">
                      {stat.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Executive Partner Leadership Note + Live Media Desk Indicator */}
            <div className="pt-6 border-t border-[#D5D1C8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-deck-body text-xs font-semibold text-[#555555]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#2D5A54]" />
                <span>Executive Leadership: <strong className="text-[#1A332F]">{brandMeta.presentedBy}</strong></span>
              </div>

              {/* Live Audio Equalizer & Desk Status */}
              <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D5D1C8] shadow-2xs">
                <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                  <span className="w-0.5 bg-emerald-600 rounded-full wave-bar-1"></span>
                  <span className="w-0.5 bg-emerald-600 rounded-full wave-bar-2"></span>
                  <span className="w-0.5 bg-emerald-600 rounded-full wave-bar-3"></span>
                  <span className="w-0.5 bg-emerald-600 rounded-full wave-bar-4"></span>
                </div>
                <span className="text-[#2B2B2B] font-bold">Active 24/7 Strategic Media Desk • Panjim</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
