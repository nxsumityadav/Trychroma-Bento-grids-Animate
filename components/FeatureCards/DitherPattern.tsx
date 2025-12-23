import React from 'react';

export const DitherPattern = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <pattern id="dither-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="1" height="1" fill="currentColor" className="text-black" />
        <rect x="2" y="2" width="1" height="1" fill="currentColor" className="text-black" />
      </pattern>
      <pattern id="dither-pattern-dense" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="1" height="1" fill="currentColor" className="text-black/20" />
      </pattern>
      
      {/* Grid pattern for Language Cards */}
      <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="black" strokeWidth="0.5" strokeOpacity="0.8" />
      </pattern>
      
      {/* Noise filter for texture */}
      <filter id="noise-filter" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.2 0" />
      </filter>

      {/* Gradient for Bottom Left piece overlay */}
      <linearGradient id="puzzle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
         <stop offset="0%" stopColor="black" stopOpacity="0" />
         <stop offset="30%" stopColor="black" stopOpacity="0.1" />
         <stop offset="50%" stopColor="black" stopOpacity="0.8" />
         <stop offset="70%" stopColor="black" stopOpacity="0.1" />
         <stop offset="100%" stopColor="black" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);