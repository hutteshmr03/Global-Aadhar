import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, LineChart, ArrowRight, CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';
import { clientEngagementModelContent, brandMeta } from '../data/brandContent';
import FeatureCard from '../components/FeatureCard';

const detailedStages = [
  {
    icon: Search,
    stage: "01",
    badge: "STAGE 01 • INSIGHT & AUDIT",
    name: "Discover",
    tagline: "Stakeholder Intelligence & Goal Alignment",
    description: "We begin by understanding your goals, stakeholders, and communication landscape. Deep discovery ensures every strategy is rooted in real insight and aligned with your business objectives.",
    deliverables: [
      "Perception & Media Coverage Audit",
      "Key Stakeholder & Influencer Mapping",
      "Competitor Landscape & Narrative Gap Analysis",
      "Executive Alignment & Objective Framework"
    ]
  },
  {
    icon: Lightbulb,
    stage: "02",
    badge: "STAGE 02 • MESSAGING & ASSETS",
    name: "Strategy & Create",
    tagline: "Narrative Crafting & Content Production",
    description: "We craft a tailored communications strategy and develop compelling content — stories, campaigns, media assets, and messaging frameworks that resonate with your target audiences.",
    deliverables: [
      "Core Narrative & Key Messaging Pillars",
      "Broadcast Press Kits & Video Scripting",
      "Executive Thought Leadership Op-Eds",
      "Digital & Social Asset Production"
    ]
  },
  {
    icon: Zap,
    stage: "03",
    badge: "STAGE 03 • MULTI-CHANNEL LAUNCH",
    name: "Activate & Amplify",
    tagline: "Broadcast Syndication & Ground Execution",
    description: "We execute across media, events, digital platforms, and stakeholder channels — then amplify your message through PR, social media, influencer outreach, and earned coverage.",
    deliverables: [
      "Print, TV & Digital Press Releases",
      "On-Ground Event Coordination & Press Room",
      "Targeted Stakeholder & Community Outreach",
      "Social Media Amplification & Paid Boosts"
    ]
  },
  {
    icon: LineChart,
    stage: "04",
    badge: "STAGE 04 • AUDITABLE OUTCOMES",
    name: "Measure",
    tagline: "Transparent Metrics & Continuous ROI",
    description: "We track, analyse, and report on every campaign — delivering transparent impact metrics, media coverage reports, and actionable insights to continuously optimise outcomes.",
    deliverables: [
      "Audited Readership & Impression Figures",
      "Advertising Value Equivalency (AVE) Dossier",
      "Sentiment & Stakeholder Shift Analytics",
      "Executive Briefing & Next-Cycle Roadmapping"
    ]
  }
];

export default function EngagementModelPage({ onNavigateContact, onNavigateHome }) {
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
          <span className="text-[#2B2B2B]">Engagement Model</span>
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
            <span>STRUCTURED METHODOLOGY</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            DISCOVER → STRATEGY & CREATE → ACTIVATE & AMPLIFY → MEASURE
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            Our structured 4-stage methodology ensures strategy, creative storytelling, seamless on-ground execution, and auditable ROI across every communications engagement.
          </p>
        </motion.div>

        {/* Connected Step Overview */}
        <div className="space-y-8">
          <div className="border-b border-[#D5D1C8] pb-3">
            <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Methodology Blueprint
            </span>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
              4-STAGE EXECUTION ROADMAP
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {detailedStages.map((step, idx) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
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
                  bullets={step.deliverables.slice(0, 3)}
                  ctaText="Initiate Stage"
                  ctaHref="#contact"
                  onCtaClick={onNavigateContact}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Deliverables & SLAs Section */}
        <div className="space-y-8 pt-4">
          <div className="border-b border-[#D5D1C8] pb-3">
            <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Transparency & Quality Assurance
            </span>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
              COMPREHENSIVE STAGE DELIVERABLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedStages.map((stage, sIdx) => {
              const StageIcon = stage.icon;
              return (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sIdx * 0.08 }}
                  className="p-7 sm:p-8 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-[#D5D1C8]/80 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#2D5A54] text-white flex items-center justify-center font-bold">
                        <StageIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-deck-body text-[10px] font-bold text-[#555555] uppercase tracking-wider">
                          Stage {stage.stage}
                        </span>
                        <h3 className="font-deck-headline text-xl text-[#2D5A54]">
                          {stage.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider block">
                      Core Key Deliverables:
                    </span>
                    {stage.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SLA & Governance Guarantee */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-deck-headline text-lg sm:text-xl text-[#1A332F]">
                Auditable Accountability & Governance
              </h3>
              <p className="font-deck-body text-xs sm:text-sm text-[#555555] max-w-xl mt-1">
                Every press release, media interview, and digital metric is catalogued in your dedicated campaign folder with transparent circulation and viewership verification.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal text-xs px-6 py-3 shrink-0 cursor-pointer"
          >
            <span>Start Stage 01 Discovery</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
