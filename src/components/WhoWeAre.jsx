import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Cpu } from 'lucide-react';
import { whoWeAreContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const icons = [Radio, Users, Cpu];

export default function WhoWeAre() {
  return (
    <section id="about" className="deck-section bg-[#F5F1EA] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#718280]">
            SLIDE 02 • WHO WE ARE
          </div>
        </div>

        {/* Headline & Main Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            {whoWeAreContent.headline}
          </h2>
          <p className="deck-section-intro">
            {whoWeAreContent.intro}
          </p>
        </motion.div>

        {/* 3-Column Pillar Grid (Standard Modern SaaS Feature Card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-14 items-stretch">
          {[
            {
              icon: Radio,
              badge: "PILLAR 01",
              title: "Strategic PR & Communications",
              description: "Rooted in Goa, Global Aadhar delivers end-to-end public relations and strategic communications for corporates, NGOs, and institutions seeking credible outreach.",
              bullets: [
                "Corporate & Institutional PR",
                "Media Outreach & Press Relations",
                "Credible Strategic Communications"
              ]
            },
            {
              icon: Users,
              badge: "PILLAR 02",
              title: "Media & Institutional Network",
              description: "We operate within a rich ecosystem of media partners, NGOs, and government departments, enabling meaningful engagement with key stakeholders.",
              bullets: [
                "Regional TV & Print Media Access",
                "Government & NGO Coordination",
                "Community Stakeholder Trust"
              ]
            },
            {
              icon: Cpu,
              badge: "PILLAR 03",
              title: "Integrated Execution",
              description: "From strategy to storytelling to on-ground activation, Global Aadhar brings together communications, media production, events, digital marketing, and technology.",
              bullets: [
                "Multi-Channel Storytelling",
                "On-Ground Experiential Delivery",
                "Tech Solutions via Sumant Cloud"
              ]
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
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
                ctaText="Explore Solution"
                ctaHref="#contact"
              />
            </motion.div>
          ))}
        </div>

        {/* 2-Image Row (Matching Rounded-2xl and Clean Spacing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {whoWeAreContent.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              className="relative rounded-2xl overflow-hidden shadow-sm group border border-[#E6E0D6] h-52 sm:h-60 lg:h-72"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3330]/85 via-[#1A3330]/25 to-transparent flex items-end p-5 sm:p-6">
                <span className="font-deck-body text-sm sm:text-base font-bold text-white tracking-wide drop-shadow-md">
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
