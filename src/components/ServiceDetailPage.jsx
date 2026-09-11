import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Video, CalendarCheck, HeartHandshake, TrendingUp, Cloud, 
  ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, BarChart3, Layers, CheckCircle2
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

export default function ServiceDetailPage({ 
  serviceId = 'gov-relations', 
  onNavigateHome, 
  onNavigateContact, 
  onSelectService 
}) {
  const services = coreServicesContent.services;
  const currentService = services.find(s => s.id === serviceId) || services[0];
  const Icon = serviceIcons[currentService.id] || Layers;
  const [selectedPrVideo, setSelectedPrVideo] = useState('LXb3EKWsInQ');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.location.hash = '#contact';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] pt-6 pb-20 sm:pt-8 sm:pb-24"
    >
      <div className="deck-container space-y-6 sm:space-y-8">
        {/* 1. SLIDE HEADER BAR & NAVIGATION */}
        <div className="space-y-4">
          <div className="slide-header-bar">
            <div className="flex items-center gap-2 text-[#2D5A54] font-deck-body font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
              <span>{brandMeta.name}</span>
            </div>
            <div className="text-[#555555] font-deck-body text-[10px] sm:text-[11px] tracking-widest uppercase">
              SLIDE 04.{currentService.number} • PILLAR DEEP DIVE • {currentService.title}
            </div>
          </div>

          {/* Top Control Bar: Return Button + Pill Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 bg-[#EDEBE7] p-3 sm:p-4 rounded-2xl border border-[#D5D1C8] shadow-xs">
            {/* Back Button */}
            <button
              onClick={() => onNavigateHome ? onNavigateHome() : (window.location.hash = '#services')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E5E3DE] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white border border-[#D5D1C8] text-xs font-deck-body font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shrink-0 shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>← Back to All 6 Services</span>
            </button>

            {/* 6 Pillars Quick Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {services.map((service) => {
                const isActive = currentService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      if (onSelectService) onSelectService(service.id);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-deck-body text-[11px] font-bold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#2D5A54] text-white shadow-xs font-extrabold'
                        : 'bg-[#E5E3DE] text-[#2B2B2B] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#EDEBE7]'
                    }`}
                  >
                    <span>{service.number}.</span>
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. MAIN PILLAR DEEP DIVE CARD (Matching Image 2 Reference) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-md space-y-8"
          >
            {/* Header Banner Inside Card */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#D5D1C8]">
              <div className="space-y-1.5 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
                  <span className="font-deck-body text-xs font-bold text-[#2D5A54] uppercase tracking-widest">
                    SERVICE PILLAR {currentService.number}
                  </span>
                </div>
                <h1 className="font-deck-headline text-3xl sm:text-4xl text-[#2D5A54] tracking-tight">
                  {currentService.title}
                </h1>
              </div>

              <div className="max-w-xl md:text-right">
                <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] font-medium leading-relaxed">
                  {currentService.tagline || currentService.intro || currentService.copy}
                </p>
              </div>
            </motion.div>

            {/* 3 Capability Cards Grid (Visible Immediately Above the Fold) */}
            {currentService.items && (
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
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
                    ctaText="EXPLORE SOLUTION"
                    ctaHref="#contact"
                    onCtaClick={handleCtaClick}
                  />
                ))}
              </motion.div>
            )}

            {/* Specific for Events & Experiences: 4-Step Process Pipeline */}
            {currentService.processSteps && (
              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-[#D5D1C8] space-y-5">
                <div className="space-y-1">
                  <span className="font-deck-body text-xs font-bold text-[#2D5A54] uppercase tracking-wider">
                    EXECUTION PIPELINE
                  </span>
                  <h3 className="font-deck-headline text-xl text-[#2D5A54]">
                    4-Phase Experiential Delivery Model
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {currentService.processSteps.map((stepItem, idx) => (
                    <FeatureCard
                      key={stepItem.step}
                      icon={`0${idx + 1}`}
                      badge={`PHASE 0${idx + 1}`}
                      title={stepItem.step}
                      description={stepItem.description}
                      bullets={["End-to-End Delivery Assurance"]}
                      ctaText="EXPLORE SOLUTION"
                      ctaHref="#contact"
                      onCtaClick={handleCtaClick}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Specific for Media Production: Capgemini-Style Split Band Video Showcases (One by One) */}
            {currentService.id === 'media-production' && (
              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-[#D5D1C8] space-y-6 sm:space-y-8">
                {[
                  {
                    number: "01",
                    eyebrow: "STRATEGIC COMMUNICATIONS IN ACTION",
                    headline: "We deliver real value",
                    subtitle: "Through our narrative-first approach, broadcast media network, and high-production storytelling across Goa and Western India.",
                    videoId: "LXb3EKWsInQ",
                    tag: "4K Ultra HD Commercial",
                    spec: "Cinema Rigging • Script-to-Screen Direction"
                  },
                  {
                    number: "02",
                    eyebrow: "REGIONAL PRESS & BROADCAST WIRES",
                    headline: "Amplifying Reach Across Media",
                    subtitle: "Broadcast-ready press conferences, executive interviews, and regional TV news coverage ensuring your announcements lead headlines.",
                    videoId: "M7lc1UVf-VE",
                    tag: "Broadcast Media Wire",
                    spec: "Press Management • Live News Feed"
                  },
                  {
                    number: "03",
                    eyebrow: "AUTHENTIC STAKEHOLDER STORYTELLING",
                    headline: "Inspiring Confidence & Trust",
                    subtitle: "On-ground documentary filmmaking and beneficiary video stories connecting corporate social responsibility mandates with community trust.",
                    videoId: "ScMzIvxBSi4",
                    tag: "CSR Impact Documentary",
                    spec: "Field Production • Multilingual Dubbing"
                  }
                ].map((item, idx) => (
                  <div
                    key={item.number}
                    className="relative rounded-3xl overflow-hidden bg-[#1A332F] text-white border border-[#2D5A54] shadow-2xl p-6 sm:p-10 lg:p-12"
                  >
                    {/* Ambient Glow */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#2D5A54]/30 blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Left Column: Messaging */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                          <span className="font-deck-body text-[11px] font-bold text-emerald-300 uppercase tracking-[0.2em]">
                            {item.eyebrow} • {item.number}
                          </span>
                        </div>

                        <h3 className="font-deck-headline text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                          {item.headline}
                        </h3>

                        <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] leading-relaxed">
                          {item.subtitle}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-2 font-deck-body text-[11px] text-[#EDEBE7]">
                          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 font-semibold text-emerald-200">
                            {item.tag}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D5D1C8]">
                            {item.spec}
                          </span>
                        </div>
                      </div>

                      {/* Right Column: Floating 16:9 Video Player (Capgemini Style) */}
                      <div className="lg:col-span-7">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black aspect-video group">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                            title={`Global Aadhar Video Showcase ${item.number} - ${item.headline}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-deck-body text-[#D5D1C8]/80 pt-3 px-1">
                          <span>✦ 4K Ultra HD Broadcast Quality</span>
                          <span>Global Aadhar Panjim Bureau</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Specific for Digital Marketing: Growth Chart + Callouts */}
            {currentService.id === 'digital-marketing' && (
              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-[#D5D1C8]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-deck-headline text-xl text-[#2D5A54]">
                      Integrated Digital Execution & Resonance
                    </h3>
                    <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                      {currentService.copy}
                    </p>
                    <div className="space-y-2.5 pt-2">
                      {currentService.callouts.map((pill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] font-deck-body text-xs font-semibold text-[#2B2B2B]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#2D5A54] shrink-0"></span>
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] space-y-3">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#D5D1C8]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#2D5A54]">
                        <BarChart3 className="w-3.5 h-3.5 text-[#2D5A54]" />
                        <span>DIGITAL REACH VELOCITY</span>
                      </div>
                      <span className="font-deck-body text-[10px] font-bold text-[#2D5A54] bg-[#2D5A54]/10 border border-[#2D5A54]/20 px-2 py-0.5 rounded-full">
                        +240% Lift
                      </span>
                    </div>

                    <div className="pt-2 pb-1">
                      <svg viewBox="0 0 320 120" className="w-full h-28 overflow-visible">
                        <defs>
                          <linearGradient id="chartGradServicesPage" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2D5A54" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#2D5A54" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <line x1="10" y1="100" x2="310" y2="100" stroke="#D5D1C8" strokeWidth="1" />
                        <line x1="10" y1="60" x2="310" y2="60" stroke="#D5D1C8" strokeWidth="1" strokeDasharray="3,3" />
                        <polygon points="10,95 80,75 150,55 220,35 290,15 290,100 10,100" fill="url(#chartGradServicesPage)" />
                        <polyline fill="none" stroke="#2D5A54" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="10,95 80,75 150,55 220,35 290,15" />
                        {[{ x: 10, y: 95 }, { x: 80, y: 75 }, { x: 150, y: 55 }, { x: 220, y: 35 }, { x: 290, y: 15 }].map((pt, idx) => (
                          <circle key={idx} cx={pt.x} cy={pt.y} r="4" fill="#2D5A54" stroke="#FFFFFF" strokeWidth="2" />
                        ))}
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#555555] font-semibold pt-1 border-t border-[#D5D1C8]">
                      <span>Social & Video Impressions</span>
                      <span className="text-[#2D5A54] font-bold">+3.8x Growth</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bottom Action Footer */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-[#D5D1C8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-deck-body text-[#555555]">
                <Sparkles className="w-4 h-4 text-[#2D5A54]" />
                <span>Need tailored execution for {currentService.title}?</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCtaClick}
                  className="btn-primary-teal text-xs py-2.5 px-6 shadow-xs cursor-pointer"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
