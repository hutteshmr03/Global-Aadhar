import React from 'react';
import { tickerNews } from '../data/mockData';

export default function Ticker() {
  return (
    <div className="w-full bg-[var(--bg-surface-alt)] border-b border-[var(--border-main)] py-3.5 sm:py-4 overflow-hidden select-none transition-colors duration-300">
      <div className="pulse-container flex items-center gap-5">
        {/* Static Wire Header Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--text-primary)] text-[var(--bg-main)] font-mono-data text-[10px] font-black uppercase tracking-wider shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] animate-ping"></span>
          <span>WIRE FEED</span>
        </div>

        {/* Infinite Scrolling Ticker Track */}
        <div className="overflow-hidden flex-1 relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="ticker-track flex items-center font-mono-data text-xs font-medium text-[var(--text-secondary)]">
            {[...tickerNews, ...tickerNews].map((item, idx) => (
              <div key={idx} className="flex items-center whitespace-nowrap pl-7 pr-7">
                <span className="font-bold text-[var(--accent-red)] uppercase text-[10.5px] px-2.5 py-0.5 rounded bg-[var(--accent-badge)] mr-3 shrink-0">
                  {item.tag}
                </span>
                <span className="text-[var(--text-primary)] font-medium mr-2.5">
                  {item.text}
                </span>
                <span className="text-[var(--text-muted)] text-[10.5px] mr-6">
                  ({item.time})
                </span>
                <span className="text-[var(--border-main)] font-mono text-sm select-none">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
