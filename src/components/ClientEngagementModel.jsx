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
    <section id="engagement-model" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            HOW WE WORK • INTEGRATED ENGAGEMENT MODEL
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
            Execution Methodology
          </div>
          <h2 className="deck-section-title">
            DISCOVER → STRATEGY & CREATE → ACTIVATE & AMPLIFY → MEASURE
          </h2>
          <p className="deck-section-intro">
            Our structured 4-stage methodology ensures strategy, creative storytelling, seamless on-ground execution, and auditable ROI across every campaign.
          </p>
        </motion.div>

        {/* STANDING PROCESS COMPONENT: CONNECTED TIMELINE WITH ANIMATED GUIDE BEAM */}
        <div className="relative">
          {/* Animated Gradient Connector Line */}
          <div className="hidden lg:block absolute top-10 left-24 right-24 h-[2px] bg-gradient-to-r from-[#2D5A54]/20 via-[#2D5A54] to-[#2D5A54]/20 z-0 animate-pulse"></div>

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
