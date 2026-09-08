import React, { useState } from 'react';
import { mockPressReleases } from '../data/mockData';
import { Newspaper, Search, Download, Calendar, X, FileText } from 'lucide-react';

export default function PressRoom({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingRelease, setReadingRelease] = useState(null);

  const categories = ['All', 'Tech & AI', 'Corporate Growth', 'Awards & Honors'];

  const filteredReleases = mockPressReleases.filter(pr => {
    const matchesCat = selectedCategory === 'All' || pr.category === selectedCategory;
    const matchesSearch = pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pr.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pr.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="press-room" className="section-wrapper bg-slate-950">
      <div className="main-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Media Newsroom</span>
          </div>
          <h2 className="section-title">
            Official Press Wire & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Media Asset Hub
            </span>
          </h2>
          <p className="section-desc">
            Access official company announcements, downloadable electronic press kits (EPK), executive bios, and broadcast media assets.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search releases, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Press Releases List */}
        <div className="space-y-3">
          {filteredReleases.map((item) => (
            <div
              key={item.id}
              className="glass-card p-4 sm:p-5 border border-slate-800/80 hover:border-indigo-500/40 transition flex flex-col md:flex-row md:items-center justify-between gap-3.5"
            >
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    • {item.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition cursor-pointer"
                    onClick={() => setReadingRelease(item)}>
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] text-slate-400 bg-slate-900/90 px-1.5 py-0.2 rounded border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex md:flex-col sm:flex-row items-center gap-2 shrink-0">
                <button
                  onClick={() => setReadingRelease(item)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-bold transition border border-indigo-500/30 flex items-center gap-1.5 w-full justify-center"
                >
                  <FileText className="w-3 h-3" />
                  Read Wire
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition border border-slate-800 flex items-center gap-1.5 w-full justify-center"
                >
                  <Download className="w-3 h-3 text-cyan-400" />
                  Media Kit
                </button>
              </div>
            </div>
          ))}

          {filteredReleases.length === 0 && (
            <div className="p-6 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-slate-400 text-xs">No press releases found matching your search query.</p>
            </div>
          )}
        </div>

        {/* Media Hotline Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/40 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-3.5">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">
              Accredited Journalist Looking for an Exclusive or Quote?
            </h4>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Direct desk access: 24/7 operations with a 15-minute response SLA for accredited press.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs py-1.5 px-3.5 shrink-0 shadow-md"
          >
            Connect with Press Desk
          </button>
        </div>
      </div>

      {/* Reader Modal */}
      {readingRelease && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 sm:p-6 border border-indigo-500/40 shadow-2xl relative space-y-3.5 animate-fade-in">
            <button
              onClick={() => setReadingRelease(null)}
              className="absolute top-4 right-4 p-1 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30 uppercase">
                {readingRelease.category} • Wire Release
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {readingRelease.title}
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                Published: {readingRelease.date} | PR Media Desk
              </p>
            </div>

            <div className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed p-3 rounded-2xl bg-slate-950 border border-slate-800">
              {readingRelease.content}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setReadingRelease(null)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setReadingRelease(null);
                  onOpenBooking();
                }}
                className="btn-primary text-xs py-1.5 px-3"
              >
                Inquire About Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
