import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Landmark, ArrowRight } from 'lucide-react';
import { whoWeServeContent, brandMeta } from '../data/brandContent';
import FeatureCard from './FeatureCard';

export default function WhoWeServe({ onNavigateContact }) {
  const sectors = [
    {
      icon: Building,
      badge: "SECTOR 01",
      title: "Corporates & Pharma",
      subtitle: "Healthcare, Manufacturing & Regulated Industries",
      description: "Crisis mitigation, corporate profiling, tier-1 media placements, and industrial community engagement.",
      image: whoWeServeContent.sectors[0].image,
      bullets: [
        "Crisis & Reputation War Room",
        "Plant Launch & Press Wires",
        "Executive Thought Leadership"
      ]
    },
    {
      icon: Globe,
      badge: "SECTOR 02",
      title: "NGOs & Startups",
      subtitle: "Tourism, Hospitality & Social Impact Ventures",
      description: "Grassroots storytelling, beneficiary video documentaries, CSR funder reports, and consumer brand launches.",
      image: whoWeServeContent.sectors[1].image,
      bullets: [
        "CSR Impact Storytelling & TV Reels",
        "Hospitality & Lifestyle PR",
        "Community & Influencer Alignment"
      ]
    },
    {
      icon: Landmark,
      badge: "SECTOR 03",
      title: "Education & Government",
      subtitle: "Institutional Bodies & State Departments",
      description: "Public policy awareness, citizen outreach campaigns, state initiative documentation, and digital systems.",
      image: whoWeServeContent.sectors[2].image,
      bullets: [
        "State Public Awareness Campaigns",
        "Departmental PR & Policy Briefs",
        "Institutional Digital Transformation"
      ]
    }
  ];

  return (
    <section id="who-we-serve" className="deck-section bg-[#E5E3DE] scroll-mt-28">
      <div className="deck-container space-y-8 sm:space-y-12">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            WHO WE SERVE • SECTOR ARCHITECTURE
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
            Tailored Industry Frameworks
          </div>
          <h2 className="deck-section-title">
            SERVING ENTERPRISES, INSTITUTIONS & SOCIAL INNOVATORS
          </h2>
          <p className="deck-section-intro">
            From regulated pharmaceutical giants to grassroots conservation initiatives and state institutions, we design communications that connect with precision.
          </p>
        </motion.div>

        {/* 3 Sector Cards Grid (Standing Card System with Photo Banners) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                icon={sector.icon}
                badge={sector.badge}
                title={sector.title}
                subtitle={sector.subtitle}
                description={sector.description}
                image={sector.image}
                bullets={sector.bullets}
                ctaText="Explore Sector Solutions"
                ctaHref="#contact"
                onCtaClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
