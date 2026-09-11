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
    <div className="w-full bg-[#EDEBE7] border-y border-[#D5D1C8] py-3.5 select-none space-y-2.5 relative overflow-hidden">
      {/* Top Media Masthead Proof Ribbon */}
      <div className="deck-container flex flex-wrap items-center justify-between gap-3 text-[11px] font-deck-body font-bold text-[#555555] uppercase tracking-wider border-b border-[#D5D1C8]/60 pb-2.5">
        <div className="flex items-center gap-2 text-[#2D5A54]">
          <ShieldCheck className="w-4 h-4 text-[#2D5A54]" />
          <span>Regional Media Syndicate & Publication Network:</span>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar font-bold text-[#2D5A54]">
          {mediaOutlets.map((outlet, i) => (
            <span key={i} className="whitespace-nowrap px-3 py-1 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] text-[10px] text-[#2D5A54] hover:border-[#2D5A54] transition-colors shadow-2xs">
              {outlet}
            </span>
          ))}
        </div>
      </div>

      {/* Live Press Wire Infinite Ticker Track */}
      <div className="deck-container flex items-center gap-4 sm:gap-6">
        {/* Live Press Wire Badge */}
        <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A54] text-white font-deck-body text-[10px] font-bold uppercase tracking-wider shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
          </span>
          <Radio className="w-3.5 h-3.5 text-white" />
          <span>LIVE PRESS WIRE</span>
        </div>

        {/* Infinite Scrolling Ticker Track with Pause-on-Hover */}
        <div className="overflow-hidden flex-1 relative [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="ticker-track flex items-center font-deck-body text-xs font-semibold text-[#2B2B2B] hover:[animation-play-state:paused]">
            {[...tickerNews, ...tickerNews].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center whitespace-nowrap pl-4 pr-4 py-1 rounded-lg hover:bg-[#E5E3DE] transition-colors cursor-default"
              >
                <span className="font-bold text-[#2D5A54] uppercase text-[10px] px-2.5 py-0.5 rounded-md bg-[#E5E3DE] border border-[#D5D1C8] mr-2.5 shrink-0 tracking-wider">
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
