import React from 'react';
import { pricingPlans, testimonials } from '../data/mockData';
import { Radio, Check, Star, ArrowRight } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="section-wrapper bg-slate-900/60">
      <div className="main-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Radio className="w-3.5 h-3.5 text-indigo-400" />
            <span>PR Retainers & Launch Packages</span>
          </div>
          <h2 className="section-title">
            Transparent Retainers, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              Guaranteed Media Execution
            </span>
          </h2>
          <p className="section-desc">
            No vague promises or endless hourly billing. Clear deliverables, dedicated PR managers, and verified editorial results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-14">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`p-5 sm:p-6 rounded-3xl relative flex flex-col justify-between transition-all border ${
                  plan.popular
                    ? 'glass-panel border-indigo-500/70 shadow-xl shadow-indigo-950/80 -translate-y-1'
                    : 'glass-card border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-md">
                    ★ Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                      {plan.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-white mt-0.5">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 mb-2.5">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      /{plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-1.5 pt-2.5 border-t border-slate-800 mb-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Included PR Deliverables:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-200">
                        <div className="mt-0.5 p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      plan.popular
                        ? 'btn-primary shadow-md'
                        : 'btn-secondary hover:border-indigo-500/50'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white">What Founders & CMOs Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-2.5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <div className="font-bold text-xs text-white">{t.author}</div>
                  <div className="text-[10px] text-slate-400">{t.title}, <span className="text-indigo-400">{t.company}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
