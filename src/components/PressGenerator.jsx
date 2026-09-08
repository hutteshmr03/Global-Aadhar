import React, { useState, useMemo } from 'react';
import { Sparkles, Copy, Check, Download, RefreshCw, Wand2, Send, Globe, Building2, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const templates = [
  {
    id: 'funding',
    name: '💰 Funding Milestone',
    badge: 'Series A/B/C',
    defaultData: {
      company: 'OmniVortex AI',
      industry: 'Enterprise AI & Data Infrastructure',
      founder: 'Dr. Elena Thorne',
      title: 'Founder & CEO',
      location: 'SAN FRANCISCO & NEW YORK',
      keyMetric: '$45M Series B led by Sequoia Capital',
      announcement: 'closes a $45M Series B funding round to scale its automated enterprise knowledge graph infrastructure and expand international sales operations across EMEA.',
      quote: 'This capital milestone validates our thesis that enterprise intelligence must be decentralized, real-time, and privacy-preserving.'
    }
  },
  {
    id: 'product',
    name: '🚀 Flagship Product Launch',
    badge: 'Tech & SaaS',
    defaultData: {
      company: 'QuantumSync',
      industry: 'Cloud DevOps & Cyber Resilience',
      founder: 'Marcus Sterling',
      title: 'Co-Founder & VP Product',
      location: 'LONDON & SINGAPORE',
      keyMetric: '10x Faster Real-Time Disaster Recovery',
      announcement: 'unveils its next-generation automated multi-cloud failover system, enabling Fortune 500 banks and healthcare providers to recover from regional outages in sub-30 milliseconds.',
      quote: 'We built QuantumSync to eliminate downtime forever. Today’s launch brings military-grade disaster recovery into standard cloud operations.'
    }
  },
  {
    id: 'partnership',
    name: '🤝 Strategic Partnership',
    badge: 'Growth',
    defaultData: {
      company: 'Verdant Global',
      industry: 'Clean Energy & Carbon Accounting',
      founder: 'Sarah Jenkins',
      title: 'Head of Partnerships',
      location: 'NEW YORK',
      keyMetric: '1,000+ Supply Chains Decarbonized',
      announcement: 'enters into a multi-year global distribution agreement with Microsoft Azure to bring verifiable ESG emissions tracking to over 20,000 multinational suppliers.',
      quote: 'Joining forces with global leaders allows us to turn corporate carbon commitments into measurable, audited decarbonization action at unprecedented scale.'
    }
  },
  {
    id: 'executive',
    name: '👔 Executive Hire',
    badge: 'Leadership',
    defaultData: {
      company: 'FinPulse Group',
      industry: 'Global Payments & Cross-Border Banking',
      founder: 'David Kim',
      title: 'Executive Chairman',
      location: 'BOSTON & ZURICH',
      keyMetric: 'Ex-Mastercard VP joins as COO',
      announcement: 'appoints former Mastercard senior executive Arthur Vance as Chief Operating Officer to oversee global regulatory expansion and banking licensing across 14 new jurisdictions.',
      quote: 'Arthur brings decades of institutional payment expertise that will accelerate our mission to deliver instant cross-border settlement.'
    }
  }
];

export default function PressGenerator({ onOpenBooking }) {
  const [selectedTemplate, setSelectedTemplate] = useState('funding');
  const [formData, setFormData] = useState(templates[0].defaultData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute formatted PR release in real time
  const generatedPR = useMemo(() => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();

    return `FOR IMMEDIATE RELEASE

${formData.company.toUpperCase()} ANNOUNCES ${formData.keyMetric.toUpperCase()} TO ACCELERATE GLOBAL EXPANSION

Strategic milestone positions ${formData.company} at the forefront of the rapidly evolving ${formData.industry} landscape.

${formData.location} — ${today} — ${formData.company}, a pioneer in ${formData.industry}, today announced that it ${formData.announcement}

The announcement comes amidst exponential growth for ${formData.company}, reflecting surging market demand for high-reliability solutions in the ${formData.industry} sector.

"${formData.quote}" said ${formData.founder}, ${formData.title} at ${formData.company}. "With this milestone, we are doubling down on our commitment to deliver world-class execution and transformative value for our global customers and partners."

KEY HIGHLIGHTS:
• Milestone Impact: ${formData.keyMetric}
• Industry Leadership: Direct acceleration within ${formData.industry}
• Global Reach: Expanded presence across North America, Europe, and Asia-Pacific
• Executive Direction: Under the stewardship of ${formData.founder}

ABOUT ${formData.company.toUpperCase()}
${formData.company} is the premier provider of next-generation infrastructure for ${formData.industry}. Headquartered in ${formData.location.split('&')[0].trim()}, the company serves enterprise clients worldwide. For more info: https://${formData.company.toLowerCase().replace(/[^a-z0-9]/g, '')}.io

MEDIA & PRESS CONTACT:
PR Media Group (Desk Placement Team)
Email: press@prmedia.group | media@${formData.company.toLowerCase().replace(/[^a-z0-9]/g, '')}.io
Phone: +1 (212) 555-0192 / +44 20 7946 0912
Web: https://prmedia.group/press-desk

###`;
  }, [formData]);

  const handleSelectTemplate = (tempId) => {
    setSelectedTemplate(tempId);
    const tmpl = templates.find(t => t.id === tempId);
    if (tmpl) {
      setFormData(tmpl.defaultData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    const tmpl = templates.find(t => t.id === selectedTemplate) || templates[0];
    setFormData(tmpl.defaultData);
    setTimeout(() => {
      setIsGenerating(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Fallback
      }
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPR);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedPR], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.company.toLowerCase().replace(/\s+/g, '_')}_press_release.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="generator" className="section-wrapper bg-slate-900/60">
      <div className="main-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive POC Tool</span>
          </div>
          <h2 className="section-title">
            AI Press Release & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
              Media Pitch Builder
            </span>
          </h2>
          <p className="section-desc">
            Experience our automated AP-Style press release structuring engine. Select a scenario, customize key variables, and preview instant editorial copy.
          </p>
        </div>

        {/* Template Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => handleSelectTemplate(tmpl.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 border ${
                selectedTemplate === tmpl.id
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              <span>{tmpl.name}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                selectedTemplate === tmpl.id ? 'bg-indigo-900/80 text-indigo-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {tmpl.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Main 2-Column Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Input Form Controls */}
          <div className="lg:col-span-5 glass-panel p-5 sm:p-6 space-y-3.5">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                <Wand2 className="w-4 h-4 text-indigo-400" />
                Campaign Parameters
              </h3>
              <button
                onClick={handleRegenerate}
                className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <RefreshCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                Reset Defaults
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" /> Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" /> Industry & Domain
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-400" /> Spokesperson
                  </label>
                  <input
                    type="text"
                    value={formData.founder}
                    onChange={(e) => handleInputChange('founder', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Headline Hook / Key Metric
                </label>
                <input
                  type="text"
                  value={formData.keyMetric}
                  onChange={(e) => handleInputChange('keyMetric', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Announcement Details
                </label>
                <textarea
                  rows="2"
                  value={formData.announcement}
                  onChange={(e) => handleInputChange('announcement', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Executive Quote
                </label>
                <textarea
                  rows="2"
                  value={formData.quote}
                  onChange={(e) => handleInputChange('quote', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={handleRegenerate}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Format & Optimize Press Release
              </button>
            </div>
          </div>

          {/* Right: Live Preview & Action Toolbar */}
          <div className="lg:col-span-7 space-y-3">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  AP-Style Press Wire Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition border border-slate-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-indigo-400" />}
                  {copied ? 'Copied!' : 'Copy Wire'}
                </button>

                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  Download .txt
                </button>
              </div>
            </div>

            {/* Formatted Wire Document */}
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative">
              <div className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-indigo-500 selection:text-white max-h-[460px] overflow-y-auto pr-2">
                {generatedPR}
              </div>
            </div>

            {/* Pitch Syndication CTA */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-purple-950/40 to-slate-950 border border-indigo-500/30 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  Syndicate this release to 450+ Tier-1 editors?
                </h4>
                <p className="text-[11px] text-slate-400">
                  Direct pitch with embargoes to TechCrunch, Forbes & Bloomberg reporters.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs py-1.5 px-3.5 shadow-md"
              >
                Distribute Release
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
