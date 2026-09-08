import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { reachMetrics, monthlyGrowthChart } from '../data/mockData';
import { Activity, TrendingUp } from 'lucide-react';

function CounterItem({ item, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = item.value;
    const duration = 1500;
    const step = Math.max(1, Math.ceil(end / (duration / 25)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <div className="p-6 sm:p-7 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-main)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-center space-y-3.5 shadow-sm">
      <div>
        <div className="font-mono-data text-[11px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold mb-1.5">
          {item.label}
        </div>
        <div className="font-serif-headline text-3xl sm:text-4xl lg:text-[42px] font-black text-[var(--text-primary)] leading-none tracking-tight">
          {count}{item.suffix}
        </div>
      </div>
      <p className="font-sans-body text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-main)] pt-3">
        {item.description}
      </p>
    </div>
  );
}

export default function ReachStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const activeData = hoveredMonth || monthlyGrowthChart[monthlyGrowthChart.length - 1];
  const maxReach = 280;

  return (
    <section id="reach" ref={ref} className="pulse-section bg-[var(--bg-main)] transition-colors duration-300">
      <div className="pulse-container">
        {/* Section Header */}
        <div className="pulse-section-header">
          <div className="pulse-eyebrow">
            <Activity className="w-3.5 h-3.5" />
            <span>LIVE INTELLIGENCE METRICS</span>
          </div>

          <h2 className="pulse-section-title">
            Audited Media Reach & Impact
          </h2>

          <p className="pulse-section-desc">
            Every placement is tracked across global print circulations, high-DA digital wire indexing, and broadcast viewership indexes.
          </p>
        </div>

        {/* 4 Stat Boxes (Compact, Balanced, Equal Height & Unified Border) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 sm:mb-16">
          {reachMetrics.map((item, idx) => (
            <CounterItem key={idx} item={item} inView={isInView} />
          ))}
        </div>

        {/* Dashboard Visualizer Chart Panel */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-main)] shadow-sm space-y-8">
          {/* Chart Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-main)] font-mono-data">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  MONTHLY AUDIENCE REACH VELOCITY (2026 AUDIT)
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 font-sans-body">
                Aggregated syndicated audience impressions across North America, EMEA & APAC
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold shrink-0 self-start sm:self-auto">
              <div className="flex items-center gap-1.5 text-[var(--accent-red)]">
                <TrendingUp className="w-4 h-4" />
                <span>Selected: {activeData.month}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-md bg-[var(--bg-surface-alt)] border border-[var(--border-main)] text-[var(--text-primary)] shadow-sm">
                {activeData.reachM}M Impressions
              </div>
            </div>
          </div>

          {/* Evenly Spaced Bar Chart with Generous Headroom and Aligned Baselines */}
          <div className="pt-8 pb-4">
            <div className="h-60 sm:h-72 w-full flex items-end justify-between gap-2.5 sm:gap-4 md:gap-6 px-1 sm:px-4">
              {monthlyGrowthChart.map((point, i) => {
                const heightPercent = Math.max(12, (point.reachM / maxReach) * 100);
                const isHovered = hoveredMonth?.month === point.month;
                const isCurrentActive = activeData.month === point.month;

                return (
                  <div
                    key={point.month}
                    onMouseEnter={() => setHoveredMonth(point)}
                    onMouseLeave={() => setHoveredMonth(null)}
                    className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end"
                  >
                    {/* Value Badge Centered Directly Above Bar */}
                    <span className={`font-mono-data text-[10px] sm:text-xs font-bold mb-1 transition-all duration-200 ${
                      isHovered || isCurrentActive ? 'text-[var(--accent-red)] font-black scale-110' : 'text-[var(--text-muted)]'
                    }`}>
                      {point.reachM}M
                    </span>

                    {/* Animated Equal-Width Bar with Rich Red Editorial Gradient */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isInView ? `${heightPercent}%` : 0 }}
                      transition={{ duration: 0.7, delay: i * 0.04, ease: "easeOut" }}
                      className={`w-full max-w-[48px] rounded-t-md transition-all duration-200 ${
                        isHovered || isCurrentActive
                          ? 'bg-gradient-to-t from-red-700 via-red-600 to-rose-500 shadow-lg shadow-red-500/30 scale-[1.04]'
                          : 'bg-gradient-to-t from-red-600/80 via-red-500/85 to-rose-400/90 hover:from-red-600 hover:to-rose-500 opacity-90'
                      }`}
                    ></motion.div>

                    {/* Aligned Month Label Directly Underneath Bar */}
                    <span className={`font-mono-data text-[11px] sm:text-xs font-semibold pt-2.5 border-t border-[var(--border-main)] w-full text-center transition-colors ${
                      isHovered || isCurrentActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-muted)]'
                    }`}>
                      {point.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sources and Velocity Footnote with Clean Padding */}
          <div className="pt-6 border-t border-[var(--border-main)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono-data text-[var(--text-muted)] gap-3">
            <span>Verified Sources: Nielsen Media Research • Cision • Comscore Digital Index</span>
            <span className="text-[var(--accent-red)] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] animate-ping"></span>
              <span>+285% Year-Over-Year Velocity Surge</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
