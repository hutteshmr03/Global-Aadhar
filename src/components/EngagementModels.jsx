import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, Share2, Heart, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { engagementModelsContent, brandMeta } from '../data/brandContent';
import FeatureCard from './FeatureCard';

export default function EngagementModels({ onNavigateContact }) {
  const leftModels = [
    {
      icon: Calendar,
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
      icon: Target,
      badge: "PROJECT SPRINT",
      title: "Project-Based Campaigns",
      description: "Targeted, time-bound communication campaigns for product launches, events, or specific corporate initiatives.",
      bullets: [
        "Defined Timeline & Deliverables",
        "Campaign Storytelling Matrix",
        "Full Media Coverage Wrap"
      ]
    },
    {
      icon: Award,
      badge: "EVENT PACKAGE",
      title: "Event Packages",
      description: "Comprehensive planning, production, and media coverage for press meets, conferences, and institutional programs.",
      bullets: [
        "End-to-End Venue & AV Setup",
        "Press & VIP Guest Management",
        "Post-Event Coverage Report"
      ]
    }
  ];

  const rightModels = [
    {
      icon: Share2,
      badge: "DIGITAL RETAINER",
      title: "Digital Retainer",
      description: "Dedicated social media management, content creation, SEO, and online reputation monitoring for sustained growth.",
      bullets: [
        "LinkedIn Executive Branding",
        "SEO & Search Optimization",
        "Live Performance Dashboards"
      ]
    },
    {
      icon: Heart,
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
      icon: Cpu,
      badge: "SUMANT CLOUD",
      title: "Integrated PR + Technology",
      description: "Combined communications strategy with Sumant Cloud technology solutions for full-spectrum digital transformation.",
      bullets: [
        "Custom Portals & Dashboards",
        "Workflow CRM Automation",
        "Unified Tech + PR Delivery"
      ]
    }
  ];

  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <section id="models" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container space-y-8 sm:space-y-10">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54] font-deck-body font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555] font-deck-body text-[10px] sm:text-[11px] tracking-widest uppercase">
            SLIDE 07 • COMMERCIAL STRUCTURES
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
          <h2 className="deck-section-title">
            COMMERCIAL & ENGAGEMENT MODELS
          </h2>
          <p className="deck-section-intro">
            Flexible commercial models tailored to long-term institutional retainers, project sprints, and integrated technology transformations.
          </p>
        </motion.div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Column 1: Engagement Models */}
          <div className="space-y-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#2D5A54] text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 ring-4 ring-white/20"></span>
                <h3 className="font-deck-headline text-lg sm:text-xl text-white tracking-tight">
                  {engagementModelsContent.leftTitle || "Models of Engagement"}
                </h3>
              </div>
              <span className="text-[10px] font-bold font-deck-body tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/15 text-emerald-200 border border-white/20">
                Strategic PR
              </span>
            </div>

            <div className="space-y-5">
              {leftModels.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <FeatureCard
                    icon={item.icon}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    bullets={item.bullets}
                    ctaText="Select Structure"
                    ctaHref="#contact"
                    onCtaClick={handleCtaClick}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Commercial Structures */}
          <div className="space-y-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#23413C] text-white flex items-center justify-between shadow-xs border border-[#2D5A54]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 ring-4 ring-white/20"></span>
                <h3 className="font-deck-headline text-lg sm:text-xl text-white tracking-tight">
                  {engagementModelsContent.rightTitle || "Commercial Engagement"}
                </h3>
              </div>
              <span className="text-[10px] font-bold font-deck-body tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/15 text-emerald-200 border border-white/20">
                Digital & Tech
              </span>
            </div>

            <div className="space-y-5">
              {rightModels.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <FeatureCard
                    icon={item.icon}
                    badge={item.badge}
                    title={item.title}
                    description={item.description}
                    bullets={item.bullets}
                    ctaText="Select Structure"
                    ctaHref="#contact"
                    onCtaClick={handleCtaClick}
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
