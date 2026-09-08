import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Landmark, ArrowUpRight } from 'lucide-react';
import { whoWeServeContent, brandMeta } from '../data/brandContent';

import FeatureCard from './FeatureCard';

const sectorIcons = [Building, Globe, Landmark];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555]">
            SLIDE 06 • CLIENT SECTORS
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
            {whoWeServeContent.headline}
          </h2>
          <p className="deck-section-intro">
            From multinational healthcare conglomerates to regional government bodies, we craft tailored communications ecosystems for diverse industries.
          </p>
        </motion.div>

        {/* 3 Sector Cards (Standard Modern SaaS Feature Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {[
            {
              icon: Building,
              badge: "SECTOR 01",
              title: "Corporates & Pharma",
              subtitle: "Healthcare, Manufacturing & Corporate Enterprises",
              image: whoWeServeContent.sectors[0].image,
              bullets: [
                "Crisis & Reputation Management",
                "Product Launch Campaigns",
                "Corporate Storytelling Films"
              ]
            },
            {
              icon: Globe,
              badge: "SECTOR 02",
              title: "NGOs & Startups",
              subtitle: "Tourism, Hospitality & Social Ventures",
              image: whoWeServeContent.sectors[1].image,
              bullets: [
                "Grassroots Community PR",
                "CSR Impact Documentation",
                "Media & Influencer Outreach"
              ]
            },
            {
              icon: Landmark,
              badge: "SECTOR 03",
              title: "Education & Government",
              subtitle: "Institutional Bodies & Public Departments",
              image: whoWeServeContent.sectors[2].image,
              bullets: [
                "Public Awareness Initiatives",
                "Departmental Coordination",
                "Digital Governance Portals"
              ]
            }
          ].map((sector, idx) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="h-full"
            >
              <FeatureCard
                icon={sector.icon}
                badge={sector.badge}
                title={sector.title}
                subtitle={sector.subtitle}
                image={sector.image}
                bullets={sector.bullets}
                ctaText="Explore Sector Solutions"
                ctaHref="#contact"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

