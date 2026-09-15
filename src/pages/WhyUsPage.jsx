import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Compass, Layers, Cloud, BarChart3, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { whyGlobalAadharContent, whyPartnerContent, brandMeta } from '../data/brandContent';

const advantages = [
  {
    number: "01",
    icon: Radio,
    title: "Media Access",
    tagline: "Direct Broadcast & Print Ties",
    description: "Direct editorial relationships with television news networks, digital publishers, and leading daily print publications across Goa and Western India."
  },
  {
    number: "02",
    icon: Users,
    title: "Stakeholder Relationships",
    tagline: "Institutional & Community Reach",
    description: "Deep-rooted networks across government departments, state bodies, NGOs, and community leaders ensuring faster coordination and credible endorsements."
  },
  {
    number: "03",
    icon: Compass,
    title: "Local Knowledge & Execution",
    tagline: "On-Ground Regional Agility",
    description: "Unrivalled regional cultural understanding, linguistic nuance (English, Konkani, Marathi), and on-ground deployment capabilities."
  },
  {
    number: "04",
    icon: Layers,
    title: "Integrated Communications",
    tagline: "One Unified Strategy",
    description: "A single synchronized strategy tying PR narrative, media production, experiential events, digital marketing, and software systems."
  },
  {
    number: "05",
    icon: Cloud,
    title: "Technology Support via Sumant Cloud",
    tagline: "Enterprise Software & Automation",
    description: "Dedicated technology capabilities powering web platforms, workflow automation, CRM integrations, and digital transformation dashboards."
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Measurable Impact",
    tagline: "Data-Driven ROI & Reporting",
    description: "Every campaign tracked with analytics, every CSR story documented with beneficiary proof, and every PR effort analytically reported."
  }
];

const editorialStories = [
  {
    tag: "SYNERGY & SCALE",
    headline: "One Integrated Partner Replacing Fragmented Agencies",
    description: "Eliminate disjointed messaging between PR agencies, video production houses, and event coordinators. Global Aadhar unifies corporate PR, broadcast media production, and stakeholder relations under one cohesive command center.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Unified narrative across TV, print, and digital channels",
      "Streamlined coordination with zero agency friction",
      "Executive alignment with Panjim leadership"
    ],
    imagePosition: "right"
  },
  {
    tag: "REGIONAL AUTHORITY",
    headline: "Unrivaled On-Ground Agility & Institutional Access",
    description: "Our long-standing ties with Goa's editorial desks, government departments, industry associations, and grassroots community leaders enable rapid consensus, crisis mitigation, and credible institutional endorsement.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Direct line to regional editors & broadcast news bureaus",
      "Fast-track institutional & stakeholder dialogues",
      "Deep linguistic & cultural nuance (English, Konkani, Marathi)"
    ],
    imagePosition: "left"
  },
  {
    tag: "TECH-POWERED FUTURE",
    headline: "Strategic PR Augmented by Sumant Cloud Technology",
    description: "We don't just write press releases — we build digital infrastructure. Through our technology arm, Sumant Cloud Ideas, we deliver custom document management systems, web applications, and analytics dashboards for your campaigns.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Custom E-DMS & CMMS enterprise systems",
      "Real-time stakeholder engagement tracking",
      "Automated compliance and impact reporting"
    ],
    imagePosition: "right"
  }
];

export default function WhyUsPage({ onNavigateContact, onNavigateHome }) {
  return (
    <div className="pt-28 pb-20 bg-[#E5E3DE] min-h-screen text-[#2B2B2B]">
      <div className="deck-container space-y-12 sm:space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-deck-body font-bold text-[#555555] uppercase tracking-wider">
          <button 
            onClick={onNavigateHome} 
            className="text-[#2D5A54] hover:underline cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#2B2B2B]">Why Us</span>
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
            <span>STRATEGIC COMPETITIVE EDGE</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            SIX PROVEN ADVANTAGES POWERING YOUR BRAND
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            {whyGlobalAadharContent.intro}
          </p>
        </motion.div>

        {/* 6 Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between h-full group overflow-hidden border border-[#D5D9E0] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(45,90,84,0.18)] hover:border-[#2D5A54]/50 transition-all duration-500 cursor-default"
                style={{
                  background: 'linear-gradient(180deg, #DDE1E7 0%, #EEF1F5 9%, #F9FAFB 24%, #FFFFFF 100%)',
                  boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), 0 4px 20px 0 rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Subtle ambient light bloom */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#2D5A54]/5 rounded-full blur-xl group-hover:bg-[#2D5A54]/10 group-hover:scale-125 transition-all duration-500 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  {/* Top Bar: Icon Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D8DCE4]">
                    <div className="w-10 h-10 rounded-2xl bg-white text-[#2D5A54] border border-[#D5D9E0] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#2D5A54] group-hover:text-white group-hover:border-[#2D5A54] group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-deck-headline text-xs font-bold text-[#2D5A54] bg-[#2D5A54]/10 border border-[#2D5A54]/15 px-2.5 py-1 rounded-full group-hover:bg-[#2D5A54] group-hover:text-white group-hover:border-[#2D5A54] transition-all duration-300">
                      {adv.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-start font-deck-headline text-lg sm:text-xl text-[#1A332F] font-bold tracking-tight leading-snug mb-1 group-hover:text-[#2D5A54] transition-colors">
                    {adv.title}
                  </h3>

                  {/* Tagline */}
                  <div className="min-h-[1.25rem] flex items-center text-[10.5px] font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider mb-3">
                    {adv.tagline}
                  </div>

                  {/* Editorial Body */}
                  <p className="font-deck-body text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architectural 3-Page Advantage Showcase in Pure White */}
        <div className="relative bg-white text-[#2B2B2B] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#D5D1C8] shadow-[0_25px_60px_-15px_rgba(26,51,47,0.08)] space-y-8">
          {/* Top Forest Teal Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A332F] via-[#2D5A54] to-[#1A332F]"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EAE7E0]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A54]/10 border border-[#2D5A54]/20 text-[#2D5A54] text-xs font-bold font-deck-body tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
                <span>PARTNERSHIP ARCHITECTURE</span>
              </div>
              <h2 className="font-deck-headline text-2xl sm:text-4xl text-[#1A332F] font-black tracking-tight">
                ONE INTEGRATED PARTNER FOR ALL YOUR COMMUNICATIONS NEEDS
              </h2>
            </div>
            
            <div className="shrink-0">
              <button
                type="button"
                onClick={onNavigateContact}
                className="px-6 py-3 rounded-full bg-[#1A332F] hover:bg-[#2D5A54] text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Engage Retainer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Interactive Stories */}
          <div className="space-y-12">
            {editorialStories.map((story, idx) => {
              const isImageRight = story.imagePosition === "right";

              return (
                <motion.div
                  key={story.headline}
                  id={`story-card-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-[#E2DFD6] shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`lg:col-span-6 space-y-5 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-xs font-bold uppercase tracking-wider border border-[#2D5A54]/20">
                      <span>0{idx + 1}</span>
                      <span>•</span>
                      <span>{story.tag}</span>
                    </div>

                    <h3 className="font-deck-headline text-2xl sm:text-3xl text-[#1A332F] font-black tracking-tight leading-tight">
                      {story.headline}
                    </h3>

                    <p className="font-deck-body text-xs sm:text-sm text-[#45524F] leading-relaxed">
                      {story.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {story.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8E5DC] text-xs sm:text-sm font-deck-body font-semibold text-[#253331]">
                          <CheckCircle2 className="w-4 h-4 text-[#2D5A54] shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onNavigateContact}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A332F] hover:bg-[#2D5A54] text-white text-xs font-bold font-deck-body uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
                      >
                        <span>Engage Strategic Retainer</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCD8CE] h-64 sm:h-80 lg:h-96 group bg-[#1A332F]">
                      <img
                        src={story.image}
                        alt={story.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/80 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A332F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-deck-headline text-2xl sm:text-3xl text-white">
              Experience the Global Aadhar Advantage
            </h3>
            <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] max-w-xl">
              Partner with a communications powerhouse that unifies PR strategy, editorial networks, and enterprise cloud solutions.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Consult Our Leadership</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
