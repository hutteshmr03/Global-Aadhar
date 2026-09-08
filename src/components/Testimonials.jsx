import React from 'react';
import { motion } from 'framer-motion';
import { clientTestimonials } from '../data/mockData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="pulse-section bg-[var(--bg-surface-alt)] transition-colors duration-300">
      <div className="pulse-container">
        {/* Section Header */}
        <div className="pulse-section-header">
          <div className="pulse-eyebrow">
            <Quote className="w-3.5 h-3.5" />
            <span>EXECUTIVE DISPATCHES & EDITORIAL REVIEWS</span>
          </div>

          <h2 className="pulse-section-title">
            Founder & C-Suite Testimonials
          </h2>

          <p className="pulse-section-desc">
            Read what venture-backed founders and corporate communications directors say after commanding global news cycles with PulsePR.
          </p>
        </div>

        {/* 3-Column Equal Height Pull-Quote Grid with 32px Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 sm:p-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] shadow-sm flex flex-col justify-between h-full min-h-[360px] hover:border-[var(--border-strong)] transition-all"
            >
              {/* Top Quote Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3">
                  <span className="font-serif-headline text-5xl font-black text-[var(--accent-red)] leading-none select-none opacity-90">
                    “
                  </span>
                  <span className="font-mono-data text-[10.5px] font-bold text-[var(--text-muted)] border border-[var(--border-main)] px-3 py-1 rounded-md bg-[var(--bg-surface-alt)]">
                    {item.issueRef}
                  </span>
                </div>

                <p className="font-serif-headline italic text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Attribution Pinned */}
              <div className="pt-6 mt-8 border-t border-[var(--border-main)] space-y-1.5">
                <div className="font-serif-headline font-bold text-base text-[var(--text-primary)]">
                  {item.author}
                </div>
                <div className="font-mono-data text-xs text-[var(--text-muted)]">
                  {item.title}, <span className="text-[var(--accent-red)] font-semibold">{item.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
