import React from 'react';
import { tickerNews } from '../data/mockData';
import { Radio, Newspaper, ShieldCheck } from 'lucide-react';

const mediaOutlets = [
  'The Navhind Times',
  'Prudent Media TV',
  'O Heraldo',
  'Goa 365 TV',
  'Tarun Bharat',
  'Gomantak News',
  'Economic Times Desk',
  'Sumant Cloud Wire'
];

export default function Ticker() {
  return (
    <div className="w-full bg-[#EDEBE7] border-y border-[#D5D1C8] py-2.5 sm:py-3.5 select-none space-y-2 sm:space-y-2.5 relative overflow-hidden">
      {/* Top Media Masthead Proof Ribbon with Infinite Syndicate Marquee Animation */}
      <div className="deck-container flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 text-[10.5px] sm:text-[11px] font-deck-body font-bold text-[#555555] uppercase tracking-wider border-b border-[#D5D1C8]/60 pb-2 sm:pb-2.5">
        <div className="flex items-center gap-2 text-[#2D5A54] shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2D5A54] shrink-0" />
          <span className="whitespace-nowrap">Regional Media Syndicate & Publication Network:</span>
        </div>
        
        {/* Animated Marquee Strip for Publication Badges */}
        <div className="overflow-hidden flex-1 min-w-0 relative [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="syndicate-track flex items-center gap-2 sm:gap-2.5 font-bold text-[#2D5A54] hover:[animation-play-state:paused] py-0.5">
            {[...mediaOutlets, ...mediaOutlets, ...mediaOutlets].map((outlet, i) => (
              <span 
                key={i} 
                className="whitespace-nowrap px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[9.5px] sm:text-[10px] text-[#2D5A54] hover:bg-[#2D5A54] hover:text-white hover:border-[#2D5A54] transition-all duration-200 shadow-2xs shrink-0 cursor-default"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Live Press Wire Infinite Ticker Track */}
      <div className="deck-container flex items-center gap-2.5 sm:gap-4 lg:gap-6">
        {/* Live Press Wire Badge */}
        <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#2D5A54] text-white font-deck-body text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
          </span>
          <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
          <span className="whitespace-nowrap">LIVE PRESS WIRE</span>
        </div>

        {/* Infinite Scrolling Ticker Track with Pause-on-Hover */}
        <div className="overflow-hidden flex-1 min-w-0 relative [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <div className="ticker-track flex items-center font-deck-body text-xs font-semibold text-[#2B2B2B] hover:[animation-play-state:paused]">
            {[...tickerNews, ...tickerNews].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center whitespace-nowrap pl-3 sm:pl-4 pr-3 sm:pr-4 py-1 rounded-lg hover:bg-[#E5E3DE] transition-colors cursor-default shrink-0"
              >
                <span className="font-bold text-[#2D5A54] uppercase text-[9.5px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded-md bg-[#E5E3DE] border border-[#D5D1C8] mr-2 shrink-0 tracking-wider">
                  {item.tag}
                </span>
                <span className="text-[#2B2B2B] font-medium mr-1.5 sm:mr-2 text-[11px] sm:text-xs">
                  {item.text}
                </span>
                <span className="text-[#555555] text-[9.5px] sm:text-[10px] font-normal mr-3 sm:mr-4">
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
