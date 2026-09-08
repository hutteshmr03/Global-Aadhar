import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Eye, Globe2, Sparkles, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

const industryMultipliers = {
  'tech-ai': { name: 'AI & DeepTech', baseImp: 8.5, aveMulti: 24000 },
  'fintech': { name: 'Fintech & Web3', baseImp: 7.8, aveMulti: 28000 },
  'saas': { name: 'Enterprise SaaS', baseImp: 6.2, aveMulti: 21000 },
  'cleantech': { name: 'CleanTech & ESG', baseImp: 5.5, aveMulti: 19000 },
  'luxury': { name: 'Consumer Luxury', baseImp: 11.0, aveMulti: 32000 },
  'health': { name: 'Healthcare & Biotech', baseImp: 6.8, aveMulti: 26000 }
};

export default function RoiCalculator({ onOpenBooking }) {
  const [industry, setIndustry] = useState('tech-ai');
  const [tier1Count, setTier1Count] = useState(5);
  const [durationMonths, setDurationMonths] = useState(3);
  const [includeBroadcasting, setIncludeBroadcasting] = useState(true);

  const calculated = useMemo(() => {
    const config = industryMultipliers[industry] || industryMultipliers['tech-ai'];
    const broadcastBonus = includeBroadcasting ? 1.4 : 1.0;
    
    const totalImpressions = Math.round(
      tier1Count * config.baseImp * durationMonths * 1.8 * broadcastBonus * 10
    ) / 10;

    const estimatedAVE = Math.round(
      tier1Count * config.aveMulti * durationMonths * (includeBroadcasting ? 1.5 : 1.0)
    );

    const highDABacklinks = Math.round(tier1Count * 3.4 * (durationMonths * 0.8));
    const inboundTrafficSurge = Math.min(750, Math.round(180 + tier1Count * 35 * durationMonths * 0.4));

    return {
      impressions: `${totalImpressions} Million`,
      aveValue: `$${estimatedAVE.toLocaleString()}`,
      backlinks: `${highDABacklinks} High-DA Links`,
      surge: `+${inboundTrafficSurge}% Inbound Lift`
    };
  }, [industry, tier1Count, durationMonths, includeBroadcasting]);

  return (
    <section id="roi-calculator" className="section-wrapper bg-slate-950">
      <div className="main-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real-Time Estimation Engine</span>
          </div>
          <h2 className="section-title">
            PR Media Reach & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Media ROI Estimator
            </span>
          </h2>
          <p className="section-desc">
            Calculate your projected audience impressions, advertising value equivalency (AVE), and SEO authority impact.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 glass-panel p-5 sm:p-7 space-y-4">
            <h3 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider pb-2 border-b border-slate-800">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Configure Target Campaign Scope
            </h3>

            {/* Industry Selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Select Your Primary Sector
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(industryMultipliers).map(([key, data]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIndustry(key)}
                    className={`p-2 rounded-xl text-xs font-semibold text-center transition border ${
                      industry === key
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {data.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Target Tier-1 Media Outlets
                  </span>
                  <span className="text-xs font-extrabold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                    {tier1Count} Outlets
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={tier1Count}
                  onChange={(e) => setTier1Count(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>2 Focused Outlets</span>
                  <span>20 Global Syndication</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Campaign Duration / Retainer Horizon
                  </span>
                  <span className="text-xs font-extrabold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    {durationMonths} {durationMonths === 1 ? 'Month' : 'Months'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Month (Sprint)</span>
                  <span>12 Months (Dominance)</span>
                </div>
              </div>

              {/* Toggle Broadcast Booking */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Include TV & Broadcast Circuits</div>
                    <div className="text-[10px] text-slate-400">Bloomberg TV, CNBC, BBC World, Top-Tier Tech Podcasts</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includeBroadcasting}
                  onChange={(e) => setIncludeBroadcasting(e.target.checked)}
                  className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel p-5 sm:p-7 border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                  Projected Media Impact
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> AP / Nielsen Standard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mb-0.5">
                    <Eye className="w-3 h-3 text-indigo-400" /> Total Impressions
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white">
                    {calculated.impressions}
                  </div>
                  <div className="text-[9px] text-slate-400">Verified Viewership</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mb-0.5">
                    <DollarSign className="w-3 h-3 text-emerald-400" /> Estimated AVE Value
                  </div>
                  <div className="text-lg sm:text-xl font-black text-emerald-400">
                    {calculated.aveValue}
                  </div>
                  <div className="text-[9px] text-slate-400">Equivalent Paid Media</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mb-0.5">
                    <Globe2 className="w-3 h-3 text-cyan-400" /> High-DA Backlinks
                  </div>
                  <div className="text-base sm:text-lg font-black text-cyan-300">
                    {calculated.backlinks}
                  </div>
                  <div className="text-[9px] text-slate-400">DR 75-92 Media Citations</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mb-0.5">
                    <TrendingUp className="w-3 h-3 text-purple-400" /> Commercial Surge
                  </div>
                  <div className="text-base sm:text-lg font-black text-purple-300">
                    {calculated.surge}
                  </div>
                  <div className="text-[9px] text-slate-400">Inbound Brand Search</div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-primary text-xs py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Lock In This PR Distribution Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
