import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, Share2, Heart, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function EngagementModels({ onNavigateContact }) {
  const engagementModels = [
    {
      icon: Calendar,
      badge: "MONTHLY RETAINER",
      title: "Monthly PR Retainer",
      description: "Ongoing strategic communications, daily media desk monitoring, continuous press pitching, and crisis advisory on a retained partnership basis.",
      bullets: [
        "Dedicated Panjim PR Account Lead",
        "Monthly Press Release & Editorial Cycle",
        "24/7 Crisis Holding Statements & Advisory"
      ]
    },
    {
      icon: Target,
      badge: "PROJECT SPRINT",
      title: "Project-Based Campaigns",
      description: "Targeted, time-bound communication sprints for product launches, policy announcements, or specific corporate milestones.",
      bullets: [
        "Defined 30–90 Day Timeline & Output SLA",
        "High-Impact Narrative & Media Asset Pack",
        "Multi-Outlet Editorial Placement Wrap"
      ]
    },
    {
      icon: Award,
      badge: "EVENT SUITE",
      title: "Event Packages",
      description: "Turnkey planning, production staging, VIP stakeholder coordination, and live media distribution for institutional summits.",
      bullets: [
        "End-to-End AV & Stage Production Rigging",
        "Regional Press Invitations & Press Room Desk",
        "Post-Event Syndication & Impact Dossier"
      ]
    }
  ];

  const commercialModels = [
    {
      icon: Share2,
      badge: "DIGITAL RETAINER",
      title: "Digital Retainer",
      description: "Dedicated social media management, executive LinkedIn profiling, SEO, and continuous online sentiment monitoring.",
      bullets: [
        "Executive Thought Leadership Formats",
        "Search Engine Optimization (SEO & SERP)",
        "Live Audience Sentiment & Analytics"
      ]
    },
    {
      icon: Heart,
      badge: "CSR MANDATE",
      title: "CSR Communication Programs",
      description: "Documentary filmmaking, beneficiary storytelling, and statutory reporting to turn social investments into public credibility.",
      bullets: [
        "On-Ground Field Video Stories & Reels",
        "Statutory CSR Impact Dossiers for Funders",
        "Multi-Stakeholder Briefing Roundtables"
      ]
    },
    {
      icon: Cpu,
      badge: "SUMANT CLOUD",
      title: "Integrated PR + Technology",
      description: "Full-scale combination of strategic PR storytelling with custom Sumant Cloud software, CRM automation, and portals.",
      bullets: [
        "Custom E-DMS & CMMS Software Portals",
        "Automated Media Workflow Pipelines",
        "Single-SLA Unified Tech + PR Delivery"
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
    <section id="models" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            ENGAGEMENT MODELS • COMMERCIAL ARCHITECTURE
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
            Flexible Collaboration Frameworks
          </div>
          <h2 className="deck-section-title">
            FLEXIBLE ENGAGEMENT & COMMERCIAL STRUCTURES
          </h2>
          <p className="deck-section-intro">
            Whether you require an ongoing strategic PR retainer, a high-octane project campaign, or an integrated PR + technology suite, our commercial models scale with your mandate.
          </p>
        </motion.div>

        {/* Two-Column Clean Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Core PR Engagement Models */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-[#2D5A54]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
              <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54]">
                1. STRATEGIC PR ENGAGEMENT MODELS
              </h3>
            </div>

            <div className="space-y-4">
              {engagementModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10px] font-bold uppercase tracking-wider">
                          {model.badge}
                        </span>
                      </div>

                      <h4 className="font-deck-headline text-lg text-[#2D5A54]">
                        {model.title}
                      </h4>

                      <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                        {model.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-[#D5D1C8]/60">
                        {model.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-2">
                      <button
                        type="button"
                        onClick={handleCtaClick}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Select Model</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Commercial & Tech Engagement */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-[#2D5A54]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
              <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54]">
                2. COMMERCIAL & TECH ENGAGEMENTS
              </h3>
            </div>

            <div className="space-y-4">
              {commercialModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10px] font-bold uppercase tracking-wider">
                          {model.badge}
                        </span>
                      </div>

                      <h4 className="font-deck-headline text-lg text-[#2D5A54]">
                        {model.title}
                      </h4>

                      <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                        {model.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-[#D5D1C8]/60">
                        {model.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-2">
                      <button
                        type="button"
                        onClick={handleCtaClick}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Select Model</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
