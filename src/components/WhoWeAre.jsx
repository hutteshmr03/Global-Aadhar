import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Cpu, ArrowRight } from 'lucide-react';
import { whoWeAreContent, brandMeta } from '../data/brandContent';
import FeatureCard from './FeatureCard';

export default function WhoWeAre({ onNavigateContact }) {
  const pillars = [
    {
      icon: Radio,
      badge: "PILLAR 01",
      title: "Strategic PR & Communications",
      description: "End-to-end PR for corporates, NGOs, government bodies, and institutions seeking credible, high-impact public outreach across Western India.",
      bullets: [
        "Corporate & Institutional PR Strategy",
        "Broadcast & Print Press Relations",
        "Executive Thought Leadership"
      ]
    },
    {
      icon: Users,
      badge: "PILLAR 02",
      title: "Media & Institutional Network",
      description: "An active ecosystem of regional media partners, government departments, and NGOs enabling authentic, swift stakeholder engagement.",
      bullets: [
        "Regional TV & Daily Press Bureaus",
        "State Department Coordination",
        "Community & Stakeholder Trust"
      ]
    },
    {
      icon: Cpu,
      badge: "PILLAR 03",
      title: "Integrated Execution",
      description: "Strategy, storytelling, media production, events, digital marketing, and cloud technology unified under one seamless delivery model.",
      bullets: [
        "Script-to-Screen Media Production",
        "On-Ground Event Experience Delivery",
        "Enterprise Tech via Sumant Cloud"
      ]
    }
  ];

  return (
    <section id="about" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-10">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            WHO WE ARE • STRATEGIC PILLARS
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
            Our Foundation & Ecosystem
          </div>
          <h2 className="deck-section-title">
            DEEPLY ROOTED IN GOA'S MEDIA & STRATEGIC ECOSYSTEM
          </h2>
          <p className="deck-section-intro">
            Global Aadhar is a Goa-based PR & Strategic Communications company, deeply embedded in the region's media landscape, institutional networks, and government corridors to deliver end-to-end stakeholder impact.
          </p>
        </motion.div>

        {/* 3-Column Pillar Grid (Standing Card System) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full"
            >
              <FeatureCard
                icon={pillar.icon}
                badge={pillar.badge}
                title={pillar.title}
                description={pillar.description}
                bullets={pillar.bullets}
                ctaText="Explore Pillar"
                ctaHref="#services"
                onCtaClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* 2-Image Panoramic Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 pt-2">
          {whoWeAreContent.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl group border border-[#D5D1C8] h-56 sm:h-64 lg:h-80"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/90 via-[#1A332F]/30 to-transparent flex items-end p-5 sm:p-7">
                <span className="font-deck-body text-xs sm:text-sm font-bold text-white tracking-wide bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
