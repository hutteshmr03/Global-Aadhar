import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Compass, Layers, Cloud, BarChart3, ArrowUpRight } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

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

export default function WhyGlobalAadhar({ onNavigateContact }) {
  return (
    <section id="why-us" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            WHY GLOBAL AADHAR • 6 CORE ADVANTAGES
          </div>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-3xl"
        >
          <div className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
            Our Distinct Strategic Edge
          </div>
          <h2 className="deck-section-title">
            SIX PROVEN ADVANTAGES POWERING YOUR BRAND
          </h2>
          <p className="deck-section-intro">
            Consolidating multi-channel PR access, institutional state networks, and enterprise technology under one agile delivery model across Western India.
          </p>
        </motion.div>

        {/* 6-Point Expertise Grid with High-Contrast Light Beveled Cards */}
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
      </div>
    </section>
  );
}
