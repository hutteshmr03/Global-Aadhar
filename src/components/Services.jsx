import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Video, CalendarCheck, HeartHandshake, TrendingUp, Cloud, 
  ArrowRight, Layers 
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

  const handleCardClick = (serviceId) => {
    if (onNavigateService) {
      onNavigateService(serviceId);
    } else {
      window.location.hash = `#service/${serviceId}`;
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
      </div>
    </section>
  );
}
