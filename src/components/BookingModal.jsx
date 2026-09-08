import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    website: '',
    serviceInterest: initialService || 'Tier-1 Media Relations',
    timeline: 'Within 2 Weeks',
    outlets: ['Forbes', 'TechCrunch'],
    budget: '$5,000 - $10,000/mo',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleOutletToggle = (outlet) => {
    if (formData.outlets.includes(outlet)) {
      setFormData({ ...formData, outlets: formData.outlets.filter(o => o !== outlet) });
    } else {
      setFormData({ ...formData, outlets: [...formData.outlets, outlet] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
    }, 700);
  };

  const availableOutlets = ['Forbes', 'TechCrunch', 'Bloomberg', 'WSJ', 'Reuters', 'Wired', 'CNBC', 'Fast Company'];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-indigo-500/40 shadow-2xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              PR Audit Request Confirmed!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-indigo-400 font-bold">{formData.fullName || 'there'}</span>. Our Managing Communications Director has received your campaign brief for <span className="text-cyan-400 font-bold">{formData.company || 'your brand'}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 mt-4 text-slate-300">
              <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-slate-800">
                Next Steps (Within 2 Hours):
              </div>
              <div>✓ Media desk review of target outlets: <span className="text-indigo-300">{formData.outlets.join(', ')}</span></div>
              <div>✓ Tailored editorial pitch angle preparation</div>
              <div>✓ Invitation link sent to: <span className="text-cyan-300">{formData.workEmail || 'your email'}</span></div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary w-full py-3"
              >
                Back to PR Media Platform
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="badge-pill mb-1">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Confidential PR Consultation</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Book Free PR Strategy Audit
              </h3>
              <p className="text-xs text-slate-400">
                Discover the exact media angles that will earn your brand coverage in Tier-1 publications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Company / Organization *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Dynamics"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Website URL
                </label>
                <input
                  type="text"
                  placeholder="https://company.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Target Publications Wishlist
              </label>
              <div className="flex flex-wrap gap-1.5">
                {availableOutlets.map((outlet) => {
                  const active = formData.outlets.includes(outlet);
                  return (
                    <button
                      key={outlet}
                      type="button"
                      onClick={() => handleOutletToggle(outlet)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                        active
                          ? 'bg-indigo-600 text-white border-indigo-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {outlet}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Launch Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option>Immediate (Urgent/Crisis)</option>
                  <option>Within 2 Weeks</option>
                  <option>Next 30 - 60 Days</option>
                  <option>Next Quarter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Monthly PR Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option>$4,500 (Launchpad Sprint)</option>
                  <option>$5,000 - $10,000/mo (Retainer)</option>
                  <option>$10,000 - $20,000/mo (Dominance)</option>
                  <option>$20,000+/mo (Global Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Announcement Details / Goals
              </label>
              <textarea
                rows="2"
                placeholder="Briefly describe your upcoming launch, funding round, or reputation goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500 resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 rounded-xl font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing Media Brief...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Schedule Free Strategy Call</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
