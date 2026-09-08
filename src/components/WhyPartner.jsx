import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, LineChart } from 'lucide-react';
import { whyPartnerContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const icons = [Layers, Network, LineChart];

export default function WhyPartner() {
  return (
    <section id="why-partner" className="deck-section bg-[#F5F1EA] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#718280]">
            SLIDE 08 • VALUE PROPOSITION
          </div>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            {whyPartnerContent.headline}
          </h2>
          <p className="deck-section-intro">
            {whyPartnerContent.intro}
          </p>
        </motion.div>

        {/* 2-Column Content Layout (Generous Gap & Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left: Handshake Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-sm border border-[#E6E0D6] flex flex-col min-h-[340px] sm:min-h-[400px]"
          >
            <img
              src={whyPartnerContent.image}
              alt="Strategic Partnership"
              className="w-full h-full object-cover flex-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3330]/90 via-[#1A3330]/25 to-transparent flex items-end p-5 sm:p-6">
              <div className="text-white space-y-1.5">
                <span className="font-deck-headline text-xl sm:text-2xl drop-shadow leading-tight block text-white">
                  TRUSTED PARTNER IN GOA
                </span>
                <p className="font-deck-body text-xs sm:text-sm text-[#FAF7F2]">
                  Empowering regional & global stakeholders with precision execution
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 Stacked Value Proposition Items (Standard Modern SaaS Feature Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 justify-between">
            {[
              {
                icon: icons[0],
                badge: "VALUE PROP 01",
                title: "Integrated PR & Tech Expertise",
                description: "From government relations and media production to digital campaigns and technology solutions via Sumant Cloud, under one coordinated roof.",
                bullets: [
                  "Full-Spectrum Communications",
                  "Sumant Cloud Tech Integration",
                  "Measurable Outcome Delivery"
                ]
              },
              {
                icon: icons[1],
                badge: "VALUE PROP 02",
                title: "Deep Local Network & Access",
                description: "Deep-rooted relationships across Goa's media ecosystem, departments, NGOs, and institutional networks giving unmatched stakeholder coordination.",
                bullets: [
                  "Unrivaled Goa Media Influence",
                  "Inter-Agency Liaison Speed",
                  "On-Ground Operational Mastery"
                ]
              },
              {
                icon: icons[2],
                badge: "VALUE PROP 03",
                title: "Auditable & Measurable Impact",
                description: "Every campaign is tracked, every CSR story is documented, and every digital effort is analytically measured for visible credibility.",
                bullets: [
                  "Executive Analytics Reporting",
                  "Tangible Stakeholder Trust",
                  "Maximized Communications ROI"
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="h-full"
              >
                <FeatureCard
                  icon={item.icon || Layers}
                  badge={item.badge}
                  title={item.title}
                  description={item.description}
                  bullets={item.bullets}
                  ctaText="Explore Partnership"
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

