import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Global Standardized Feature Card Component
 * Enforces unified styling, internal alignment, and Media Mantra hover-zoom / lighting effects.
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

  return (
    <div className={`min-w-0 bg-[#EDEBE7] rounded-3xl border border-[#D5D1C8] shadow-xs hover:shadow-2xl hover:border-[#2D5A54] hover:-translate-y-2 transition-all duration-400 p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full group relative overflow-hidden ${className}`}>
      {/* Subtle Ambient Hover Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#2D5A54]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2D5A54]/18 transition-all duration-500"></div>

      <div className="relative z-10">
        {/* Media Mantra Style: Photo Banner with Smooth Hover-Zoom & Gradient Darken */}
        {image && (
          <div className="relative -mx-6 -mt-6 mb-6 sm:-mx-7 sm:-mt-7 sm:mb-7 lg:-mx-8 lg:-mt-8 lg:mb-8 h-48 sm:h-52 overflow-hidden rounded-t-3xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A332F]/90 via-[#1A332F]/30 to-transparent group-hover:opacity-95 transition-opacity duration-300"></div>
            {subtitle && (
              <div className="absolute bottom-3 left-4 right-4">
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
          <div className="w-11 h-11 rounded-2xl bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] flex items-center justify-center shrink-0 font-bold font-deck-headline text-sm shadow-2xs group-hover:bg-[#2D5A54] group-hover:text-white group-hover:border-[#2D5A54] transition-all duration-300">
            {renderIcon()}
          </div>

          {/* Pill Badge */}
          {badge && (
            <span className="max-w-full px-3.5 py-1 rounded-full bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider text-right break-words shadow-2xs">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`${minTitleHeight} flex items-start text-left font-deck-headline text-lg sm:text-xl text-[#2D5A54] tracking-tight leading-snug mb-2.5 group-hover:text-[#1A332F] transition-colors`}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className={`${minDescHeight} text-left font-deck-body text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-4`}>
            {description}
          </p>
        )}

        {/* Divider */}
        <div className="w-full border-t border-[#D5D1C8]/90 my-4 sm:my-5"></div>

        {/* Checklist */}
        {bullets && bullets.length > 0 && (
          <div className="space-y-2.5 w-full">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-left text-xs font-deck-body font-semibold text-[#2B2B2B]">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A54] shrink-0 mt-0.5" />
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
            className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full border border-[#D5D1C8] group-hover:border-[#2D5A54] text-[#2D5A54] group-hover:bg-[#2D5A54] group-hover:text-white font-deck-body font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xs cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      )}
    </div>
  );
}
