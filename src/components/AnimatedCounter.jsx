import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter
 * Smoothly animates numbers upwards from 0 when scrolled into view.
 * Handles prefixes (like '₹', '+') and suffixes (like '+', '%', 'M+', ' Lakhs', ' Outlets', ' Articles', etc.)
 */
export default function AnimatedCounter({ value, duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Check if string contains any numbers
    const strVal = String(value);
    const numMatch = strVal.match(/([0-9]+(?:\.[0-9]+)?)/);

    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numMatch[1]);
    const prefix = strVal.slice(0, numMatch.index);
    const suffix = strVal.slice(numMatch.index + numMatch[0].length);
    const isDecimal = numMatch[1].includes('.');
    const decimalPlaces = isDecimal ? numMatch[1].split('.')[1].length : 0;

    let startTime = null;
    let animationFrameId;

    const updateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Smooth easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = (targetNum * easeProgress).toFixed(decimalPlaces);

      setDisplayValue(`${prefix}${currentNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
