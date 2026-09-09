import React from 'react';
import { ArrowUp } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function Footer({ currentPage = 'home', onNavigateContact, onNavigateHome, onNavigateSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href === '#contact') {
      if (onNavigateContact) onNavigateContact();
      else window.location.hash = '#contact';
    } else {
      if (onNavigateSection) onNavigateSection(href);
      else window.location.hash = href;
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    else window.location.hash = '';
  };

  return (
    <footer className="bg-[#EDEBE7] text-[#2B2B2B] pt-10 pb-8 border-t border-[#D5D1C8] font-deck-body">
      <div className="deck-container space-y-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#D5D1C8]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <a href="#" onClick={handleBrandClick} className="flex flex-col group cursor-pointer text-decoration-none">
              <div className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
                GLOBAL AADHAR
              </div>
              <div className="text-[10px] font-bold text-[#2D5A54] tracking-[0.16em] uppercase mt-0.5">
                STRATEGIC COMMUNICATIONS
              </div>
            </a>

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
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Who We Are</a></li>
              <li><a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Why Global Aadhar</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Our Six Core Services</a></li>
              <li><a href="#engagement-model" onClick={(e) => handleLinkClick(e, '#engagement-model')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Client Engagement Model</a></li>
              <li><a href="#who-we-serve" onClick={(e) => handleLinkClick(e, '#who-we-serve')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Who We Serve</a></li>
              <li><a href="#models" onClick={(e) => handleLinkClick(e, '#models')} className="hover:text-[#2D5A54] transition-colors cursor-pointer">Commercial Models</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#2D5A54] font-bold transition-colors cursor-pointer">Contact & Desk</a></li>
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
            © {new Date().getFullYear()} {brandMeta.name}. All rights reserved. Strategic Communications.
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
