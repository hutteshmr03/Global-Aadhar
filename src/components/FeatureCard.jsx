import React from 'react';

/**
 * Global Standardized Feature Card Component
 * Enforces unified styling, internal alignment, and spacing rules across all cards on the site.
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
    <div className={`min-w-0 bg-[#EDEBE7] rounded-2xl border border-[#D5D1C8] shadow-sm hover:shadow-xl hover:border-[#2D5A54]/60 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full group relative overflow-hidden ${className}`}>
      {/* Subtle Ambient Hover Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D5A54]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2D5A54]/10 transition-all duration-500"></div>

      <div className="relative z-10">
        {/* Optional Image Banner (for sector cards or media cards) */}
        {image && (
          <div className="relative -mx-5 -mt-5 mb-5 sm:-mx-6 sm:-mt-6 sm:mb-6 lg:-mx-7 lg:-mt-7 lg:mb-7 h-40 sm:h-44 overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23413C]/80 via-[#23413C]/20 to-transparent"></div>
            {subtitle && (
              <div className="absolute bottom-2.5 left-3.5 right-3.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#EDEBE7] uppercase tracking-wider block drop-shadow">
                  {subtitle}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Top Header Row: Square Tinted Icon Badge (Left) + Tinted Pill Label (Right) */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 w-full mb-4 sm:mb-5">
          {/* Icon Badge */}
          <div className="w-10 h-10 rounded-xl bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] flex items-center justify-center shrink-0 font-bold font-deck-headline text-sm shadow-2xs group-hover:bg-[#2D5A54] group-hover:text-white group-hover:border-[#2D5A54] transition-all duration-300">
            {renderIcon()}
          </div>

          {/* Pill Badge */}
          {badge && (
            <span className="max-w-full px-3 py-1 rounded-full bg-[#2D5A54]/10 border border-[#2D5A54]/15 text-[#2D5A54] font-deck-body text-[10.5px] font-bold uppercase tracking-wider text-right break-words shadow-2xs">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`${minTitleHeight} flex items-start text-left font-deck-headline text-lg sm:text-xl text-[#2D5A54] tracking-tight leading-snug mb-2.5`}>
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
              <div key={idx} className="flex items-start gap-2.5 w-full">
                <div className="w-4 h-4 rounded-full bg-[#2D5A54] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="min-w-0 font-deck-body text-xs font-semibold text-[#2B2B2B] leading-snug text-left break-words">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Button */}
      {ctaText && (
        <div className="pt-6 mt-auto relative z-10">
          <a
            href={ctaHref}
            onClick={handleButtonClick}
            className="self-start max-w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-[#2D5A54]/30 text-[#2D5A54] font-deck-body font-bold text-[11px] uppercase tracking-wider text-left whitespace-normal break-words hover:bg-[#2D5A54] hover:text-white hover:border-[#2D5A54] transition-all duration-200 shadow-xs group/btn cursor-pointer"
          >
            <span>{ctaText}</span>
            <span className="text-[#2D5A54] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
