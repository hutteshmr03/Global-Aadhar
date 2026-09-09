import React, { useState } from 'react';
import { caseStudies } from '../data/mockData';
import { Briefcase, Newspaper, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudies({ onNavigateContact }) {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0].id);

  const activeCase = caseStudies.find(c => c.id === selectedCase) || caseStudies[0];

  return (
    <section id="case-studies" className="py-14 sm:py-18 lg:py-22 bg-[#E5E3DE] border-b border-[#D5D1C8]">
      <div className="deck-container">
        {/* Slide Header Bar */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#2D5A54]">
            <span className="w-2 h-2 rounded-full bg-[#2D5A54]"></span>
            <span>PROVEN TRACK RECORD & CASE STUDIES</span>
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] text-[#555555] tracking-widest">
            REGIONAL IMPACT ARCHIVE
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 space-y-2">
          <h2 className="font-deck-headline text-3xl sm:text-4xl text-[#2D5A54] tracking-tight">
            Strategic PR Campaigns That Delivered Measurable Impact
          </h2>
          <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] max-w-2xl leading-relaxed">
            Examine how Global Aadhar engineered editorial dominance, steered institutional narratives, and integrated digital systems for clients across Western India.
          </p>
        </div>

        {/* Case Study Selection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {caseStudies.map((study) => {
            const isSelected = selectedCase === study.id;
            return (
              <div
                key={study.id}
                onClick={() => setSelectedCase(study.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#EDEBE7] border-[#2D5A54] shadow-md -translate-y-0.5'
                    : 'bg-[#EDEBE7]/60 border-[#D5D1C8] hover:border-[#2D5A54]/60 hover:bg-[#EDEBE7]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-bold text-[#2D5A54] tracking-wider uppercase font-deck-body">
                      {study.category}
                    </span>
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#E5E3DE] text-[#2B2B2B] border border-[#D5D1C8]">
                      {study.client.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="font-deck-headline text-sm sm:text-base text-[#2D5A54] leading-snug mb-2">
                    {study.headline}
                  </h3>

                  <p className="font-deck-body text-xs text-[#2B2B2B] line-clamp-2 mb-3 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Placements Badges */}
                <div className="pt-3 border-t border-[#D5D1C8] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {study.featuredIn.slice(0, 2).map((pub, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#E5E3DE] text-[#2D5A54] border border-[#D5D1C8]"
                      >
                        {pub}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-bold font-deck-body ${isSelected ? 'text-[#2D5A54]' : 'text-[#555555]'}`}>
                    {isSelected ? 'Active View' : 'Explore →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Feature Panel */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#EDEBE7] border border-[#2D5A54] shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Story & Quote Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[#2D5A54] text-xs font-bold font-deck-body uppercase tracking-wider">
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
              <div className="p-4 rounded-xl bg-[#E5E3DE] border-l-4 border-[#2D5A54] space-y-1">
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
                  <div key={idx} className="p-3.5 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] text-center">
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
