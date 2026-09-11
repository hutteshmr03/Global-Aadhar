import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { coreServicesContent } from '../data/brandContent';
import Services from '../components/Services';

export default function ServicesPage({ onNavigateContact, onNavigateService, onNavigateHome }) {
  return (
    <div className="pt-28 pb-20 bg-[#E5E3DE] min-h-screen text-[#2B2B2B]">
      <div className="deck-container space-y-10 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-deck-body font-bold text-[#555555] uppercase tracking-wider">
          <button 
            onClick={onNavigateHome} 
            className="text-[#2D5A54] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#2B2B2B]">Core Services</span>
        </div>

        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>FULL-SPECTRUM COMMUNICATIONS SUITE</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            OUR SIX CORE SERVICES
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            {coreServicesContent.overviewIntro}
          </p>
        </motion.div>

        {/* Unified Services Component with 6 Core Cards, Events Lifecycle, and 4K Video Player */}
        <Services 
          onNavigateContact={onNavigateContact}
          onNavigateService={onNavigateService}
        />

        {/* Bottom CTA Consultation Band */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A332F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-deck-headline text-2xl sm:text-3xl text-white">
              Need a Tailored Communications Framework?
            </h3>
            <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] max-w-xl">
              From crisis PR holding statements to large-scale broadcast launches, let's design an integrated strategy for your brand.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
