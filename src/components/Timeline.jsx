import React from 'react';
import { motion } from 'framer-motion';
import { processTimeline } from '../data/mockData';
import { Compass } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="about" className="pulse-section bg-[var(--bg-main)] transition-colors duration-300">
      <div className="pulse-container">
        {/* Top Manifesto: 2-Column Top-Aligned Layout with Generous Column Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 pb-16 border-b border-[var(--border-main)]">
          <div className="lg:col-span-5 space-y-4">
            <div className="pulse-eyebrow mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>THE PULSEPR MANIFESTO</span>
            </div>

            <h2 className="font-serif-headline text-3xl sm:text-4xl lg:text-[38px] font-bold text-[var(--text-primary)] leading-tight tracking-tight">
              We Don’t Write Generic Press Releases. We Shape Editorial History.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 font-sans-body text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed lg:pt-3">
            <p>
              Traditional public relations agencies operate on outdated monthly retainers with zero accountability, blasting blind emails to dead press lists. 
            </p>
            <p>
              PulsePR was established by former investigative editors and tech journalists who recognized that newsrooms have evolved. We function as a real-time newsroom interface: pairing proprietary data journalism with exclusive desk embargoes to land undisputed front-page features.
            </p>
          </div>
        </div>

        {/* 4-Stage Process Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono-data text-xs font-bold uppercase tracking-widest text-[var(--accent-red)]">
              THE 4-STAGE NEWSROOM PROTOCOL
            </span>
            <h3 className="font-serif-headline text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-2 tracking-tight">
              From Raw Milestone to Front-Page Syndication
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Horizontal Connecting Guide Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-[var(--border-main)] z-0"></div>

            {processTimeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-7 sm:p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] shadow-sm relative z-10 flex flex-col justify-between h-full min-h-[320px] hover:border-[var(--border-strong)] transition-all"
              >
                {/* Top Group: Step badge, Phase, Title, Description */}
                <div className="space-y-4">
                  {/* Step Number & Phase Badge Aligned on Same Baseline */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-[var(--text-primary)] text-[var(--bg-main)] font-mono-data font-black text-sm flex items-center justify-center shadow-sm">
                      {item.step}
                    </div>
                    <span className="font-mono-data text-[10.5px] font-bold uppercase tracking-widest text-[var(--accent-red)] px-2.5 py-1 rounded bg-[var(--accent-badge)]">
                      {item.phase}
                    </span>
                  </div>

                  <h4 className="font-serif-headline text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug pt-1">
                    {item.title}
                  </h4>

                  <p className="font-sans-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 mt-6 border-t border-dashed border-[var(--border-main)] font-mono-data text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>STAGE {index + 1} OF 4</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">● VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
