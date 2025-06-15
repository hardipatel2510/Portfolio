// components/AnimatedSection.tsx
"use client";
import React, { useRef, useEffect, ReactNode } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number; // This will be the base duration, we'll modify it for enter/exit
  staggerDelay?: number;
  initialY?: number;
  exitY?: number; 
  initialScale?: number;
  exitScale?: number;
  threshold?: number;
  animateOnce?: boolean; // Default to false: animate in and out
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 800, // Default entrance duration
  staggerDelay = 150,
  initialY = 30,
  exitY,
  initialScale = 0.98,
  exitScale = 0.98,
  threshold = 0.1,
  animateOnce = false, 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const finalExitY = exitY !== undefined ? exitY : initialY;
  const entranceDuration = duration;
  const exitDuration = duration / 2;

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const elementsToAnimate = Array.from(currentRef.children) as HTMLElement[];
    if (elementsToAnimate.length === 0) return;

    anime.set(elementsToAnimate, { opacity: 0, translateY: initialY, scale: initialScale });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (elementsToAnimate.length === 0) return;

          if (entry.isIntersecting) {
            anime.remove(elementsToAnimate); 
            anime({
              targets: elementsToAnimate,
              opacity: [0, 1],
              translateY: [initialY, 0],
              scale: [initialScale, 1],
              delay: anime.stagger(staggerDelay, { start: delay }),
              duration: entranceDuration,
              easing: 'easeInOutSine',
            });
            if (animateOnce) {
              observer.unobserve(currentRef);
            }
          } else {
            if (!animateOnce) { 
              anime.remove(elementsToAnimate); 
              anime({
                targets: elementsToAnimate,
                opacity: [1, 0],
                translateY: [0, finalExitY],
                scale: [1, exitScale],
                delay: 0, 
                duration: exitDuration,
                easing: 'easeInOutSine',
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
      if (elementsToAnimate.length > 0) {
        anime.remove(elementsToAnimate);
      }
    };
  }, [delay, entranceDuration, exitDuration, staggerDelay, initialY, finalExitY, initialScale, exitScale, threshold, animateOnce, children]); // Added children to re-evaluate if content changes dynamically

  return (
    <div ref={sectionRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedSection;
