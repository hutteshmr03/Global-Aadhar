import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigateContact, onNavigateHome, onNavigateSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#E5E3DE] shadow-md border-b border-[#D5D1C8] py-3.5' 
        : 'bg-[#E5E3DE] border-b border-[#D5D1C8]/80 py-5 sm:py-6'
    }`}>
      <div className="deck-container flex items-center justify-between">
        {/* Brand Wordmark & Label */}
        <a 
          href="#" 
          onClick={handleBrandClick} 
          className="flex flex-col group text-decoration-none cursor-pointer"
        >
          <div className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
            GLOBAL AADHAR
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54] tracking-[0.18em] uppercase mt-1">
            STRATEGIC COMMUNICATIONS
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-deck-body text-xs font-bold text-[#2B2B2B] uppercase tracking-wider">
          {navLinks.map((link) => {
            const isContactLink = link.href === '#contact';
            const isActive = isContactLink ? currentPage === 'contact' : false;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors py-1 relative group cursor-pointer ${
                  isActive ? 'text-[#2D5A54] font-extrabold' : 'text-[#2B2B2B] hover:text-[#2D5A54]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#2D5A54] transition-all duration-200 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigateContact ? onNavigateContact() : (window.location.hash = '#contact')}
            className="hidden sm:inline-flex btn-primary-teal text-xs py-2.5 px-5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-[#D5D1C8] bg-[#EDEBE7] text-[#2D5A54] hover:bg-[#E5E3DE] transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#D5D1C8] bg-[#E5E3DE] px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-2.5 font-deck-body text-sm font-bold uppercase tracking-wider text-[#2D5A54]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-lg text-[#2B2B2B] hover:bg-[#EDEBE7] hover:text-[#2D5A54] transition-colors cursor-pointer"
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
              className="btn-primary-teal w-full justify-center text-xs py-3 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
