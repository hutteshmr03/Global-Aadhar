import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandIntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return false;

    // Check if user has already seen the intro this session
    const hasSeen = sessionStorage.getItem('ga_intro_seen');
    if (hasSeen) return false;

    return true;
  });

  useEffect(() => {
    if (!isVisible) return;

    // Update browser theme-color meta tag to match the intro brand color
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeMeta);
    }
    const previousThemeColor = themeMeta.getAttribute('content') || '#E5E3DE';
    themeMeta.setAttribute('content', '#2D5A54');

    // Mark as seen in sessionStorage
    sessionStorage.setItem('ga_intro_seen', 'true');

    // Lock body scroll temporarily while intro plays
    document.body.style.overflow = 'hidden';

    // Auto-complete timer: 1.6s total duration
    const timer = setTimeout(() => {
      handleDismiss(previousThemeColor);
    }, 1650);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      if (themeMeta) {
        themeMeta.setAttribute('content', previousThemeColor);
      }
    };
  }, [isVisible]);

  const handleDismiss = (prevColor = '#E5E3DE') => {
    setIsVisible(false);
    document.body.style.overflow = '';
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', prevColor);
    }
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="brand-intro-splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100%', 
            opacity: 0.98,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } 
          }}
          onClick={() => handleDismiss()}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#2D5A54] text-[#EDEBE7] select-none cursor-pointer overflow-hidden"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Subtle Ambient Radial Lighting in Brand Pine */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(61,117,110,0.45)_0%,rgba(45,90,84,0.95)_60%,rgba(26,51,47,1)_100%)] pointer-events-none"></div>

          {/* Background Decorative Accent Ring */}
          <div className="absolute w-[650px] h-[650px] rounded-full border border-white/10 opacity-30 pointer-events-none animate-pulse-glow"></div>

          {/* Centered Wordmark Lockup */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-3.5 max-w-4xl">
            {/* Top Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.22em' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              className="font-deck-body text-[10px] sm:text-xs font-bold text-emerald-200/90 uppercase tracking-[0.22em]"
            >
              STRATEGIC PR & COMMUNICATIONS
            </motion.div>

            {/* Bold Giant Brand Wordmark */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="font-deck-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none drop-shadow-lg"
            >
              GLOBAL AADHAR
            </motion.h1>

            {/* Brand Underline Divider with Animated Width */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '120px', opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
              className="h-[3px] bg-gradient-to-r from-emerald-400 to-white/90 rounded-full"
            />

            {/* Sub-Headline & Bureau */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease: 'easeOut' }}
              className="flex items-center gap-2 pt-1 font-deck-body text-xs sm:text-sm font-semibold text-[#D5D1C8] tracking-wider uppercase"
            >
              <span>BUILDING TRUST. CREATING IMPACT.</span>
              <span className="text-white/40">•</span>
              <span className="text-emerald-300">GOA & WESTERN INDIA</span>
            </motion.div>
          </div>

          {/* Bottom Tap to Skip Hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="absolute bottom-6 font-deck-body text-[10px] text-white/50 tracking-widest uppercase"
          >
            TAP ANYWHERE TO ENTER
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
