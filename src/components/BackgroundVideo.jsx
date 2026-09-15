import React, { useState } from 'react';

/**
 * BackgroundVideo Component
 * Inspired by Media Mantra (https://www.mediamantra.net/)
 * Delivers a subtle, continuous cinematic background video with ambient tinting and high readability.
 */
export default function BackgroundVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Reliable, high-definition PR & corporate communications background video streams
  const videoSource = "https://mediamantra.net/assests/Front/video/RF_Final.mp4";

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden select-none"
    >
      {/* Cinematic Looping Video - Monochrome & Ambient */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-10 sm:opacity-12' : 'opacity-0'
        } scale-105 grayscale contrast-110 brightness-85`}
      >
        <source src={videoSource} type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-an-office-4848-large.mp4" type="video/mp4" />
      </video>

      {/* Solid High-Contrast Protective Parchment Wash */}
      <div className="absolute inset-0 bg-[#E5E3DE]/92 backdrop-blur-[1.5px]"></div>
      
      {/* Soft Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#E5E3DE]/20 to-[#E5E3DE]/60"></div>
    </div>
  );
}
