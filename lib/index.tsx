import React, { useState, useEffect } from 'react';
import { Text } from 'ink';

export interface ShimmerTextProps {
  children: string;
  speed?: number;
  colors?: string[];
  direction?: 'left-to-right' | 'right-to-left';
}

const ShimmerText: React.FC<ShimmerTextProps> = ({
  children,
  speed = 200,
  colors = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#E0E7FF', '#C4B5FD', '#A78BFA'],
  direction = 'left-to-right'
}) => {
  const [shimmerPosition, setShimmerPosition] = useState(0);
  const textLength = children.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerPosition((prev) => {
        const next = direction === 'left-to-right' ? prev + 1 : prev - 1;
        
        if (direction === 'left-to-right') {
          return next >= textLength + colors.length ? 0 : next;
        } else {
          return next < -colors.length ? textLength - 1 : next;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, textLength, colors.length, direction]);

  const renderShimmeredText = () => {
    return children.split('').map((char, index) => {
      let colorIndex = -1;
      
      if (direction === 'left-to-right') {
        colorIndex = shimmerPosition - index;
      } else {
        colorIndex = index - shimmerPosition;
      }
      
      if (colorIndex >= 0 && colorIndex < colors.length) {
        return { char, color: colors[colorIndex] };
      }
      
      return { char, dimColor: true };
    });
  };

  const textParts = renderShimmeredText();

  return (
    <Text>
      {textParts.map((part, index) => (
        <Text key={index} color={part.color} dimColor={part.dimColor}>
          {part.char}
        </Text>
      ))}
    </Text>
  );
};

export default ShimmerText;