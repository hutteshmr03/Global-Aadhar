import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, LineChart, ArrowRight } from 'lucide-react';
import { clientEngagementModelContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const stepIcons = [Search, Lightbulb, Zap, LineChart];

export default function ClientEngagementModel() {
  return (
    <section id="engagement-model" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555]">
            SLIDE 05 • DELIVERY FRAMEWORK
          </div>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            {clientEngagementModelContent.headline}
          </h2>
          <p className="deck-section-intro">
            Our structured 4-stage methodology ensures strategy, creative storytelling, seamless execution, and auditable ROI across every campaign.
          </p>
        </motion.div>

        {/* 4-Step Process Bar Container with Centered Dashed Line */}
        <div className="relative">
          {/* Dashed Horizontal Desktop Guide Line */}
          <div className="hidden lg:block absolute top-6 left-16 right-16 h-[2px] border-t-2 border-dashed border-[#D5D1C8] z-0"></div>

          {/* Steps Grid (Standard Modern SaaS Feature Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10 items-stretch">
            {[
              {
                icon: Search,
                badge: "STAGE 01",
                name: "Discover",
                description: "We understand your goals, stakeholders, and communication landscape to root every strategy in real insight.",
                bullets: [
                  "Stakeholder Landscape Mapping",
                  "Perception & Media Audit",
                  "Strategic Goal Alignment"
                ]
              },
              {
                icon: Lightbulb,
                badge: "STAGE 02",
                name: "Strategy & Create",
                description: "We craft tailored communications strategies and develop compelling stories, campaigns, and media assets.",
                bullets: [
                  "Custom Messaging Framework",
                  "High-Impact Narrative Assets",
                  "Editorial Media Formats"
                ]
              },
              {
                icon: Zap,
                badge: "STAGE 03",
                name: "Activate & Amplify",
                description: "We execute across media, events, and digital channels — amplifying your message through PR and influencer reach.",
                bullets: [
                  "Multi-Channel Media Launch",
                  "Social & Digital Amplification",
                  "On-Ground Event Activations"
                ]
              },
              {
                icon: LineChart,
                badge: "STAGE 04",
                name: "Measure",
                description: "We track, analyse, and report on every campaign — delivering transparent impact metrics and actionable insights.",
                bullets: [
                  "Transparent Coverage Metrics",
                  "Auditable Stakeholder Reports",
                  "Continuous ROI Optimisation"
                ]
              }
            ].map((step, idx) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="h-full"
              >
                <FeatureCard
                  icon={step.icon}
                  badge={step.badge}
                  title={step.name}
                  description={step.description}
                  bullets={step.bullets}
                  ctaText="View Protocol"
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

