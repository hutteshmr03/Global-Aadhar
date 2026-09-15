import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Global Standardized Feature Card Component
 * Clean, simple, and premium user-friendly hover interaction.
 */
export default function FeatureCard({
  icon: IconOrString,
  badge,
  title,
  subtitle,
  description,
  bullets = [],
  ctaText = "Explore Solution",
  ctaHref = "#contact",
  onCtaClick,
  minTitleHeight = "min-h-[2.5rem] sm:min-h-[2.75rem]",
  minDescHeight = "min-h-[3.25rem] sm:min-h-[3.75rem]",
  image,
  variant = "default",
  className = "",
}) {
  const renderIcon = () => {
    if (!IconOrString) {
      return <span className="w-2 h-2 rounded-full bg-current"></span>;
    }
    if (React.isValidElement(IconOrString)) {
      return IconOrString;
    }
    if (typeof IconOrString === 'string' || typeof IconOrString === 'number') {
      return <span className="text-inherit">{IconOrString}</span>;
    }
    const IconComponent = IconOrString;
    return <IconComponent className="w-4 h-4 text-inherit" />;
  };

  const handleButtonClick = (e) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick(e);
    }
  };

  const isPillar = variant === 'pillar';
  const isMethodology = variant === 'methodology' || variant === 'white';

  return (
    <motion.div 
      whileHover={
        image 
          ? { y: -6, scale: 1.02 }
          : isPillar 
            ? { y: -6, scale: 1.02 } 
            : { y: -5 }
      }
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`min-w-0 rounded-3xl border p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full group relative overflow-hidden transform-gpu z-10 hover:z-20 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0 transition-all duration-300 ease-out ${
        isMethodology
          ? 'bg-white border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] hover:border-[#2D5A54]'
          : isPillar 
            ? 'bg-[#EDEBE7] border-[#D5D1C8] hover:border-[#3E7C70] hover:shadow-[0_24px_48px_-12px_rgba(62,124,112,0.30)]' 
            : 'bg-[#EDEBE7] border-[#D5D1C8] hover:border-[#2D5A54] hover:shadow-[0_18px_38px_-8px_rgba(45,90,84,0.22)]'
      } ${className}`}
    >
      {/* Ultra-Smooth Animated Expanding Color Wave (Pillar Variant) */}
      {isPillar && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-3xl">
          {/* Primary GPU-accelerated expanding color wave */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#4E9487] via-[#3E7C70] to-[#32695F] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 origin-top-right transform-gpu will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
          
          {/* Secondary counter-fill wave for multi-tone depth */}
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#32695F] via-[#3E7C70] to-[#4E9487] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom-left transform-gpu will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"></div>
          
          {/* Ambient soft glow highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
        </div>
      )}

      {/* Subtle ambient corner light bloom for Methodology white cards */}
      {isMethodology && (
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#2D5A54]/5 blur-xl group-hover:bg-[#2D5A54]/10 group-hover:scale-125 transition-all duration-500 pointer-events-none z-0"></div>
      )}

      <div className="relative z-10">
        {/* Media Mantra Style: Photo Banner with Uiverse-Adapted Floating Image Bob & Soft Brand-Teal Tint */}
        {image && (
          <div className="relative -mx-6 -mt-6 mb-6 sm:-mx-7 sm:-mt-7 sm:mb-7 lg:-mx-8 lg:-mt-8 lg:mb-8 h-48 sm:h-52 overflow-hidden rounded-t-3xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover card-image-bob"
            />
            {/* Ambient Darken + Soft Brand-Teal Wash on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/85 via-transparent to-transparent group-hover:bg-[#2D5A54]/15 transition-colors duration-300 pointer-events-none"></div>
            {subtitle && (
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#EDEBE7] uppercase tracking-wider block drop-shadow-md">
                  {subtitle}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Top Header Row: Square Tinted Icon Badge (Left) + Tinted Pill Label (Right) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 w-full mb-4 sm:mb-5">
          {/* Icon Badge */}
          <div className={`w-11 h-11 rounded-2xl bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] flex items-center justify-center shrink-0 font-bold font-deck-headline text-sm shadow-2xs transform-gpu transition-all duration-300 ${
            isPillar 
              ? 'group-hover:bg-white group-hover:text-[#38766B] group-hover:border-white group-hover:shadow-md' 
              : 'group-hover:bg-[#2D5A54] group-hover:text-white group-hover:border-[#2D5A54]'
          }`}>
            {renderIcon()}
          </div>

          {/* Pill Badge */}
          {badge && (
            <span className={`max-w-full px-3.5 py-1 rounded-full bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider text-right break-words shadow-2xs transform-gpu transition-all duration-300 ${
              isPillar 
                ? 'group-hover:bg-white group-hover:text-[#38766B] group-hover:border-white group-hover:shadow-xs' 
                : 'group-hover:bg-[#2D5A54] group-hover:text-white'
            }`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`${minTitleHeight} flex items-start text-left font-deck-headline text-lg sm:text-xl text-[#1A332F] font-bold tracking-tight leading-snug mb-1 transition-colors duration-300 ${
          isPillar ? 'group-hover:text-white' : 'group-hover:text-[#2D5A54]'
        }`}>
          {title}
        </h3>

        {/* Subtitle / Tagline */}
        {subtitle && (
          <div className="text-[10.5px] font-deck-body font-bold text-[#2D5A54] uppercase tracking-wider mb-2.5">
            {subtitle}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className={`${minDescHeight} text-left font-deck-body text-xs sm:text-sm text-[#333333] leading-relaxed mb-4 transition-colors duration-300 ${
            isPillar ? 'group-hover:text-[#F3F1ED]' : ''
          }`}>
            {description}
          </p>
        )}

        {/* Divider */}
        <div className={`w-full border-t my-4 sm:my-5 transition-colors duration-300 ${
          isPillar ? 'border-[#D5D1C8]/90 group-hover:border-white/30' : 'border-[#E5E8EE]'
        }`}></div>

        {/* Checklist */}
        {bullets && bullets.length > 0 && (
          <div className="space-y-2.5 w-full">
            {bullets.map((bullet, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-2.5 text-left text-xs font-deck-body font-semibold text-[#2B2B2B] transition-colors duration-300 ${
                  isPillar ? 'group-hover:text-white' : ''
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 text-[#2D5A54] transition-all duration-300 ${
                  isPillar ? 'group-hover:text-emerald-200' : ''
                }`} />
                <span className="leading-snug">{bullet}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Outlined Pill CTA Button */}
      {ctaText && (
        <div className="pt-6 mt-auto relative z-10">
          <a
            href={ctaHref}
            onClick={handleButtonClick}
            className={`w-full inline-flex items-center justify-between px-5 py-3 rounded-full border border-[#D5D1C8] text-[#2D5A54] font-deck-body font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xs cursor-pointer group/btn ${
              isPillar 
                ? 'group-hover:bg-white group-hover:text-[#38766B] group-hover:border-white group-hover:shadow-md' 
                : 'group-hover:border-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white'
            }`}
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
