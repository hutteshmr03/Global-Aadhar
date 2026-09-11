import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Video, CalendarCheck, HeartHandshake, TrendingUp, Cloud, 
  ArrowRight, Layers, Play 
} from 'lucide-react';
import { coreServicesContent, brandMeta } from '../data/brandContent';

const serviceIcons = {
  'gov-relations': Building2,
  'media-production': Video,
  'events-experiences': CalendarCheck,
  'csr-communication': HeartHandshake,
  'digital-marketing': TrendingUp,
  'technology-solutions': Cloud
};

export default function Services({ onNavigateService }) {
  const services = coreServicesContent.services;
  const [selectedPrVideo, setSelectedPrVideo] = useState(0);

  const handleCardClick = (serviceId) => {
    if (onNavigateService) {
      onNavigateService(serviceId);
    } else {
      window.location.hash = `#service/${serviceId}`;
    }
  };

  const scrollToVideoShowcase = (e) => {
    e.stopPropagation();
    const el = document.getElementById('media-showcase-player');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container space-y-8 sm:space-y-10">
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
          className="space-y-3 max-w-3xl"
        >
          <h2 className="deck-section-title">
            OUR SIX CORE SERVICES
          </h2>
          <p className="deck-section-intro">
            {coreServicesContent.overviewIntro}
          </p>
        </motion.div>

        {/* The 6 Service Headline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Layers;
            const isMediaProduction = service.id === 'media-production';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="min-w-0 bg-[#EDEBE7] rounded-2xl border border-[#D5D1C8] shadow-sm hover:shadow-xl hover:border-[#2D5A54] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Clean Thematic Background Image Banner */}
                  {service.image && (
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      {/* Subtle Ambient Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#23413C]/70 via-transparent to-black/20"></div>

                      {/* Icon Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-md text-white border border-white/30 flex items-center justify-center font-bold shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Media Production Video Badge */}
                      {isMediaProduction && (
                        <div className="absolute top-3.5 right-3.5">
                          <button
                            type="button"
                            onClick={scrollToVideoShowcase}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D5A54]/90 hover:bg-[#2D5A54] text-white border border-white/30 text-[10.5px] font-deck-body font-bold uppercase tracking-wider backdrop-blur-md shadow-md cursor-pointer animate-pulse hover:animate-none"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Watch Reel</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Body Content */}
                  <div className="p-5 sm:p-6 lg:p-7">
                    {/* Fallback icon if no image */}
                    {!service.image && (
                      <div className="w-10 h-10 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center font-bold font-deck-headline text-sm mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                    )}

                    {/* Headline Title */}
                    <h3 className="font-deck-headline text-xl text-[#2D5A54] tracking-tight leading-snug mb-2.5 min-h-[3rem] flex items-center">
                      {service.title}
                    </h3>

                    {/* Tagline / Description */}
                    <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-4 min-h-[3.75rem] line-clamp-3">
                      {service.tagline || service.intro || service.copy}
                    </p>

                    {/* Divider Line */}
                    <div className="w-full border-t border-[#D5D1C8] my-4"></div>

                    {/* Key Capabilities Preview */}
                    <div className="space-y-2 mb-2">
                      {(service.items || service.processSteps || []).slice(0, 3).map((subItem, i) => (
                        <div key={i} className="flex items-center gap-2 font-deck-body text-xs text-[#2B2B2B] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A54] shrink-0"></span>
                          <span className="truncate">{subItem.title || subItem.step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleCardClick(service.id)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] group-hover:border-[#2D5A54] text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white font-deck-body font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer"
                  >
                    <span>Explore Pillar Capabilities</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CAPGEMINI-STYLE INTERACTIVE STACKING YOUTUBE VIDEO DECK */}
        <div id="media-showcase-player" className="relative pt-4 scroll-mt-28 space-y-8 sm:space-y-12">
          {/* Sticky Stacking Deck Container */}
          <div className="relative space-y-8 sm:space-y-12">
            {[
              {
                number: "01",
                eyebrow: "STRATEGIC COMMUNICATIONS IN ACTION",
                headline: "We deliver real value",
                subtitle: "Through our narrative-first approach, broadcast media network, and high-production storytelling across Goa and Western India.",
                videoId: "LXb3EKWsInQ",
                tag: "4K Ultra HD Commercial",
                spec: "Cinema Rigging • Script-to-Screen Direction",
                zIndex: "z-10",
                topSticky: "top-24 sm:top-28"
              },
              {
                number: "02",
                eyebrow: "REGIONAL PRESS & BROADCAST WIRES",
                headline: "Amplifying Reach Across Media",
                subtitle: "Broadcast-ready press conferences, executive interviews, and regional TV news coverage ensuring your announcements lead headlines.",
                videoId: "M7lc1UVf-VE",
                tag: "Broadcast Media Wire",
                spec: "Press Management • Live News Feed",
                zIndex: "z-20",
                topSticky: "top-28 sm:top-36"
              },
              {
                number: "03",
                eyebrow: "AUTHENTIC STAKEHOLDER STORYTELLING",
                headline: "Inspiring Confidence & Trust",
                subtitle: "On-ground documentary filmmaking and beneficiary video stories connecting corporate social responsibility mandates with community trust.",
                videoId: "ScMzIvxBSi4",
                tag: "CSR Impact Documentary",
                spec: "Field Production • Multilingual Dubbing",
                zIndex: "z-30",
                topSticky: "top-32 sm:top-44"
              }
            ].map((item, idx) => {
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
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
