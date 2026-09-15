import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, ArrowRight, ShieldCheck, TrendingUp, Award, Layers } from 'lucide-react';
import { regionalSectors } from '../data/mockData';
import AnimatedCounter from './AnimatedCounter';

export default function RoiCalculator({ onNavigateContact }) {
  const [sectorKey, setSectorKey] = useState('pharma-corp');
  const [outletCount, setOutletCount] = useState(6);
  const [durationMonths, setDurationMonths] = useState(3);
  const [includeCloudTech, setIncludeCloudTech] = useState(true);

  const calculated = useMemo(() => {
    const config = regionalSectors[sectorKey] || regionalSectors['pharma-corp'];
    const techMultiplier = includeCloudTech ? 1.35 : 1.0;

    const totalImpressions = Math.round(
      outletCount * config.baseImp * durationMonths * 0.45 * techMultiplier * 10
    ) / 10;

    const estimatedAVE = Math.round(
      outletCount * config.aveMulti * durationMonths * techMultiplier
    );

    const highDAPlacements = Math.round(outletCount * 2.2 * (durationMonths * 0.75));
    const stakeholderLift = Math.min(480, Math.round(120 + outletCount * 18 * durationMonths * 0.35));

    return {
      impressions: `${totalImpressions}M+`,
      aveValue: `₹${(estimatedAVE / 100000).toFixed(1)} Lakhs`,
      placements: `${highDAPlacements}+ Placements`,
      surge: `+${stakeholderLift}% Lift`
    };
  }, [sectorKey, outletCount, durationMonths, includeCloudTech]);

  return (
    <section id="roi-estimator" className="py-14 sm:py-18 lg:py-22 bg-[#E5E3DE] border-b border-[#D5D1C8]">
      <div className="deck-container">
        {/* Slide Header Bar */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 font-deck-body font-bold text-[#1A332F]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>CAMPAIGN SCOPE & PR IMPACT ESTIMATOR</span>
          </div>
          <div className="font-deck-body text-[10.5px] sm:text-[11px] font-bold text-[#444444] tracking-widest uppercase">
            INTERACTIVE ESTIMATION ENGINE
          </div>
        </div>

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-2.5 max-w-3xl"
        >
          <div className="text-xs font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider">
            Interactive Scope & Impact Engine
          </div>
          <h2 className="font-deck-headline text-3xl sm:text-4xl lg:text-5xl text-[#1A332F] font-black tracking-tight leading-tight">
            ESTIMATE YOUR STRATEGIC PR & MEDIA IMPACT
          </h2>
          <p className="font-deck-body text-xs sm:text-sm lg:text-base text-[#2B2B2B] font-medium leading-relaxed">
            Configure your industry sector, media distribution breadth, and engagement horizon to calculate projected editorial reach, advertising value equivalency (AVE), and stakeholder engagement.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls Panel - High Contrast Solid Porcelain Card */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#D5D1C8] shadow-xl space-y-5 flex flex-col justify-between relative z-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#D5D1C8] text-xs font-bold text-[#1A332F] uppercase tracking-wider font-deck-body">
                <Sparkles className="w-4 h-4 text-[#2D5A54]" />
                <span>1. Select Primary Sector</span>
              </div>

              {/* Sector Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(regionalSectors).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSectorKey(key)}
                    className={`p-3 rounded-xl text-xs font-deck-body font-bold text-center transition-all cursor-pointer ${
                      sectorKey === key
                        ? 'bg-[#2D5A54] text-white shadow-sm border border-[#2D5A54]'
                        : 'bg-[#EDEBE7] text-[#1A332F] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#E5E3DE]'
                    }`}
                  >
                    {data.name}
                  </button>
                ))}
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                {/* Outlets Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 font-deck-body">
                    <span className="text-xs font-bold text-[#1A332F] uppercase tracking-wider">
                      Target Media & Press Outlets
                    </span>
                    <span className="text-xs font-bold text-[#2D5A54] bg-[#EDEBE7] px-3 py-1 rounded-full border border-[#D5D1C8]">
                      {outletCount} Outlets
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    value={outletCount}
                    onChange={(e) => setOutletCount(Number(e.target.value))}
                    className="w-full accent-[#2D5A54] bg-[#D5D1C8] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-deck-body text-[#555555] font-semibold mt-1">
                    <span>2 Regional Dailies</span>
                    <span>15 State & National Media Wire</span>
                  </div>
                </div>

                {/* Duration Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 font-deck-body">
                    <span className="text-xs font-bold text-[#1A332F] uppercase tracking-wider">
                      Engagement Horizon
                    </span>
                    <span className="text-xs font-bold text-[#2D5A54] bg-[#EDEBE7] px-3 py-1 rounded-full border border-[#D5D1C8]">
                      {durationMonths} {durationMonths === 1 ? 'Month' : 'Months'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    className="w-full accent-[#2D5A54] bg-[#D5D1C8] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-deck-body text-[#555555] font-semibold mt-1">
                    <span>1 Month (Project Sprint)</span>
                    <span>12 Months (Annual Retainer)</span>
                  </div>
                </div>

                {/* Tech Integration Toggle */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8]">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#2D5A54] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#1A332F]">Include Sumant Cloud Tech & Digital PR</div>
                      <div className="text-[10.5px] text-[#555555] font-medium">Integrated enterprise software, SEO resonance, and digital kits</div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeCloudTech}
                    onChange={(e) => setIncludeCloudTech(e.target.checked)}
                    className="w-4 h-4 accent-[#2D5A54] rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="text-[11px] font-deck-body text-[#555555] pt-2 border-t border-[#D5D1C8]/80 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A54] shrink-0" />
              <span>* Illustrative scope estimation tool for planning purposes. Final campaign scope and deliverables are customized upon consultation.</span>
            </div>
          </motion.div>

          {/* Results Output Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#1A332F] text-white border border-[#2D5A54] shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Lighting */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#2D5A54]/30 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-xs font-bold text-[#EDEBE7] font-deck-body uppercase tracking-widest flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-300" />
                  Projected Strategic PR Metrics
                </span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/20">
                  ESTIMATED VALUE
                </span>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 gap-3.5">
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs hover:border-emerald-400/50 hover:bg-white/15 transition-all shadow-xs"
                >
                  <div className="text-[10px] font-bold text-[#EDEBE7]/80 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5 text-emerald-300" /> Total Impressions
                  </div>
                  <div className="text-2xl sm:text-3xl font-deck-headline text-white">
                    <AnimatedCounter value={calculated.impressions} />
                  </div>
                  <div className="text-[10px] text-[#EDEBE7]/70 font-deck-body mt-0.5">Verified Readership & Viewers</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs hover:border-emerald-400/50 hover:bg-white/15 transition-all shadow-xs"
                >
                  <div className="text-[10px] font-bold text-[#EDEBE7]/80 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-emerald-300" /> Advertising Value (AVE)
                  </div>
                  <div className="text-2xl sm:text-3xl font-deck-headline text-emerald-300">
                    <AnimatedCounter value={calculated.aveValue} />
                  </div>
                  <div className="text-[10px] text-[#EDEBE7]/70 font-deck-body mt-0.5">Equivalent Paid Media Worth</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs hover:border-emerald-400/50 hover:bg-white/15 transition-all shadow-xs"
                >
                  <div className="text-[10px] font-bold text-[#EDEBE7]/80 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-emerald-300" /> Media Placements
                  </div>
                  <div className="text-xl sm:text-2xl font-deck-headline text-white">
                    <AnimatedCounter value={calculated.placements} />
                  </div>
                  <div className="text-[10px] text-[#EDEBE7]/70 font-deck-body mt-0.5">Print, Digital & TV Features</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs hover:border-emerald-400/50 hover:bg-white/15 transition-all shadow-xs"
                >
                  <div className="text-[10px] font-bold text-[#EDEBE7]/80 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-300" /> Stakeholder Lift
                  </div>
                  <div className="text-xl sm:text-2xl font-deck-headline text-emerald-300">
                    <AnimatedCounter value={calculated.surge} />
                  </div>
                  <div className="text-[10px] text-[#EDEBE7]/70 font-deck-body mt-0.5">Inbound Trust & Engagement</div>
                </motion.div>
              </div>
            </div>

            {/* CTA in Panel */}
            <div className="relative z-10 pt-6">
              <button
                type="button"
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
                className="w-full py-3.5 px-5 rounded-2xl bg-white text-[#1A332F] hover:bg-[#EDEBE7] font-deck-body text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discuss This Campaign Scope With Our Panjim Bureau</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
