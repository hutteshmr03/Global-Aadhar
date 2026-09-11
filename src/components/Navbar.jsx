import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigateContact, onNavigateHome, onNavigateSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Who We Are', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Core Services', href: '#services' },
    { label: 'Engagement Model', href: '#engagement-model' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Commercial Models', href: '#models' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href === '#contact') {
      if (onNavigateContact) onNavigateContact();
      else window.location.hash = '#contact';
    } else {
      if (onNavigateSection) onNavigateSection(href);
      else window.location.hash = href;
    }
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    else window.location.hash = '';
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 lg:px-8 max-w-[1260px] mx-auto w-full transition-all duration-300">
      {/* Floating Capsule Container */}
      <div className={`w-full rounded-full transition-all duration-300 border relative backdrop-blur-md ${
        scrolled 
          ? 'bg-[#EDEBE7]/95 border-[#D5D1C8] shadow-xl py-2 sm:py-2.5 px-4 sm:px-6' 
          : 'bg-[#EDEBE7]/90 border-[#D5D1C8]/90 shadow-lg py-2.5 sm:py-3 px-4 sm:px-6'
      }`}>
        {/* Integrated Scroll Progress Line */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#2D5A54]/30 rounded-full overflow-hidden pointer-events-none"
        >
          <div 
            className="h-full bg-[#2D5A54] transition-all duration-150 ease-out rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Wordmark & Monogram Badge */}
          <a 
            href="#" 
            onClick={handleBrandClick} 
            className="flex items-center gap-2.5 group text-decoration-none cursor-pointer shrink-0 mr-1 xl:mr-3"
          >
            {/* Stylized Brand Emblem */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2D5A54] text-white flex items-center justify-center font-deck-headline text-xs sm:text-sm font-bold shadow-xs group-hover:bg-[#23413C] transition-colors shrink-0">
              GA
            </div>

            <div className="flex flex-col">
              <div className="font-deck-headline text-base sm:text-lg xl:text-xl text-[#2D5A54] tracking-tight leading-none group-hover:text-[#23413C] transition-colors whitespace-nowrap">
                GLOBAL AADHAR
              </div>
              <div className="font-deck-body text-[8px] sm:text-[9px] xl:text-[10px] font-bold text-[#555555] tracking-[0.14em] uppercase mt-0.5 whitespace-nowrap">
                STRATEGIC COMMUNICATIONS
              </div>
            </div>
          </a>

          {/* Center Navigation Links (Clean Onstro-Style Capsule Links) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 font-deck-body text-[11px] xl:text-xs font-semibold text-[#2B2B2B] whitespace-nowrap">
            {navLinks.map((link) => {
              const isContactLink = link.href === '#contact';
              const isActive = isContactLink ? currentPage === 'contact' : false;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'bg-[#2D5A54] text-white font-bold shadow-xs' 
                      : 'text-[#2B2B2B] hover:text-[#2D5A54] hover:bg-[#2D5A54]/10'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onNavigateContact ? onNavigateContact() : (window.location.hash = '#contact')}
              className="hidden sm:inline-flex btn-primary-teal text-xs py-2 px-5 rounded-full cursor-pointer shadow-md whitespace-nowrap font-bold"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full border border-[#D5D1C8] bg-[#E5E3DE] text-[#2D5A54] flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-2xs"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-3xl border border-[#D5D1C8] bg-[#EDEBE7]/98 backdrop-blur-xl p-5 space-y-3 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-1 font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-[#2B2B2B] hover:bg-[#2D5A54] hover:text-white transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 sm:hidden">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateContact) onNavigateContact();
                else window.location.hash = '#contact';
              }}
              className="btn-primary-teal w-full justify-center text-xs py-3 rounded-full cursor-pointer shadow-md font-bold"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
