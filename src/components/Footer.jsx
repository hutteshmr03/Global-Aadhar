import React from 'react';
import { ArrowUp } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#4A5856] pt-10 pb-8 border-t border-[#E6E0D6] font-deck-body">
      <div className="deck-container space-y-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#E6E0D6]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex flex-col">
              <div className="font-deck-headline text-xl sm:text-2xl text-[#1A3330] tracking-tight leading-none">
                GLOBAL AADHAR
              </div>
              <div className="text-[10px] font-bold text-[#2D5A54] tracking-[0.16em] uppercase mt-0.5">
                STRATEGIC COMMUNICATIONS
              </div>
            </div>

            <p className="text-xs text-[#4A5856] max-w-md leading-relaxed pt-1">
              A Goa-based Public Relations and Strategic Communications company delivering integrated media, stakeholder engagement, and communications solutions that connect opportunities and drive measurable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-deck-headline text-xs tracking-wider text-[#1A3330] uppercase mb-1.5">
              Navigation
            </div>
            <ul className="space-y-1.5 text-[#4A5856]">
              <li><a href="#about" className="hover:text-[#C77B4A] transition-colors">Who We Are</a></li>
              <li><a href="#why-us" className="hover:text-[#C77B4A] transition-colors">Why Global Aadhar</a></li>
              <li><a href="#services" className="hover:text-[#C77B4A] transition-colors">Our Six Core Services</a></li>
              <li><a href="#engagement-model" className="hover:text-[#C77B4A] transition-colors">Client Engagement Model</a></li>
              <li><a href="#who-we-serve" className="hover:text-[#C77B4A] transition-colors">Who We Serve</a></li>
              <li><a href="#models" className="hover:text-[#C77B4A] transition-colors">Commercial Models</a></li>
            </ul>
          </div>

          {/* Office Bureau */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-deck-headline text-xs tracking-wider text-[#1A3330] uppercase mb-1.5">
              Panjim Bureau
            </div>
            <div className="space-y-1.5 text-[#4A5856] leading-relaxed">
              <p>{brandMeta.address}</p>
              <p className="text-[#1A3330] font-bold">{brandMeta.phone}</p>
              <p><a href={`mailto:${brandMeta.email}`} className="text-[#4A5856] hover:text-[#C77B4A] transition-colors">{brandMeta.email}</a></p>
              <p className="pt-0.5 text-[#2D5A54] font-semibold">{brandMeta.presentedBy}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718280]">
          <div>
            © {new Date().getFullYear()} {brandMeta.name}. All rights reserved. Pitch deck proof of concept.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#2D5A54] hover:text-[#C77B4A] transition-colors font-bold uppercase tracking-wider text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
