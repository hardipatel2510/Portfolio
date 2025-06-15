// components/AnimatedSection.tsx
"use client";
import React, { useRef, useEffect, ReactNode } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  initialY?: number;
  exitY?: number; 
  threshold?: number;
  animateOnce?: boolean; // Default to false: animate in and out
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 600,
  staggerDelay = 150,
  initialY = 30,
  exitY,
  threshold = 0.1,
  animateOnce = false, 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const finalExitY = exitY !== undefined ? exitY : initialY;

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const elementsToAnimate = Array.from(currentRef.children) as HTMLElement[];
    if (elementsToAnimate.length === 0) return;

    // Set initial hidden state. This is for the very first appearance.
    // If !animateOnce, elements will be animated back to this state when they scroll out.
    anime.set(elementsToAnimate, { opacity: 0, translateY: initialY });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (elementsToAnimate.length === 0) return;

          if (entry.isIntersecting) {
            anime.remove(elementsToAnimate); // Stop any ongoing animations
            anime({
              targets: elementsToAnimate,
              opacity: [0, 1],
              translateY: [initialY, 0],
              delay: anime.stagger(staggerDelay, { start: delay }),
              duration,
              easing: 'easeOutExpo',
            });
            if (animateOnce) {
              observer.unobserve(currentRef);
            }
          } else {
            if (!animateOnce) { // Only animate out if not animateOnce
              anime.remove(elementsToAnimate); // Stop any ongoing animations
              anime({
                targets: elementsToAnimate,
                opacity: [1, 0],
                translateY: [0, finalExitY],
                delay: 0, // No stagger on exit
                duration: duration / 2, // Faster exit
                easing: 'easeInExpo',
              });
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Clean up anime instances on unmount if elementsToAnimate is not empty
      if (elementsToAnimate.length > 0) {
        anime.remove(elementsToAnimate);
      }
    };
  // Re-run effect if these specific props change. Children content change doesn't re-trigger.
  }, [delay, duration, staggerDelay, initialY, finalExitY, threshold, animateOnce]); 

  return (
    <div ref={sectionRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedSection;
