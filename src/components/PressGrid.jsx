import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pressClippings } from '../data/mockData';
import { Newspaper, Sparkles, RotateCw } from 'lucide-react';

export default function PressGrid() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="work" className="pulse-section bg-[var(--bg-surface-alt)] transition-colors duration-300">
      <div className="pulse-container">
        {/* Section Header */}
        <div className="pulse-section-header">
          <div className="pulse-eyebrow">
            <Newspaper className="w-3.5 h-3.5" />
            <span>DISPATCH ARCHIVE • VERIFIED COVERAGE</span>
          </div>

          <h2 className="pulse-section-title">
            Press Clippings & Front-Page Wire
          </h2>

          <p className="pulse-section-desc">
            Click any newspaper clipping below to flip the card and inspect the full editorial campaign breakdown, reach metrics, and strategy.
          </p>
        </div>

        {/* Strict 3-Column Desktop Grid with Equal Card Heights & 32px Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressClippings.map((clip, index) => {
            const isFlipped = !!flippedCards[clip.id];

            return (
              <motion.div
                key={clip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="perspective-1000 h-[450px] cursor-pointer"
                onClick={() => toggleFlip(clip.id)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-full h-full relative transform-style-3d shadow-sm"
                >
                  {/* FRONT: Newspaper Clipping View */}
                  <div className="absolute inset-0 w-full h-full backface-hidden p-7 sm:p-8 rounded-xl flex flex-col justify-between border border-[var(--border-main)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all">
                    {/* Top Group: Pub Header & Headline */}
                    <div className="space-y-4">
                      {/* Publication Name & Category Tag Row */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-main)]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red)] shrink-0"></span>
                          <span className="font-serif-headline font-black text-base tracking-tight text-[var(--text-primary)]">
                            {clip.publication}
                          </span>
                        </div>
                        <span className="font-mono-data text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] bg-[var(--bg-surface-alt)] px-2.5 py-1 rounded-md border border-[var(--border-main)] shrink-0">
                          {clip.pubCategory}
                        </span>
                      </div>

                      {/* Headline (Fixed line-clamp with clean leading) */}
                      <div>
                        <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug line-clamp-3">
                          "{clip.headline}"
                        </h3>
                      </div>

                      {/* Client Name */}
                      <div className="font-mono-data text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold pt-1">
                        CLIENT: <span className="text-[var(--text-primary)] font-bold">{clip.client}</span>
                      </div>
                    </div>

                    {/* Bottom Result Stat & Flip Prompt - Pinned to Bottom */}
                    <div className="pt-4 border-t border-dashed border-[var(--border-main)] flex items-center justify-between">
                      <div className="font-mono-data text-xs font-bold text-[var(--accent-red)] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{clip.resultStat}</span>
                      </div>
                      <div className="font-mono-data text-[10px] text-[var(--text-muted)] flex items-center gap-1 shrink-0 ml-2">
                        <span>FLIP DISPATCH</span>
                        <RotateCw className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* BACK: Detailed Case Study Summary */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-7 sm:p-8 rounded-xl flex flex-col justify-between border-2 border-[var(--border-strong)] bg-[var(--bg-surface-alt)]">
                    <div className="space-y-3.5">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[var(--border-main)]">
                        <span className="font-mono-data text-[10.5px] font-bold text-[var(--accent-red)] uppercase tracking-wider">
                          INTERNAL CASE BRIEFING
                        </span>
                        <span className="font-mono-data text-[10.5px] text-[var(--text-muted)]">
                          {clip.date}
                        </span>
                      </div>

                      {/* Client and Reach */}
                      <div>
                        <div className="font-serif-headline text-base sm:text-lg font-bold text-[var(--text-primary)] leading-tight">
                          {clip.client}
                        </div>
                        <div className="font-mono-data text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                          Verified Reach: {clip.reach}
                        </div>
                      </div>

                      {/* Strategy Summary */}
                      <p className="font-sans-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {clip.summary}
                      </p>
                    </div>

                    {/* Footer Flip Back */}
                    <div className="pt-3.5 border-t border-[var(--border-main)] flex items-center justify-between text-xs font-mono-data">
                      <span className="font-bold text-[var(--text-primary)]">
                        {clip.publication} Wire
                      </span>
                      <span className="text-[var(--accent-red)] font-semibold flex items-center gap-1">
                        <span>Flip to front</span>
                        <RotateCw className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
