import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Video, CalendarCheck, HeartHandshake, TrendingUp, Cloud, 
  ArrowRight, Layers, Play, CheckCircle2, ArrowUpRight, BarChart2 
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

const serviceBadges = {
  'gov-relations': '01 • GOVT & POLICY',
  'media-production': '02 • BROADCAST & PR',
  'events-experiences': '03 • EXPERIENTIAL',
  'csr-communication': '04 • CSR IMPACT',
  'digital-marketing': '05 • DIGITAL ROI',
  'technology-solutions': '06 • SUMANT CLOUD'
};

export default function Services({ onNavigateService, onNavigateContact, showVideoShowcase = true }) {
  const services = coreServicesContent.services;
  const [selectedPrVideo, setSelectedPrVideo] = useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handleCardClick = (serviceId) => {
    if (onNavigateService) {
      onNavigateService(serviceId);
    } else {
      window.location.hash = `#service/${serviceId}`;
    }
  };

  const videoShowcases = [
    {
      number: "01",
      eyebrow: "STRATEGIC COMMUNICATIONS IN ACTION",
      headline: "We deliver real value",
      subtitle: "Through our narrative-first approach, broadcast media network, and high-production storytelling across Goa and Western India.",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&w=1600&q=80",
      videoId: "LXb3EKWsInQ",
      tag: "4K Ultra HD Commercial",
      spec: "Cinema Rigging • Script-to-Screen Direction",
      status: "Production Reel in Curation • Available on Request",
      zIndex: "z-10",
      topSticky: "top-24 sm:top-28"
    },
    {
      number: "02",
      eyebrow: "REGIONAL PRESS & BROADCAST WIRES",
      headline: "Amplifying Reach Across Media",
      subtitle: "Broadcast-ready press conferences, executive interviews, and regional TV news coverage ensuring your announcements lead headlines.",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1600&q=80",
      videoId: "M7lc1UVf-VE",
      tag: "Broadcast Media Wire",
      spec: "Press Management • Live News Feed",
      status: "Broadcast Footage in Curation • Available on Request",
      zIndex: "z-20",
      topSticky: "top-28 sm:top-36"
    },
    {
      number: "03",
      eyebrow: "AUTHENTIC STAKEHOLDER STORYTELLING",
      headline: "Inspiring Confidence & Trust",
      subtitle: "On-ground documentary filmmaking and beneficiary video stories connecting corporate social responsibility mandates with community trust.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      videoId: "ScMzIvxBSi4",
      tag: "CSR Impact Documentary",
      spec: "Field Production • Multilingual Dubbing",
      status: "Documentary Reel in Curation • Available on Request",
      zIndex: "z-30",
      topSticky: "top-32 sm:top-44"
    }
  ];

  return (
    <section id="services" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            OUR SIX CORE SERVICES • INTEGRATED CAPABILITIES
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-3xl"
        >
          <div className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
            Full-Spectrum Communications Spectrum
          </div>
          <h2 className="deck-section-title">
            OUR SIX CORE SERVICES
          </h2>
          <p className="deck-section-intro">
            {coreServicesContent.overviewIntro}
          </p>
        </motion.div>

        {/* The 6 Core Services Grid (Standing Card System) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Layers;
            const badge = serviceBadges[service.id] || `SERVICE 0${idx + 1}`;
            const bullets = (service.items || []).map(item => item.title || item.step || item.description);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="h-full"
              >
                <FeatureCard
                  icon={Icon}
                  badge={badge}
                  title={service.title}
                  description={service.tagline || service.intro || service.copy}
                  bullets={bullets.slice(0, 3)}
                  image={service.image}
                  ctaText="Explore Capability"
                  ctaHref={`#service/${service.id}`}
                  onCtaClick={() => handleCardClick(service.id)}
                />
              </motion.div>
            );
          })}
        </div>

        {/* STANDING PROCESS COMPONENT: EVENTS & EXPERIENCES STEP TIMELINE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D5D1C8] pb-4">
            <div className="space-y-1">
              <span className="text-[10.5px] font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
                Event Execution Blueprint
              </span>
              <h3 className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54]">
                EVENTS & EXPERIENCES DELIVERY LIFECYCLE
              </h3>
            </div>
            <span className="text-xs font-deck-body font-semibold text-[#555555]">
              Seamless On-Ground & Media Coordination
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {[
              { stage: "01", name: "Plan", desc: "Define messaging, VIP stakeholder mapping, venue selection & press framework." },
              { stage: "02", name: "Produce", desc: "Stage production, AV rigging, media kit collation & multi-channel invites." },
              { stage: "03", name: "Execute", desc: "Flawless on-ground coordination, executive guest management & live media feed." },
              { stage: "04", name: "Amplify", desc: "Post-event broadcast clips, wire distribution, photo releases & impact metrics." }
            ].map((step, sIdx) => (
              <motion.div 
                key={sIdx} 
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] flex flex-col justify-between space-y-2.5 group hover:border-[#2D5A54] hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#2D5A54] text-white flex items-center justify-center font-deck-headline text-xs font-bold shadow-2xs group-hover:scale-110 transition-transform">
                    {step.stage}
                  </span>
                  <span className="font-deck-headline text-base text-[#2D5A54]">
                    {step.name}
                  </span>
                </div>
                <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CAPGEMINI-STYLE STACKING YOUTUBE VIDEO DECK */}
        {showVideoShowcase && (
          <div id="media-showcase-player" className="relative pt-4 scroll-mt-28 space-y-8 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
                  Media Production & Broadcast Wire
                </span>
                <h3 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
                  CINEMATIC STORYTELLING & PRESS SHOWCASES
                </h3>
              </div>

              {/* Video Quick Switcher Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {videoShowcases.map((v, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPrVideo(idx)}
                    className={`px-3.5 py-1.5 rounded-xl font-deck-body text-xs font-bold transition-all cursor-pointer ${
                      selectedPrVideo === idx 
                        ? 'bg-[#2D5A54] text-white shadow-xs' 
                        : 'bg-[#EDEBE7] text-[#555555] border border-[#D5D1C8] hover:border-[#2D5A54]'
                    }`}
                  >
                    Video {v.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky Stacking Deck Container */}
            <div className="relative space-y-8 sm:space-y-12">
              {videoShowcases.map((item, idx) => {
                const isHovered = selectedPrVideo === idx;

                return (
                  <motion.div
                    key={item.number}
                    onMouseEnter={() => setSelectedPrVideo(idx)}
                    animate={{
                      scale: isHovered ? 1.01 : 0.985,
                      y: isHovered ? 0 : 6,
                      opacity: isHovered ? 1 : 0.92
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`sticky ${item.topSticky} ${item.zIndex} rounded-3xl overflow-hidden bg-[#1A332F] text-white border-2 ${
                      isHovered ? 'border-emerald-400/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]' : 'border-[#2D5A54] shadow-2xl'
                    } p-6 sm:p-10 lg:p-12 transition-all duration-700 ease-out`}
                  >
                    {/* Ambient Glow */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#2D5A54]/30 blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Left Column: Messaging */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 ring-4 ring-emerald-500/20"></span>
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

                      {/* Right Column: Floating 16:9 Showcase Frame */}
                      <div className="lg:col-span-7">
                        {playingVideoIndex === idx ? (
                          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-emerald-400 shadow-2xl bg-black aspect-video">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                              title={`Global Aadhar Video Showcase ${item.number} - ${item.headline}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingVideoIndex(null);
                              }}
                              className="absolute top-3 right-3 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-deck-body font-bold border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg z-20"
                            >
                              ✕ Close Video
                            </button>
                          </div>
                        ) : (
                          <div 
                            onClick={() => setPlayingVideoIndex(idx)}
                            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black aspect-video group cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={`Global Aadhar Production Showcase ${item.number} - ${item.headline}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-between p-5 sm:p-6">
                              <div className="flex justify-end">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10.5px] font-semibold text-emerald-300 font-deck-body">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  Click to Play Showcase
                                </span>
                              </div>

                              <div className="flex items-center gap-3 sm:gap-4">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setPlayingVideoIndex(idx);
                                  }}
                                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300 shrink-0 cursor-pointer border-2 border-white/40"
                                >
                                  <Play className="w-6 h-6 fill-white ml-0.5" />
                                </button>
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-white font-deck-body group-hover:text-emerald-300 transition-colors">
                                    {item.status}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] text-[#D5D1C8] font-deck-body">
                                    Click to Watch • Broadcast & 4K Master Asset
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center justify-between text-[11px] font-deck-body text-[#D5D1C8]/80 pt-3 px-1">
                          <span>✦ {item.tag}</span>
                          <span>Global Aadhar Panjim Bureau</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
