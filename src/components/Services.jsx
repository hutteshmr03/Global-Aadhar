import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Video, CalendarCheck, HeartHandshake, TrendingUp, Cloud, 
  CheckCircle2, Layers, BarChart3 
} from 'lucide-react';
import { coreServicesContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const serviceIcons = {
  'gov-relations': Building2,
  'media-production': Video,
  'events-experiences': CalendarCheck,
  'csr-communication': HeartHandshake,
  'digital-marketing': TrendingUp,
  'technology-solutions': Cloud
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('gov-relations');
  const services = coreServicesContent.services;
  const currentService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section id="services" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555]">
            SLIDE 04 • OUR SIX CORE SERVICES
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            OUR SIX CORE SERVICES
          </h2>
          <p className="deck-section-intro">
            {coreServicesContent.overviewIntro}
          </p>
        </motion.div>

        {/* Interactive Service Pill Tabs (Uniformly Spaced & Aligned) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] || Layers;
            const isActive = activeTab === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-deck-body text-xs font-bold tracking-wide transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#2D5A54] text-white shadow-sm shadow-[#2D5A54]/25 scale-[1.01]'
                    : 'bg-[#EDEBE7] text-[#2B2B2B] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#E5E3DE]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed View Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-md shadow-[#2D5A54]/5"
          >
            {/* Service Top Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D5D1C8]/80 mb-8">
              <div className="space-y-1.5">
                <div className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                  SERVICE PILLAR {currentService.number}
                </div>
                <h3 className="font-deck-headline text-xl sm:text-2xl lg:text-3xl text-[#2D5A54] tracking-tight">
                  {currentService.title}
                </h3>
              </div>
              {currentService.tagline && (
                <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] font-medium max-w-lg md:text-right leading-relaxed">
                  {currentService.tagline}
                </p>
              )}
              {currentService.intro && (
                <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] font-medium max-w-lg md:text-right leading-relaxed">
                  {currentService.intro}
                </p>
              )}
            </div>

            {/* 3-Column Sub-Item Layout (Standard Modern SaaS Feature Cards) */}
            {currentService.items && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
                {currentService.items.map((item, idx) => (
                  <FeatureCard
                    key={item.title}
                    icon={`0${idx + 1}`}
                    badge={`CAPABILITY 0${idx + 1}`}
                    title={item.title}
                    description={item.description}
                    bullets={[
                      "Structured Execution Workflow",
                      "Verified Output & Documentation",
                      "Measurable Stakeholder Impact"
                    ]}
                    ctaText="Explore Solution"
                    ctaHref="#contact"
                  />
                ))}
              </div>
            )}

            {/* EVENTS & EXPERIENCES (Horizontal 4-Step Process Bar) */}
            {currentService.processSteps && (
              <div className="space-y-8">
                {/* Horizontal Step Pills Bar with Centered Connector Line */}
                <div className="relative">
                  {/* Dashed Connecting Line */}
                  <div className="hidden md:block absolute top-5 left-16 right-16 h-[2px] border-t-2 border-dashed border-[#D5D1C8] z-0"></div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 relative z-10">
                    {currentService.processSteps.map((stepItem, idx) => (
                      <div key={stepItem.step} className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#2D5A54] text-white font-deck-headline text-sm flex items-center justify-center shadow-xs mb-2.5 ring-4 ring-[#EDEBE7]">
                          0{idx + 1}
                        </div>
                        <span className="font-deck-headline text-sm sm:text-base text-[#2D5A54] tracking-tight">
                          {stepItem.step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Description Cards (Matching Modern SaaS Feature Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-1 items-stretch">
                  {currentService.processSteps.map((stepItem, idx) => (
                    <FeatureCard
                      key={stepItem.step}
                      icon={`0${idx + 1}`}
                      badge={`PHASE 0${idx + 1}`}
                      title={stepItem.step}
                      description={stepItem.description}
                      bullets={["End-to-End Delivery"]}
                      ctaText="Explore Solution"
                      ctaHref="#contact"
                      minTitleHeight="min-h-[2.25rem]"
                      minDescHeight="min-h-[3.25rem]"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* DIGITAL MARKETING (Copy + SVG Growth Chart + 3 Equal Pill Badges) */}
            {currentService.id === 'digital-marketing' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                      {currentService.copy}
                    </p>

                    {/* 3 Equal Pill Badges */}
                    <div className="space-y-3 pt-1">
                      {currentService.callouts.map((pill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] font-deck-body text-xs font-semibold text-[#2B2B2B] shadow-xs"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54] shrink-0"></span>
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SVG Growth Chart Widget with Ample Margins */}
                  <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#D5D1C8]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#2D5A54]">
                        <BarChart3 className="w-3.5 h-3.5 text-[#2D5A54]" />
                        <span>DIGITAL REACH VELOCITY</span>
                      </div>
                      <span className="font-deck-body text-[10px] font-bold text-[#2D5A54] bg-[#2D5A54]/10 border border-[#2D5A54]/20 px-2.5 py-0.5 rounded-full">
                        +240% Lift
                      </span>
                    </div>

                    {/* Clean SVG Multi-Line Chart */}
                    <div className="pt-4 pb-2">
                      <svg viewBox="0 0 320 140" className="w-full h-36 overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2D5A54" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#2D5A54" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        <line x1="10" y1="120" x2="310" y2="120" stroke="#D5D1C8" strokeWidth="1" />
                        <line x1="10" y1="80" x2="310" y2="80" stroke="#D5D1C8" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="10" y1="40" x2="310" y2="40" stroke="#D5D1C8" strokeWidth="1" strokeDasharray="3,3" />

                        {/* Area fill */}
                        <polygon
                          points="10,110 80,90 150,65 220,40 290,15 290,120 10,120"
                          fill="url(#chartGrad1)"
                        />

                        {/* Line 1 (Reach - Deep Teal) */}
                        <polyline
                          fill="none"
                          stroke="#2D5A54"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="10,110 80,90 150,65 220,40 290,15"
                        />

                        {/* Line 2 (Engagement - Darker Teal) */}
                        <polyline
                          fill="none"
                          stroke="#23413C"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4,4"
                          points="10,115 80,100 150,80 220,60 290,35"
                        />

                        {/* Data Points */}
                        {[
                          { x: 10, y: 110, val: "24k" },
                          { x: 80, y: 90, val: "45k" },
                          { x: 150, y: 65, val: "68k" },
                          { x: 220, y: 40, val: "89k" },
                          { x: 290, y: 15, val: "120k" }
                        ].map((pt, idx) => (
                          <g key={idx}>
                            <circle cx={pt.x} cy={pt.y} r="5" fill="#2D5A54" stroke="#FFFFFF" strokeWidth="2" />
                            <text x={pt.x} y={pt.y - 9} textAnchor="middle" fontSize="9" fill="#2B2B2B" fontWeight="bold" fontFamily="sans-serif">
                              {pt.val}
                            </text>
                          </g>
                        ))}
                      </svg>

                      {/* X-axis labels */}
                      <div className="flex justify-between text-[10.5px] font-bold text-[#555555] pt-3 px-1">
                        <span>Item 1</span>
                        <span>Item 2</span>
                        <span>Item 3</span>
                        <span>Item 4</span>
                        <span>Item 5</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#555555] pt-2 border-t border-[#D5D1C8] font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
                        <span>Media Impressions</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#23413C]"></span>
                        <span>Engagement Index</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
