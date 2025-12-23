import React, { ReactNode } from 'react';

export interface IllustrationProps {
  isHovered: boolean;
}

export interface CardProps {
  title: string;
  description: ReactNode;
  illustration: React.FC<IllustrationProps>;
  className?: string;
  delay?: number;
}