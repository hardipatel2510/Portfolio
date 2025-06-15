// src/components/TypewriterHeading.tsx
"use client";

import { useState, useEffect, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  speed?: number;
  pauseInterval?: number;
  pauseDuration?: number;
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  text,
  speed = 120,
  pauseInterval = 3,
  pauseDuration = 400,
  className,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsPaused(false);
  }, [text]); // Reset if text prop changes

  useEffect(() => {
    if (currentIndex >= text.length) {
      return; // Typing complete
    }

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        // Character typing will resume in the next effect cycle after isPaused is false
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // If not paused, proceed with typing
    const typingTimer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);

      // Check for pause condition for the *next* character, if not the end
      if (
        (currentIndex + 1) % pauseInterval === 0 &&
        currentIndex < text.length - 1 && // Ensure not the last character
        text.length > pauseInterval // Ensure text is long enough for a pause
      ) {
        setIsPaused(true);
      }
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [currentIndex, text, speed, pauseInterval, pauseDuration, isPaused]);

  return (
    <h2 className={cn(className)} {...props}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-blink-text text-primary font-normal">_</span>
      )}
    </h2>
  );
};

export default TypewriterHeading;