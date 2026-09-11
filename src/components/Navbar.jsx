import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header className="sticky top-2 sm:top-3.5 z-50 px-3 sm:px-6 lg:px-8 max-w-[1340px] mx-auto w-full transition-all duration-300">
      {/* Floating Capsule Bar */}
      <div className={`w-full rounded-2xl sm:rounded-full transition-all duration-300 border border-[#D5D1C8] border-b-2 border-b-[#2D5A54] relative backdrop-blur-md ${
        scrolled 
          ? 'bg-[#EDEBE7]/98 shadow-xl py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8' 
          : 'bg-[#EDEBE7]/95 shadow-md py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8'
      }`}>
        {/* Integrated Scroll Progress Line */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-transparent rounded-full overflow-hidden pointer-events-none"
        >
          <div 
            className="h-full bg-[#2D5A54] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a 
            href="#" 
            onClick={handleBrandClick} 
            className="flex flex-col group text-decoration-none cursor-pointer shrink-0"
          >
            <div className="font-deck-headline text-base sm:text-lg xl:text-xl font-bold text-[#2D5A54] tracking-tight leading-none group-hover:text-[#23413C] transition-colors whitespace-nowrap">
              GLOBAL AADHAR
            </div>
            <div className="font-deck-body text-[8px] sm:text-[9px] font-bold text-[#555555] tracking-[0.16em] uppercase mt-0.5 whitespace-nowrap">
              STRATEGIC COMMUNICATIONS
            </div>
          </a>

          {/* Clean Inline Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-7 font-deck-body text-xs xl:text-[13px] font-semibold text-[#2B2B2B] whitespace-nowrap">
            {navLinks.map((link) => {
              const isContactLink = link.href === '#contact';
              const isActive = isContactLink ? currentPage === 'contact' : false;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors py-1 relative cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive 
                      ? 'text-[#2D5A54] font-bold' 
                      : 'text-[#2B2B2B] hover:text-[#2D5A54]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D5A54] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateContact ? onNavigateContact() : (window.location.hash = '#contact')}
              className="hidden sm:inline-flex btn-primary-teal text-xs py-2 px-5 rounded-full cursor-pointer shadow-sm hover:shadow-md transition-all whitespace-nowrap font-bold"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-[#D5D1C8] bg-[#E5E3DE] text-[#2D5A54] hover:bg-white transition-colors cursor-pointer shadow-2xs flex items-center justify-center w-9 h-9"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-2xl border border-[#D5D1C8] bg-[#EDEBE7]/98 backdrop-blur-xl p-4 sm:p-5 space-y-3 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-1 font-deck-body text-xs sm:text-sm font-semibold text-[#2B2B2B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl hover:bg-[#2D5A54] hover:text-white transition-all cursor-pointer font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 sm:hidden border-t border-[#D5D1C8]/60">
            <button
              type="button"
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
