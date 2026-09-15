import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, LineChart, ArrowRight } from 'lucide-react';
import { brandMeta } from '../data/brandContent';
import FeatureCard from './FeatureCard';

const steps = [
  {
    icon: Search,
    stage: "01",
    badge: "STAGE 01",
    name: "Discover",
    tagline: "Insight & Audit",
    description: "We understand your goals, stakeholders, and communication landscape to root every strategy in verified intelligence.",
    bullets: [
      "Stakeholder Landscape Mapping",
      "Perception & Media Audit",
      "Strategic Goal Alignment"
    ]
  },
  {
    icon: Lightbulb,
    stage: "02",
    badge: "STAGE 02",
    name: "Strategy & Create",
    tagline: "Messaging & Content",
    description: "We craft tailored communications strategies and develop compelling stories, campaigns, and media assets.",
    bullets: [
      "Custom Messaging Framework",
      "High-Impact Narrative Assets",
      "Editorial Media Formats"
    ]
  },
  {
    icon: Zap,
    stage: "03",
    badge: "STAGE 03",
    name: "Activate & Amplify",
    tagline: "Execution & Wires",
    description: "We execute across broadcast, events, and digital channels — amplifying your message through media and influencer reach.",
    bullets: [
      "Multi-Channel Media Launch",
      "Broadcast & Print Syndication",
      "On-Ground Event Activations"
    ]
  },
  {
    icon: LineChart,
    stage: "04",
    badge: "STAGE 04",
    name: "Measure",
    tagline: "Auditable Reporting",
    description: "We track, analyse, and report on every campaign — delivering transparent impact metrics and continuous optimisation.",
    bullets: [
      "Transparent Coverage Metrics",
      "Auditable Stakeholder Reports",
      "Continuous ROI Optimisation"
    ]
  }
];

export default function ClientEngagementModel({ onNavigateContact }) {
  return (
    <section id="engagement-model" className="deck-section relative overflow-hidden bg-[#1A332F] text-white scroll-mt-28 bg-diagonal-ink-pattern">
      {/* Animated Subtle Diagonal Drift Texture Layer (Uiverse by chase2k25 adapted to brand ink) */}
      <div className="diagonal-ink-texture"></div>

      {/* Ambient Atmospheric Glow Spheres */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2D5A54]/30 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="deck-container relative z-10 space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar !border-white/15 pb-2">
          <div className="flex items-center gap-2 font-deck-body font-bold text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] !text-[#D5D1C8] tracking-widest uppercase">
            HOW WE WORK • INTEGRATED ENGAGEMENT MODEL
          </div>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-4xl"
        >
          <div className="text-xs font-deck-body font-bold text-emerald-400 uppercase tracking-wider">
            Execution Methodology
          </div>
          <h2 className="font-deck-headline text-2xl sm:text-4xl lg:text-5xl !text-white font-bold uppercase tracking-tight leading-[1.12]">
            DISCOVER → STRATEGY & CREATE → ACTIVATE & AMPLIFY → MEASURE
          </h2>
          <p className="font-deck-body text-sm sm:text-base !text-[#D5D1C8] leading-relaxed max-w-3xl">
            Our structured 4-stage methodology ensures strategy, creative storytelling, seamless on-ground execution, and auditable ROI across every campaign.
          </p>
        </motion.div>

        {/* STANDING PROCESS COMPONENT: CONNECTED TIMELINE WITH ANIMATED GUIDE BEAM */}
        <div className="relative">
          {/* Animated Gradient Connector Line & Traveling Photon Pulse */}
          <div className="hidden lg:block absolute top-12 left-20 right-20 h-[3px] bg-white/15 z-0 overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-beam-flow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10 items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="h-full"
              >
                <FeatureCard
                  variant="methodology"
                  icon={step.icon}
                  badge={step.badge}
                  title={`${step.stage}. ${step.name}`}
                  subtitle={step.tagline}
                  description={step.description}
                  bullets={step.bullets}
                  ctaText="Initiate Stage"
                  ctaHref="#contact"
                  onCtaClick={() => {
                    if (onNavigateContact) onNavigateContact();
                    else window.location.hash = '#contact';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
