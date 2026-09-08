import React, { useState } from 'react';
import { caseStudies } from '../data/mockData';
import { Briefcase, Newspaper } from 'lucide-react';

export default function CaseStudies({ onOpenBooking }) {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0].id);

  const activeCase = caseStudies.find(c => c.id === selectedCase) || caseStudies[0];

  return (
    <section id="case-studies" className="section-wrapper bg-slate-900/40">
      <div className="main-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Proven Media Track Record</span>
          </div>
          <h2 className="section-title">
            Headlines That Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">
              Transformational Market Impact
            </span>
          </h2>
          <p className="section-desc">
            Explore how we secured front-page editorial dominance, steered crisis narratives, and generated hundreds of millions in brand equity.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {caseStudies.map((study) => {
            const isSelected = selectedCase === study.id;
            return (
              <div
                key={study.id}
                onClick={() => setSelectedCase(study.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all border relative flex flex-col justify-between ${
                  isSelected
                    ? 'glass-panel border-indigo-500/60 shadow-md -translate-y-0.5'
                    : 'glass-card border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase">
                      {study.category}
                    </span>
                    <span className="text-[9px] font-semibold px-2 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1.5">
                    {study.headline}
                  </h3>

                  <p className="text-[11px] text-slate-400 line-clamp-2 mb-2.5">
                    {study.summary}
                  </p>
                </div>

                {/* Placements badges */}
                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1 flex-wrap">
                    {study.featuredIn.slice(0, 3).map((pub, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/20"
                      >
                        {pub}
                      </span>
                    ))}
                  </div>
                  <span className={`text-[11px] font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`}>
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Deep Dive Section */}
        <div className="glass-panel p-5 sm:p-7 border border-indigo-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold">
                <Newspaper className="w-3 h-3" />
                Featured Campaign: {activeCase.client}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {activeCase.headline}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activeCase.summary}
              </p>

              {/* Quote */}
              <div className="p-3 rounded-2xl bg-slate-900 border-l-4 border-indigo-500 space-y-1">
                <p className="text-xs italic text-slate-200 font-medium">
                  {activeCase.quote}
                </p>
                <div className="text-[10px] font-bold text-indigo-400">
                  — {activeCase.author}
                </div>
              </div>
            </div>

            {/* Metrics column */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                {activeCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full btn-primary text-xs py-2"
              >
                Secure Similar Media Results for Your Brand
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
