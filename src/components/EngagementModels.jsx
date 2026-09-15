import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Target, 
  Award, 
  Share2, 
  Heart, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function EngagementModels({ onNavigateContact, onNavigateCommercialModels, onNavigatePage }) {
  const handleExploreClick = (e) => {
    if (e) e.preventDefault();
    if (onNavigateCommercialModels) {
      onNavigateCommercialModels();
    } else if (onNavigatePage) {
      onNavigatePage('commercial-models');
    } else {
      window.location.hash = '#/commercial-models';
    }
  };

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else if (onNavigatePage) {
      onNavigatePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  const strategicPrPoints = [
    {
      title: "Monthly PR Retainer",
      tag: "Ongoing",
      description: "Dedicated Panjim PR account lead, daily media monitoring, monthly press cycles & 24/7 crisis advisory."
    },
    {
      title: "Project-Based Campaigns",
      tag: "30–90 Days",
      description: "Time-bound communications for product launches, milestones, policy announcements & editorial wraps."
    },
    {
      title: "Event PR Packages",
      tag: "Turnkey",
      description: "AV & stage staging, VIP press room management, live regional broadcasting & post-event dossiers."
    }
  ];

  const commercialTechPoints = [
    {
      title: "Digital & Social Retainer",
      tag: "Digital",
      description: "Executive LinkedIn thought leadership, SEO/SERP authority, digital press kits & real-time analytics."
    },
    {
      title: "CSR Communication Programs",
      tag: "Impact",
      description: "On-ground documentary storytelling, beneficiary reels, and statutory ESG impact dossiers for funders."
    },
    {
      title: "Integrated PR + Technology",
      tag: "Sumant Cloud",
      description: "Unified storytelling with custom Sumant Cloud software portals, CRM automations & single-SLA delivery."
    }
  ];

  return (
    <section id="models" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-6 sm:space-y-8">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            ENGAGEMENT MODELS • COMMERCIAL ARCHITECTURE
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2 max-w-2xl"
          >
            <div className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Flexible Collaboration Frameworks
            </div>
            <h2 className="deck-section-title text-2xl sm:text-3xl">
              FLEXIBLE ENGAGEMENT & COMMERCIAL STRUCTURES
            </h2>
            <p className="deck-section-intro text-xs sm:text-sm">
              Scalable engagement formats designed to match your organizational scale — from retained advisory to integrated PR-tech suites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="shrink-0"
          >
            <button
              type="button"
              onClick={handleExploreClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D5A54] hover:bg-[#1A332F] text-white font-deck-body text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>Explore Commercial Models</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 2 Compact & Clean Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Pillar 1: Strategic PR Engagement Models */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#D5D1C8]">
                <h3 className="font-deck-body font-extrabold text-base sm:text-lg text-[#1A332F] tracking-tight uppercase">
                  1. Strategic PR Engagement Models
                </h3>
                <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Layers className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Clean Streamlined Points List (No nested cards) */}
              <div className="space-y-3.5 py-1">
                {strategicPrPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-deck-body font-bold text-[13.5px] sm:text-sm text-[#1A332F]">
                          {item.title}
                        </span>
                        <span className="text-[9.5px] font-deck-body font-semibold text-[#2D5A54] bg-[#2D5A54]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                      <p className="font-deck-body text-[12.5px] text-[#4A4A4A] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <div className="pt-4 mt-4 border-t border-[#D5D1C8]">
              <button
                type="button"
                onClick={handleExploreClick}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group/btn"
              >
                <span>View PR Retainer Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Pillar 2: Commercial & Tech Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#D5D1C8]">
                <h3 className="font-deck-body font-extrabold text-base sm:text-lg text-[#1A332F] tracking-tight uppercase">
                  2. Commercial & Tech Engagements
                </h3>
                <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Clean Streamlined Points List (No nested cards) */}
              <div className="space-y-3.5 py-1">
                {commercialTechPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-deck-body font-bold text-[13.5px] sm:text-sm text-[#1A332F]">
                          {item.title}
                        </span>
                        <span className="text-[9.5px] font-deck-body font-semibold text-[#2D5A54] bg-[#2D5A54]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                      <p className="font-deck-body text-[12.5px] text-[#4A4A4A] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <div className="pt-4 mt-4 border-t border-[#D5D1C8]">
              <button
                type="button"
                onClick={handleExploreClick}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group/btn"
              >
                <span>View Tech & Commercial Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Compact Explore & Consultation Hub */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#1A332F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-deck-headline text-base sm:text-lg text-white">
              Need detailed retainer scopes, SLA deliverables, or ROI estimates?
            </h4>
            <p className="font-deck-body text-xs text-[#D5D1C8]">
              Explore our full 6-tier commercial structure, comparison matrices, and interactive PR ROI calculator.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1A332F] hover:bg-[#E5E3DE] font-deck-body text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:scale-105"
            >
              <span>Explore Commercial Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/30 hover:border-white text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all cursor-pointer hover:bg-white/10"
            >
              <span>Contact</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
