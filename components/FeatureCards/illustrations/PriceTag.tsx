import React from 'react';
import { motion } from 'framer-motion';
import { IllustrationProps } from '../../../types';

const PriceTag: React.FC<IllustrationProps> = ({ isHovered }) => {
  // Sawtooth pattern parameters
  const width = 160;
  const height = 80;
  const teethCount = 3;
  const toothDepth = 8;
  
  // Generate sawtooth path
  // Start Top-Left
  let d = `M 0 0 L ${width} 0`;
  
  // Right side zig-zag (down)
  const segmentHeight = height / teethCount;
  for (let i = 0; i < teethCount; i++) {
    d += ` L ${width - toothDepth} ${segmentHeight * i + segmentHeight / 2}`;
    d += ` L ${width} ${segmentHeight * (i + 1)}`;
  }
  
  // Bottom side
  d += ` L 0 ${height}`;
  
  // Left side zig-zag (up)
  for (let i = teethCount - 1; i >= 0; i--) {
    d += ` L ${toothDepth} ${segmentHeight * i + segmentHeight / 2}`;
    d += ` L 0 ${segmentHeight * i}`;
  }
  
  d += " Z";

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg 
        viewBox="0 0 240 160" 
        className="w-full h-auto max-w-[280px]"
        animate={{ 
          rotate: isHovered ? -2 : 0,
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <g transform="translate(40, 40) rotate(-15 80 40)">
            
            {/* Tag Background (White) */}
            <path 
              d={d} 
              fill="white" 
              stroke="black" 
              strokeWidth="1.2"
              strokeLinejoin="miter"
            />
            
            {/* Dither Texture Overlay */}
            <path 
              d={d} 
              fill="url(#dither-pattern)" 
              className="opacity-40"
              style={{ mixBlendMode: 'multiply' }}
            />

            {/* Inner Border (Double line effect from image) */}
            <path 
              d={d} 
              fill="none" 
              stroke="black" 
              strokeWidth="1"
              transform="scale(0.92) translate(6.5, 3.2)"
              className="opacity-100"
            />

            {/* Price Text */}
            <text 
              x={width / 2} 
              y={height / 2} 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="font-mono text-3xl font-bold tracking-widest"
              fill="black"
              style={{ filter: 'drop-shadow(1px 1px 0px white)' }} // Tiny stroke effect to separate from dots
            >
              $0.00
            </text>
        </g>
      </motion.svg>
    </div>
  );
};

export default PriceTag;