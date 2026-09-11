import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Landmark, ArrowRight, CheckCircle2, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';
import { whoWeServeContent } from '../data/brandContent';
import FeatureCard from '../components/FeatureCard';
import CaseStudies from '../components/CaseStudies';

const sectorDeepDives = [
  {
    icon: Building,
    badge: "SECTOR 01",
    title: "Corporates & Pharma",
    subtitle: "Healthcare, Manufacturing & Regulated Industries",
    description: "Crisis mitigation, corporate profiling, tier-1 media placements, and industrial community engagement across Western India.",
    image: whoWeServeContent.sectors[0].image,
    bullets: [
      "Crisis & Reputation War Room Management",
      "Plant Launch & Industrial Press Wires",
      "Executive Thought Leadership & Op-Eds",
      "Compliance & Environmental PR Statements"
    ],
    clientType: "Pharmaceutical Giants, Chemical Manufacturers, Tech Enterprises"
  },
  {
    icon: Globe,
    badge: "SECTOR 02",
    title: "NGOs & Startups",
    subtitle: "Tourism, Hospitality & Social Impact Ventures",
    description: "Grassroots storytelling, beneficiary video documentaries, CSR funder reports, and consumer lifestyle brand launches.",
    image: whoWeServeContent.sectors[1].image,
    bullets: [
      "CSR Impact Storytelling & TV Reels",
      "Hospitality & Eco-Tourism Media PR",
      "Community & Influencer Stakeholder Alignment",
      "Funder & Statutory Impact Dossiers"
    ],
    clientType: "Environmental Foundations, Luxury Resorts, Social Innovators"
  },
  {
    icon: Landmark,
    badge: "SECTOR 03",
    title: "Education & Government",
    subtitle: "Institutional Bodies & State Departments",
    description: "Public policy awareness, citizen outreach campaigns, state initiative documentation, and digital transformation systems.",
    image: whoWeServeContent.sectors[2].image,
    bullets: [
      "State Public Awareness Campaigns",
      "Departmental PR & Policy Briefs",
      "Institutional Summit Media Rigging",
      "Digital Portals & Citizen Communication"
    ],
    clientType: "State Departments, Universities, Statutory Authorities"
  }
];

export default function WhoWeServePage({ onNavigateContact, onNavigateHome }) {
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
          <span className="text-[#2B2B2B]">Who We Serve</span>
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
            <span>INDUSTRY ARCHITECTURE</span>
          </div>

          <h1 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-[#1A332F] tracking-tight leading-[1.08]">
            SERVING ENTERPRISES, INSTITUTIONS & SOCIAL INNOVATORS
          </h1>

          <p className="font-deck-body text-base sm:text-lg text-[#2B2B2B] leading-relaxed max-w-3xl">
            From regulated pharmaceutical giants to grassroots conservation initiatives and state institutions, we design communications that connect with precision.
          </p>
        </motion.div>

        {/* 3 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {sectorDeepDives.map((sector, idx) => (
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
                ctaText="Discuss Sector Mandate"
                ctaHref="#contact"
                onCtaClick={onNavigateContact}
              />
            </motion.div>
          ))}
        </div>

        {/* Proven Sector Impact & Case Studies Slider */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#D5D1C8] pb-3">
            <span className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
              Cross-Sector Track Record
            </span>
            <h2 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
              PROVEN RESULTS ACROSS SECTORS
            </h2>
          </div>

          <CaseStudies onNavigateContact={onNavigateContact} />
        </div>

        {/* Bottom CTA Band */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A332F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-deck-headline text-2xl sm:text-3xl text-white">
              Connect With Our Sector Strategists
            </h3>
            <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8] max-w-xl">
              Tell us about your industry sector and upcoming announcements to receive a customized communications framework.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-primary-teal px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Consult Sector Lead</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
