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

        {/* Burson-Style 6-Point Expertise Grid (Clean, Restrained Whitespace, Confident Labels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D5D1C8]/60">
                    <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-all duration-300 flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-deck-headline text-xs text-[#555555] group-hover:text-[#2D5A54] transition-colors">
                      {adv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54] tracking-tight leading-snug mb-1">
                    {adv.title}
                  </h3>
                  <div className="text-[11px] font-deck-body font-bold text-[#555555] uppercase tracking-wider mb-3">
                    {adv.tagline}
                  </div>

                  {/* Editorial Body */}
                  <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Bottom Detail Link */}
                <div className="pt-4 mt-4 border-t border-[#D5D1C8]/60 flex items-center justify-between text-xs font-bold text-[#2D5A54] font-deck-body">
                  <span>Strategic Capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
