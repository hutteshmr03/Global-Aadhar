import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, Share2, Heart, Cpu } from 'lucide-react';
import { engagementModelsContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const leftIcons = [Calendar, Target, Award];
const rightIcons = [Share2, Heart, Cpu];

export default function EngagementModels() {
  return (
    <section id="models" className="deck-section bg-[#F5F1EA] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#718280]">
            SLIDE 07 • COMMERCIAL STRUCTURES
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
            ENGAGEMENT MODELS
          </h2>
          <p className="deck-section-intro">
            Flexible commercial models tailored to long-term institutional retainers, project sprints, and integrated technology transformations.
          </p>
        </motion.div>

        {/* Two-Column Comparison Card with Rounded Header Bar */}
        <div className="rounded-2xl overflow-hidden bg-white border border-[#E6E0D6] shadow-sm">
          {/* Header Bar Split (Vertically Centered & Balanced) */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="p-4 sm:p-6 bg-[#2D5A54] md:border-r border-white/20 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white/40 shrink-0 ring-2 ring-white/30"></span>
              <h3 className="font-deck-headline text-lg sm:text-xl lg:text-2xl tracking-tight text-white">
                {engagementModelsContent.leftTitle}
              </h3>
            </div>

            <div className="p-4 sm:p-6 bg-[#1A3330] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white/40 shrink-0 ring-2 ring-white/30"></span>
              <h3 className="font-deck-headline text-lg sm:text-xl lg:text-2xl tracking-tight text-white">
                {engagementModelsContent.rightTitle}
              </h3>
            </div>
          </div>

          {/* Body Columns with Centered Divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E6E0D6] p-4 sm:p-6 lg:p-8 gap-4 lg:gap-6">
            {/* Left Column: Engagement Models */}
            <div className="flex flex-col gap-4 lg:gap-6 justify-between">
              {[
                {
                  icon: leftIcons[0],
                  badge: "RETAINER",
                  title: "Monthly PR Retainer",
                  description: "Ongoing strategic communications, media relations, and brand visibility support on a continuous partnership basis.",
                  bullets: [
                    "Dedicated PR Account Lead",
                    "Monthly Press Release Cycle",
                    "Crisis & Media Advisory"
                  ]
                },
                {
                  icon: leftIcons[1],
                  badge: "SPRINT",
                  title: "Project-Based Campaigns",
                  description: "Targeted, time-bound communication campaigns for product launches, events, or specific corporate initiatives.",
                  bullets: [
                    "Defined Timeline & Deliverables",
                    "Campaign Storytelling Matrix",
                    "Full Media Coverage Wrap"
                  ]
                },
                {
                  icon: leftIcons[2],
                  badge: "PRODUCTION",
                  title: "Event Packages",
                  description: "Comprehensive planning, production, and media coverage for press meets, conferences, and institutional programs.",
                  bullets: [
                    "End-to-End Venue & AV Setup",
                    "Press & VIP Guest Management",
                    "Post-Event Coverage Report"
                  ]
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <FeatureCard
                    icon={item.icon || Calendar}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    bullets={item.bullets}
                    ctaText="Select Structure"
                    ctaHref="#contact"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column: Commercial Engagement */}
            <div className="flex flex-col gap-6 lg:gap-8 justify-between pt-8 md:pt-0">
              {[
                {
                  icon: rightIcons[0],
                  badge: "DIGITAL",
                  title: "Digital Retainer",
                  description: "Dedicated social media management, content creation, SEO, and online reputation monitoring for sustained growth.",
                  bullets: [
                    "LinkedIn Executive Branding",
                    "SEO & Search Optimization",
                    "Live Performance Dashboards"
                  ]
                },
                {
                  icon: rightIcons[1],
                  badge: "CSR MANDATE",
                  title: "CSR Communication Programs",
                  description: "End-to-end storytelling, impact reporting, and stakeholder engagement for corporate social responsibility mandates.",
                  bullets: [
                    "Beneficiary Video Stories",
                    "Statutory CSR Impact Reports",
                    "Multi-Stakeholder Briefings"
                  ]
                },
                {
                  icon: rightIcons[2],
                  badge: "SUMANT CLOUD",
                  title: "Integrated PR + Technology",
                  description: "Combined communications strategy with Sumant Cloud technology solutions for full-spectrum digital transformation.",
                  bullets: [
                    "Custom Portals & Dashboards",
                    "Workflow CRM Automation",
                    "Unified Tech + PR Delivery"
                  ]
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                  className="h-full"
                >
                  <FeatureCard
                    icon={item.icon || Share2}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    bullets={item.bullets}
                    ctaText="Select Structure"
                    ctaHref="#contact"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
