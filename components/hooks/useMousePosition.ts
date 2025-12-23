import { useState, useEffect, RefObject } from 'react';

export const useMousePosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width; // -0.5 to 0.5
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height; // -0.5 to 0.5
      setPosition({ x, y });
    };
    
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
  
  return position;
};