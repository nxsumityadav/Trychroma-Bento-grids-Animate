import React from 'react';
import { motion } from 'framer-motion';
import { IllustrationProps } from '../../../types';

const LangBlock = ({ 
  text, 
  x, 
  y, 
  w, 
  h, 
  isDithered,
  isHovered, 
  delay 
}: { 
  text: string, 
  x: number, 
  y: number, 
  w: number, 
  h: number, 
  isDithered?: boolean,
  isHovered: boolean, 
  delay: number 
}) => {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: isHovered ? -4 : 0,
        x: isHovered ? (x > 150 ? 4 : -4) : 0
      }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Solid Drop Shadow */}
      <rect 
        x={x + 4} 
        y={y + 4} 
        width={w} 
        height={h} 
        fill="black" 
      />
      
      {/* Main Card Background */}
      <rect 
        x={x} 
        y={y} 
        width={w} 
        height={h} 
        fill="white" 
        stroke="black" 
        strokeWidth="1.2"
      />
      
      {/* Dither Pattern if needed */}
      {isDithered && (
        <rect 
          x={x} 
          y={y} 
          width={w} 
          height={h} 
          fill="url(#dither-pattern)" 
          fillOpacity="0.4"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Text */}
      <text
        x={x + w / 2}
        y={y + h / 2 + 1} // +1 for optical center
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-mono font-medium tracking-wide text-sm fill-black uppercase"
        style={{ letterSpacing: '0.05em' }}
      >
        {text}
      </text>
    </motion.g>
  );
};

const LanguageCards: React.FC<IllustrationProps> = ({ isHovered }) => {
  // Increased viewBox height to accommodate bottom cards
  
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 320 260" className="w-full h-auto max-w-[360px]">
        {/* Background Grid - extended height */}
        <rect x="10" y="10" width="300" height="240" fill="url(#grid-pattern)" stroke="black" strokeWidth="1" />
        
        {/* 
           Positions based on the reference image (approximate grid units)
           Grid cell ~20px
        */}

        {/* JS - Top Left (Dithered) */}
        <LangBlock text="JS" x={50} y={30} w={100} h={60} isDithered={true} isHovered={isHovered} delay={0} />

        {/* Python - Top Right (White) */}
        <LangBlock text="Python" x={190} y={30} w={100} h={50} isDithered={false} isHovered={isHovered} delay={0.1} />

        {/* PHP - Middle Left (White) */}
        <LangBlock text="PHP" x={30} y={110} w={100} h={50} isDithered={false} isHovered={isHovered} delay={0.2} />

        {/* Java - Middle Right (Dithered) */}
        <LangBlock text="JAVA" x={170} y={100} w={100} h={60} isDithered={true} isHovered={isHovered} delay={0.3} />

        {/* Ruby - Bottom Left (Dithered) */}
        <LangBlock text="RUBY" x={60} y={180} w={100} h={50} isDithered={true} isHovered={isHovered} delay={0.4} />

        {/* + - Bottom Right (White) */}
        <LangBlock text="+" x={190} y={180} w={60} h={60} isDithered={false} isHovered={isHovered} delay={0.5} />

      </svg>
    </div>
  );
};

export default LanguageCards;