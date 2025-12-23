import React from 'react';
import { motion } from 'framer-motion';
import { IllustrationProps } from '../../../types';

const LayeredPlanes: React.FC<IllustrationProps> = ({ isHovered }) => {
  // Isometric projection approximation
  // Using SVG for precise control over lines and fills
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 160" className="w-full h-auto drop-shadow-sm">
        
        {/* Bottom Layer */}
        <motion.g
          animate={isHovered ? { y: 10 } : { y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M100 120 L180 100 L100 80 L20 100 Z" fill="none" stroke="black" strokeWidth="1" />
          <path d="M100 120 L180 100 L100 80 L20 100 Z" fill="url(#dither-pattern-dense)" className="opacity-10" />
          {/* Dots Bottom */}
          <circle cx="60" cy="100" r="3" fill="black" />
          <circle cx="110" cy="105" r="3" fill="#9CA3AF" />
          <circle cx="130" cy="95" r="3" fill="#9CA3AF" />
        </motion.g>

        {/* Middle Layer */}
        <motion.g
          animate={isHovered ? { y: 0 } : { y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M100 90 L180 70 L100 50 L20 70 Z" fill="white" stroke="black" strokeWidth="1" className="opacity-90" />
           {/* Dots Middle */}
          <circle cx="90" cy="75" r="3" fill="#F97316" /> {/* Orange */}
          <circle cx="120" cy="65" r="3" fill="#F97316" />
        </motion.g>

        {/* Top Layer */}
        <motion.g
          animate={isHovered ? { y: -10 } : { y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M100 60 L180 40 L100 20 L20 40 Z" fill="white" stroke="black" strokeWidth="1" className="opacity-95" />
          <path d="M100 60 L180 40 L100 20 L20 40 Z" fill="url(#dither-pattern)" className="opacity-20" />
          {/* Dot Top */}
          <circle cx="80" cy="40" r="3" fill="#3B82F6" /> {/* Blue */}
        </motion.g>

        {/* Connecting Lines (Animated) */}
        {/* Blue to Orange */}
        <motion.path 
          d="M80 40 C 80 50, 90 60, 90 75" 
          fill="none" 
          stroke="black" 
          strokeWidth="1" 
          strokeDasharray="4 2"
          animate={isHovered ? { strokeDashoffset: -20, pathLength: 1 } : { strokeDashoffset: 0, pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        
        {/* Orange to Black */}
        <motion.path 
          d="M90 75 C 90 85, 60 90, 60 100" 
          fill="none" 
          stroke="black" 
          strokeWidth="1"
          strokeDasharray="4 2"
          animate={isHovered ? { strokeDashoffset: -20 } : { strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Orange 2 to Void */}
        <motion.path 
          d="M120 65 C 120 75, 110 85, 110 95" 
          fill="none" 
          stroke="black" 
          strokeWidth="1" 
          strokeDasharray="2 2"
          className="opacity-30"
        />

      </svg>
    </div>
  );
};

export default LayeredPlanes;