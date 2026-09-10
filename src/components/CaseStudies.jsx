import React, { useState } from 'react';
import { caseStudies } from '../data/mockData';
import { Briefcase, Newspaper, ArrowRight, CheckCircle2, Sparkles, Building2, HeartHandshake, Cloud } from 'lucide-react';

const categoryTabs = [
  { label: 'All Stories', key: 'all', icon: Briefcase },
  { label: 'CSR & Community', key: 'CSR & Community Relations', icon: HeartHandshake },
  { label: 'Pharma & Corporate', key: 'Pharma & Corporate PR', icon: Building2 },
  { label: 'Cloud & Digital PR', key: 'Digital PR & Cloud Systems', icon: Cloud }
];

export default function CaseStudies({ onNavigateContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);

  const filteredStudies = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory);

  const activeCase = caseStudies.find(c => c.id === selectedCaseId) || filteredStudies[0] || caseStudies[0];

  const handleCategorySelect = (key) => {
    setSelectedCategory(key);
    const firstMatch = key === 'all' 
      ? caseStudies[0] 
      : caseStudies.find(c => c.category === key);
    if (firstMatch) {
      setSelectedCaseId(firstMatch.id);
    }
  };

  return (
    <section id="case-studies" className="py-14 sm:py-18 lg:py-22 bg-[#E5E3DE] border-b border-[#D5D1C8]">
      <div className="deck-container space-y-8 sm:space-y-10">
        {/* Slide Header Bar */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>PROVEN TRACK RECORD & CASE STUDIES</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
            REGIONAL IMPACT ARCHIVE
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="font-deck-headline text-3xl sm:text-4xl text-[#2D5A54] tracking-tight leading-tight">
            STRATEGIC PR CAMPAIGNS THAT DELIVERED MEASURABLE IMPACT
          </h2>
          <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
            Examine how Global Aadhar engineered editorial dominance, steered institutional narratives, and integrated digital systems for clients across Western India.
          </p>
        </div>

        {/* Clean Category Filter Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categoryTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = selectedCategory === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleCategorySelect(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-deck-body text-xs font-bold tracking-wide transition-all shrink-0 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-[#2D5A54] text-white shadow-sm'
                    : 'bg-[#EDEBE7] text-[#2B2B2B] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#E5E3DE]'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {filteredStudies.map((study) => {
            const isSelected = activeCase.id === study.id;

            return (
              <div
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className={`min-w-0 p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#EDEBE7] border-[#2D5A54] shadow-lg ring-2 ring-[#2D5A54]/20 -translate-y-1'
                    : 'bg-[#EDEBE7] border-[#D5D1C8] shadow-sm hover:shadow-md hover:border-[#2D5A54]/60 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  {/* Card Header: Category (Left) + Client (Right) */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#D5D1C8]/60">
                    <span className="font-deck-body text-[10.5px] font-bold text-[#2D5A54] uppercase tracking-wider truncate">
                      {study.category.split('&')[0].trim()}
                    </span>

                    <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-[10px] font-semibold">
                      {study.client.split('&')[0].trim()}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h3 className="font-deck-headline text-base sm:text-lg text-[#2D5A54] tracking-tight leading-snug mb-3 min-h-[3.25rem] flex items-start">
                    {study.headline}
                  </h3>

                  {/* Summary */}
                  <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed mb-4 min-h-[3.5rem] line-clamp-3">
                    {study.summary}
                  </p>
                </div>

                {/* Bottom Row: Publications & Interactive Button */}
                <div className="pt-3 border-t border-[#D5D1C8] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {study.featuredIn.slice(0, 2).map((pub, idx) => (
                      <span
                        key={idx}
                        className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-[#E5E3DE] text-[#2D5A54] border border-[#D5D1C8]"
                      >
                        {pub}
                      </span>
                    ))}
                  </div>

                  <span className={`text-xs font-bold font-deck-body shrink-0 transition-colors ${
                    isSelected ? 'text-[#2D5A54] font-extrabold' : 'text-[#555555] group-hover:text-[#2D5A54]'
                  }`}>
                    {isSelected ? 'Active Details •' : 'Explore →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Expanded Impact Story Panel */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#EDEBE7] border border-[#2D5A54] shadow-md relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#2D5A54]/5 blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Story & Client Quote */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[#2D5A54] text-xs font-bold font-deck-body uppercase tracking-wider shadow-2xs">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Featured Campaign: {activeCase.client}</span>
              </div>

              <h3 className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54] leading-snug">
                {activeCase.headline}
              </h3>

              <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                {activeCase.summary}
              </p>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-[#E5E3DE] border-l-4 border-[#2D5A54] space-y-1 shadow-2xs">
                <p className="font-deck-body text-xs sm:text-sm italic text-[#2B2B2B] font-medium leading-relaxed">
                  "{activeCase.quote}"
                </p>
                <div className="text-[11px] font-bold text-[#2D5A54] font-deck-body pt-1">
                  — {activeCase.author}
                </div>
              </div>
            </div>

            {/* Metrics & Action Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {activeCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] hover:border-[#2D5A54]/50 text-center shadow-2xs transition-colors">
                    <div className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54]">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-bold text-[#555555] font-deck-body mt-1 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
                className="w-full btn-primary-teal text-xs py-3 justify-center shadow-md cursor-pointer"
              >
                <span>Initiate A Similar Campaign Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
