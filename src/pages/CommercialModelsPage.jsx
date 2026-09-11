import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Award, Share2, Heart, Cpu, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { brandMeta } from '../data/brandContent';
import RoiCalculator from '../components/RoiCalculator';

export default function CommercialModelsPage({ onNavigateContact, onNavigateHome }) {
  const prModels = [
    {
      icon: Calendar,
      badge: "MONTHLY RETAINER",
      title: "Monthly PR Retainer",
      description: "Ongoing strategic communications, daily media desk monitoring, continuous press pitching, and crisis advisory on a retained partnership basis.",
      bullets: [
        "Dedicated Panjim PR Account Lead",
        "Monthly Press Release & Editorial Cycle",
        "24/7 Crisis Holding Statements & Advisory",
        "Tier-1 Western India Media Placements"
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
        "Multi-Outlet Editorial Placement Wrap",
        "Post-Launch Impact & Reach Dossier"
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
        "Broadcast Video Recording & Photo Release",
        "Post-Event Syndication & Impact Dossier"
      ]
    }
  ];

  const commercialTechModels = [
    {
      icon: Share2,
      badge: "DIGITAL RETAINER",
      title: "Digital Retainer",
      description: "Dedicated social media management, executive LinkedIn profiling, SEO, and continuous online sentiment monitoring.",
      bullets: [
        "Executive Thought Leadership Formats",
        "Search Engine Optimization (SEO & SERP)",
        "Live Audience Sentiment & Analytics",
        "Video Editing & Digital Press Assets"
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
        "Multi-Stakeholder Briefing Roundtables",
        "Broadcast & Regional Print PR Syndication"
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
        "Single-SLA Unified Tech + PR Delivery",
        "Executive Analytics & Real-Time Dashboard"
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
          <span className="text-[#2B2B2B]">Commercial Models</span>
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
            <span>COMMERCIAL & RETAINER ARCHITECTURE</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            FLEXIBLE ENGAGEMENT & COMMERCIAL STRUCTURES
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            Whether you require an ongoing strategic PR retainer, a high-octane project campaign, or an integrated PR + technology suite, our commercial models scale with your mandate.
          </p>
        </motion.div>

        {/* Two-Column Matrix Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Strategic PR Engagement Models */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-[#2D5A54]">
              <span className="w-3 h-3 rounded-full bg-[#2D5A54]"></span>
              <h2 className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54]">
                1. STRATEGIC PR ENGAGEMENT MODELS
              </h2>
            </div>

            <div className="space-y-4">
              {prModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 sm:p-7 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-10 h-10 rounded-2xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider">
                          {model.badge}
                        </span>
                      </div>

                      <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54]">
                        {model.title}
                      </h3>

                      <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                        {model.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#D5D1C8]/60">
                        {model.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-3">
                      <button
                        type="button"
                        onClick={onNavigateContact}
                        className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Select This Model</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Commercial & Tech Engagements */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-[#2D5A54]">
              <span className="w-3 h-3 rounded-full bg-[#2D5A54]"></span>
              <h2 className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54]">
                2. COMMERCIAL & TECH ENGAGEMENTS
              </h2>
            </div>

            <div className="space-y-4">
              {commercialTechModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 sm:p-7 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] hover:border-[#2D5A54] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-10 h-10 rounded-2xl bg-[#2D5A54]/10 text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider">
                          {model.badge}
                        </span>
                      </div>

                      <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54]">
                        {model.title}
                      </h3>

                      <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                        {model.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#D5D1C8]/60">
                        {model.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs font-deck-body font-semibold text-[#2B2B2B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-3">
                      <button
                        type="button"
                        onClick={onNavigateContact}
                        className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white font-deck-body text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Select This Model</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Campaign Scope & PR ROI Estimator Component */}
        <div className="pt-4">
          <RoiCalculator onNavigateContact={onNavigateContact} />
        </div>

        {/* Bottom CTA Band */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A332F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-deck-headline text-2xl sm:text-3xl text-white">
              Discuss A Commercial Retainer With Our Partners
            </h3>
            <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] max-w-xl">
              Receive a detailed commercial quotation with defined KPIs, deliverables, and SLAs customized for your organization.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Request Commercial Proposal</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
