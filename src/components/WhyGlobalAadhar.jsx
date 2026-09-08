import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Settings, MessageSquare, Handshake } from 'lucide-react';
import { whyGlobalAadharContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

export default function WhyGlobalAadhar() {
  return (
    <section id="why-us" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555]">
            SLIDE 03 • WHY GLOBAL AADHAR
          </div>
        </div>

        {/* Headline & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            {whyGlobalAadharContent.headline}
          </h2>
          <p className="deck-section-intro">
            {whyGlobalAadharContent.intro}
          </p>
        </motion.div>

        {/* 2-Column Advantage Layout (Generous Gap & Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left: Image with Clean Embedded Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#D5D1C8] flex-1 min-h-[340px] sm:min-h-[400px]">
              <img
                src={whyGlobalAadharContent.image}
                alt="Global Aadhar Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23413C]/75 via-transparent to-transparent"></div>

              {/* Badges Over Image with Clean Margins */}
              <div className="absolute top-3 left-3 p-2 sm:p-2.5 rounded-lg bg-[#EDEBE7]/95 backdrop-blur-md border border-[#D5D1C8] shadow-xs text-[#2D5A54] flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54]">Media Production</span>
              </div>

              <div className="absolute top-3 right-3 p-2 sm:p-2.5 rounded-lg bg-[#EDEBE7]/95 backdrop-blur-md border border-[#D5D1C8] shadow-xs text-[#2D5A54] flex items-center gap-1.5">
                <Handshake className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54]">Institutional Trust</span>
              </div>

              <div className="absolute bottom-3 left-3 p-2 sm:p-2.5 rounded-lg bg-[#EDEBE7]/95 backdrop-blur-md border border-[#D5D1C8] shadow-xs text-[#2D5A54] flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54]">Sumant Cloud Tech</span>
              </div>

              <div className="absolute bottom-3 right-3 p-2 sm:p-2.5 rounded-lg bg-[#EDEBE7]/95 backdrop-blur-md border border-[#D5D1C8] shadow-xs text-[#2D5A54] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#2D5A54]" />
                <span className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54]">Strategic PR</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Stacked Advantage Items (Standard Modern SaaS Feature Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 justify-between">
            {[
              {
                badge: "ADVANTAGE 01",
                title: "Media Access & Relations",
                description: "Direct relationships with TV channels, digital platforms, and print media across Goa and beyond, securing trusted editorial placement.",
                bullets: [
                  "Tier-1 Regional & National Press",
                  "Direct TV & Broadcast News Access",
                  "Guaranteed Editorial Placement"
                ]
              },
              {
                badge: "ADVANTAGE 02",
                title: "Stakeholder & Institutional Trust",
                description: "Established networks spanning government departments, NGOs, institutional bodies, and community leaders for rapid, credible endorsements.",
                bullets: [
                  "Government Liaison & Clearances",
                  "NGO & Civil Society Partnerships",
                  "Credible Third-Party Endorsement"
                ]
              },
              {
                badge: "ADVANTAGE 03",
                title: "Local Knowledge & Sumant Cloud Tech",
                description: "Rooted in Goa with deep regional insight, cultural understanding, on-ground execution, and proprietary technology via Sumant Cloud.",
                bullets: [
                  "Hyper-Local Cultural Insight",
                  "End-to-End On-Ground Execution",
                  "Sumant Cloud Tech Automation"
                ]
              }
            ].map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="h-full"
              >
                <FeatureCard
                  icon={`0${idx + 1}`}
                  badge={point.badge}
                  title={point.title}
                  description={point.description}
                  bullets={point.bullets}
                  ctaText="Explore Advantage"
                  ctaHref="#contact"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
