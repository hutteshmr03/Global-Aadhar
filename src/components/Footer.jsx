import React from 'react';
import { ArrowUp } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDEBE7] text-[#2B2B2B] pt-10 pb-8 border-t border-[#D5D1C8] font-deck-body">
      <div className="deck-container space-y-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#D5D1C8]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex flex-col">
              <div className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54] tracking-tight leading-none">
                GLOBAL AADHAR
              </div>
              <div className="text-[10px] font-bold text-[#2D5A54] tracking-[0.16em] uppercase mt-0.5">
                STRATEGIC COMMUNICATIONS
              </div>
            </div>

            <p className="text-xs text-[#2B2B2B] max-w-md leading-relaxed pt-1">
              A Goa-based Public Relations and Strategic Communications company delivering integrated media, stakeholder engagement, and communications solutions that connect opportunities and drive measurable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-deck-headline text-xs tracking-wider text-[#2D5A54] uppercase mb-1.5">
              Navigation
            </div>
            <ul className="space-y-1.5 text-[#2B2B2B]">
              <li><a href="#about" className="hover:text-[#2D5A54] transition-colors">Who We Are</a></li>
              <li><a href="#why-us" className="hover:text-[#2D5A54] transition-colors">Why Global Aadhar</a></li>
              <li><a href="#services" className="hover:text-[#2D5A54] transition-colors">Our Six Core Services</a></li>
              <li><a href="#engagement-model" className="hover:text-[#2D5A54] transition-colors">Client Engagement Model</a></li>
              <li><a href="#who-we-serve" className="hover:text-[#2D5A54] transition-colors">Who We Serve</a></li>
              <li><a href="#models" className="hover:text-[#2D5A54] transition-colors">Commercial Models</a></li>
            </ul>
          </div>

          {/* Office Bureau */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-deck-headline text-xs tracking-wider text-[#2D5A54] uppercase mb-1.5">
              Panjim Bureau
            </div>
            <div className="space-y-1.5 text-[#2B2B2B] leading-relaxed">
              <p>{brandMeta.address}</p>
              <p className="text-[#2D5A54] font-bold">{brandMeta.phone}</p>
              <p><a href={`mailto:${brandMeta.email}`} className="text-[#2B2B2B] hover:text-[#2D5A54] transition-colors">{brandMeta.email}</a></p>
              <p className="pt-0.5 text-[#2D5A54] font-semibold">{brandMeta.presentedBy}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555]">
          <div>
            © {new Date().getFullYear()} {brandMeta.name}. All rights reserved. Pitch deck proof of concept.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#2D5A54] hover:text-[#23413C] transition-colors font-bold uppercase tracking-wider text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
