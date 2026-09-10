import React from 'react';
import { tickerNews } from '../data/mockData';
import { Radio } from 'lucide-react';

export default function Ticker() {
  return (
    <div className="w-full bg-[#EDEBE7] border-y border-[#D5D1C8] py-3 overflow-hidden select-none group">
      <div className="deck-container flex items-center gap-4 sm:gap-6">
        {/* Regional Press Wire Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A54] text-white font-deck-body text-[10px] font-bold uppercase tracking-wider shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
          <Radio className="w-3.5 h-3.5 text-white" />
          <span>LIVE PRESS WIRE</span>
        </div>

        {/* Infinite Scrolling Ticker Track with Pause-on-Hover */}
        <div className="overflow-hidden flex-1 relative [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="ticker-track flex items-center font-deck-body text-xs font-semibold text-[#2B2B2B] group-hover:[animation-play-state:paused]">
            {[...tickerNews, ...tickerNews].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center whitespace-nowrap pl-5 pr-5 py-1 rounded-lg hover:bg-[#E5E3DE] transition-colors cursor-default"
              >
                <span className="font-bold text-[#2D5A54] uppercase text-[10px] px-2.5 py-0.5 rounded-md bg-[#E5E3DE] group-hover:bg-[#EDEBE7] border border-[#D5D1C8] mr-2.5 shrink-0 tracking-wider">
                  {item.tag}
                </span>
                <span className="text-[#2B2B2B] font-medium mr-2">
                  {item.text}
                </span>
                <span className="text-[#555555] text-[10px] font-normal mr-4">
                  ({item.time})
                </span>
                <span className="text-[#D5D1C8] font-bold select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
