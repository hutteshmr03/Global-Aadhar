import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

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

export default function WhyPartner({ onNavigateContact }) {
  return (
    <section id="why-partner" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-10 sm:space-y-14">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            WHY PARTNER • EDITORIAL PERSPECTIVE
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
            The Partnership Advantage
          </div>
          <h2 className="deck-section-title">
            ONE INTEGRATED PARTNER FOR ALL YOUR COMMUNICATIONS NEEDS
          </h2>
          <p className="deck-section-intro">
            Seamlessly coordinated under one roof for maximum credibility, speed, and measurable impact across Western India.
          </p>
        </motion.div>

        {/* Burson-Style Alternating Editorial Blocks */}
        <div className="space-y-12 sm:space-y-16">
          {editorialStories.map((story, idx) => {
            const isImageRight = story.imagePosition === "right";

            return (
              <motion.div
                key={story.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Text Content */}
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
                      onClick={() => {
                        if (onNavigateContact) onNavigateContact();
                        else window.location.hash = '#contact';
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#2D5A54] hover:text-[#23413C] font-deck-body uppercase tracking-wider group cursor-pointer"
                    >
                      <span>Engage Strategic Retainer</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Photography Banner */}
                <div className={`lg:col-span-6 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#D5D1C8] h-64 sm:h-80 lg:h-96 group">
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
    </section>
  );
}
