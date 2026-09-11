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
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D5D1C8]/70">
                    <div className="w-10 h-10 rounded-2xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-all duration-300 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-deck-headline text-sm text-[#555555] group-hover:text-[#2D5A54] transition-colors">
                      {adv.number}
                    </span>
                  </div>

                  <h3 className="font-deck-headline text-xl text-[#2D5A54] tracking-tight leading-snug mb-1">
                    {adv.title}
                  </h3>
                  <div className="text-[11px] font-deck-body font-bold text-[#555555] uppercase tracking-wider mb-3">
                    {adv.tagline}
                  </div>

                  <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D5D1C8]/70 flex items-center justify-between text-xs font-bold text-[#2D5A54] font-deck-body">
                  <span>Core Capability</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Burson-Style Editorial Deep-Dives */}
        <div className="space-y-10 pt-4">
          <div className="border-b border-[#D5D1C8] pb-3">
            <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Partnership Architecture
            </span>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
              WHY PARTNER WITH GLOBAL AADHAR
            </h2>
          </div>

          <div className="space-y-12">
            {editorialStories.map((story, idx) => {
              const isImageRight = story.imagePosition === "right";

              return (
                <motion.div
                  key={story.headline}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`lg:col-span-6 space-y-5 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider">
                      {story.tag}
                    </div>

                    <h3 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54] tracking-tight leading-tight">
                      {story.headline}
                    </h3>

                    <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                      {story.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-[#D5D1C8]/80">
                      {story.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                          <CheckCircle2 className="w-4 h-4 text-[#2D5A54] shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onNavigateContact}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#2D5A54] hover:text-[#23413C] font-deck-body uppercase tracking-wider group cursor-pointer"
                      >
                        <span>Engage Strategic Retainer</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#D5D1C8] h-64 sm:h-80 lg:h-96 group">
                      <img
                        src={story.image}
                        alt={story.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/80 via-transparent to-black/20"></div>
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
