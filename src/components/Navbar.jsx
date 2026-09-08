import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
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

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#F5F1EA] shadow-md border-b border-[#E6E0D6] py-3.5' 
        : 'bg-[#F5F1EA] border-b border-[#E6E0D6]/80 py-5 sm:py-6'
    }`}>
      <div className="deck-container flex items-center justify-between">
        {/* Brand Wordmark & Label */}
        <a href="#" className="flex flex-col group text-decoration-none">
          <div className="font-deck-headline text-2xl sm:text-3xl text-[#1A3330] tracking-tight leading-none">
            GLOBAL AADHAR
          </div>
          <div className="font-deck-body text-[10px] sm:text-[11px] font-bold text-[#2D5A54] tracking-[0.18em] uppercase mt-1">
            STRATEGIC COMMUNICATIONS
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-deck-body text-xs font-bold text-[#4A5856] uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4A5856] hover:text-[#2D5A54] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C77B4A] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary-teal text-xs py-2.5 px-5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-[#E6E0D6] bg-white text-[#2D5A54] hover:bg-[#E6ECEB] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E6E0D6] bg-[#F5F1EA] px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-2.5 font-deck-body text-sm font-bold uppercase tracking-wider text-[#1A3330]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-[#4A5856] hover:bg-white hover:text-[#2D5A54] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 sm:hidden">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-teal w-full justify-center text-xs py-3"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
