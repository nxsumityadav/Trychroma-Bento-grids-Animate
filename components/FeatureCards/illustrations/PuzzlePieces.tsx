import React from 'react';
import { motion } from 'framer-motion';
import { IllustrationProps } from '../../../types';

const PuzzlePieces: React.FC<IllustrationProps> = ({ isHovered }) => {
  // SVG Paths for 80x80 puzzle pieces
  
  // Top Left: Male Right, Female Bottom
  const pathTL = `
    M 0 0 H 80
    L 80 25 C 98 25 98 55 80 55
    L 80 80
    L 55 80 C 55 62 25 62 25 80
    L 0 80 Z
  `;

  // Top Right: Female Left, Male Bottom
  const pathTR = `
    M 0 0 H 80
    L 80 80
    L 55 80 C 55 98 25 98 25 80
    L 0 80
    L 0 55 C 18 55 18 25 0 25
    L 0 0 Z
  `;

  // Bottom Left: Male Top, Male Right
  const pathBL = `
    M 0 0 
    L 25 0 C 25 -18 55 -18 55 0
    L 80 0
    L 80 25 C 98 25 98 55 80 55
    L 80 80
    L 0 80 Z
  `;

  // Bottom Right: Female Top, Female Left
  const pathBR = `
    M 0 0 
    L 25 0 C 25 18 55 18 55 0
    L 80 0
    L 80 80
    L 0 80
    L 0 55 C 18 55 18 25 0 25
    L 0 0 Z
  `;

  const pieceSize = 80;
  // Gap calculation: spread when NOT hovered (15px), close when hovered (0px)
  const gap = isHovered ? 0 : 15;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Increased width to w-80 (320px) to make illustration bigger */}
      <svg viewBox="0 0 240 240" className="w-80 h-auto overflow-visible">
        <g transform="translate(40, 40)">
          
          {/* Top Left Piece - White */}
          <motion.g
            animate={{ x: -gap, y: -gap }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <path d={pathTL} fill="white" stroke="black" strokeWidth="0.8" />
          </motion.g>

          {/* Top Right Piece - Dithered */}
          <motion.g
            transform={`translate(${pieceSize}, 0)`}
            animate={{ x: gap, y: -gap }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
             <path d={pathTR} fill="white" stroke="black" strokeWidth="0.8" />
             <path d={pathTR} fill="url(#dither-pattern)" className="opacity-60" style={{ mixBlendMode: 'multiply' }} />
             <path d={pathTR} fill="none" stroke="black" strokeWidth="0.8" />
          </motion.g>

          {/* Bottom Left Piece - Gradient Dither */}
          <motion.g
            transform={`translate(0, ${pieceSize})`}
            animate={{ x: -gap, y: gap }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
             <defs>
               <clipPath id="clip-bl">
                 <path d={pathBL} />
               </clipPath>
             </defs>
             <path d={pathBL} fill="white" stroke="black" strokeWidth="0.8" />
             <path d={pathBL} fill="url(#dither-pattern-dense)" className="opacity-50" />
             {/* Gradient Overlay for the dark band effect */}
             <rect x="-20" y="0" width="120" height="80" fill="url(#puzzle-gradient)" clipPath="url(#clip-bl)" style={{ mixBlendMode: 'multiply' }} />
             <path d={pathBL} fill="none" stroke="black" strokeWidth="0.8" />
          </motion.g>

          {/* Bottom Right Piece - Noise */}
          <motion.g
            transform={`translate(${pieceSize}, ${pieceSize})`}
            animate={{ x: gap, y: gap }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
             <path d={pathBR} fill="white" stroke="black" strokeWidth="0.8" />
             <rect x="0" y="0" width="80" height="80" filter="url(#noise-filter)" clipPath="path(M 0 0 L 25 0 C 25 18 55 18 55 0 L 80 0 L 80 80 L 0 80 L 0 55 C 18 55 18 25 0 25 L 0 0 Z)" opacity="0.4" />
             <path d={pathBR} fill="none" stroke="black" strokeWidth="0.8" />
          </motion.g>

        </g>
      </svg>
    </div>
  );
};

export default PuzzlePieces;