import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Cpu, ArrowRight, CheckCircle2, Award, MapPin, User, ShieldCheck } from 'lucide-react';
import { whoWeAreContent, brandMeta } from '../data/brandContent';
import FeatureCard from '../components/FeatureCard';
import Ticker from '../components/Ticker';

export default function WhoWeArePage({ onNavigateContact, onNavigateHome }) {
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
          <span className="text-[#2B2B2B]">Who We Are</span>
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
            <span>ABOUT GLOBAL AADHAR</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            DEEPLY ROOTED IN GOA'S MEDIA & STRATEGIC ECOSYSTEM
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            {whoWeAreContent.intro}
          </p>
        </motion.div>

        {/* 3 Strategic Pillars Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#D5D1C8] pb-3">
            <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Strategic Foundation
            </span>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
              OUR THREE CORE PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="h-full"
              >
                <FeatureCard
                  icon={pillar.icon}
                  badge={pillar.badge}
                  title={pillar.title}
                  description={pillar.description}
                  bullets={pillar.bullets}
                  ctaText="Inquire on This Pillar"
                  ctaHref="#contact"
                  onCtaClick={onNavigateContact}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2-Image Photographic Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {whoWeAreContent.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-[#D5D1C8] h-64 sm:h-80 lg:h-96 group"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/90 via-[#1A332F]/30 to-transparent flex items-end p-6 sm:p-8">
                <span className="font-deck-body text-xs sm:text-sm font-bold text-white tracking-wide bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Panjim Bureau Credential Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5D1C8] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2D5A54] text-white flex items-center justify-center font-bold shadow-xs">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10.5px] font-deck-body font-bold text-[#555555] uppercase tracking-wider block">
                  EXECUTIVE LEADERSHIP
                </span>
                <h3 className="font-deck-headline text-xl sm:text-2xl text-[#1A332F]">
                  {brandMeta.presentedBy}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5D1C8] text-xs font-deck-body font-bold text-[#2D5A54]">
              <MapPin className="w-4 h-4" />
              <span>Panjim, Goa Headquarters</span>
            </div>
          </div>

          <p className="font-deck-body text-sm text-[#2B2B2B] leading-relaxed max-w-3xl">
            Under the strategic leadership of Amol K Arondekar, Global Aadhar connects enterprises, state institutions, and social ventures with authentic editorial voices, regional TV networks, and state departments to secure lasting public trust.
          </p>
        </motion.div>

        {/* Regional Press Wire & Broadcast Ticker */}
        <div className="space-y-3">
          <Ticker />
        </div>

        {/* Bottom Page CTA Band */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A332F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-deck-headline text-2xl sm:text-3xl text-white">
              Ready to Shape Your Strategic Narrative?
            </h3>
            <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] max-w-xl">
              Connect directly with our Panjim desk to explore how Global Aadhar can amplify your voice across Goa and Western India.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Initiate Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
