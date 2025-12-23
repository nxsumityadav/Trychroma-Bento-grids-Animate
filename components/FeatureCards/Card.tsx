import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ title, description, illustration: Illustration, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useMousePosition(ref);

  // Smooth out the mouse movements
  const xSpring = useSpring(0, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(0, { stiffness: 150, damping: 20 });

  // Update springs when mouse moves
  React.useEffect(() => {
    xSpring.set(mousePos.x);
    ySpring.set(mousePos.y);
  }, [mousePos, xSpring, ySpring]);

  // Transform mouse position to rotation values
  // Max rotation +/- 5 degrees
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      className={`relative bg-white border border-[#E5E5E5] flex flex-col overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="flex-1 flex flex-col p-6 sm:p-8 h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Updated Title Typography: Larger tracking, medium weight, monospace */}
        <h3 className="text-base font-mono uppercase tracking-[0.15em] font-medium text-black mb-6">
          {title}
        </h3>
        
        {/* Updated Description Typography: Sans-serif, specific gray, readable size */}
        <div className="text-gray-900 text-[15px] leading-relaxed mb-8 flex-grow font-sans font-normal">
          {description}
        </div>

        <div className="relative w-full mt-auto" style={{ minHeight: '200px' }}>
          <Illustration isHovered={isHovered} />
        </div>
      </motion.div>

      {/* Subtle border shine effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none border border-black/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

export default Card;