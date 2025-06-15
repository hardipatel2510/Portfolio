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
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 600,
  staggerDelay = 150,
  initialY = 30,
  threshold = 0.1,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Initially hide children
    // Ensure children are direct descendants or query more specifically if needed
    const elementsToAnimate = Array.from(currentRef.children) as HTMLElement[];
    if (elementsToAnimate.length > 0) {
      anime.set(elementsToAnimate, { opacity: 0, translateY: initialY });
    }


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementsToAnimate.length > 0) {
              anime({
                targets: elementsToAnimate,
                opacity: [0, 1],
                translateY: [initialY, 0],
                delay: anime.stagger(staggerDelay, { start: delay }),
                duration,
                easing: 'easeOutExpo',
              });
            }
            observer.unobserve(currentRef);
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
      // Optional: Reset animation if component unmounts and re-mounts
      // anime.remove(elementsToAnimate);
    };
  }, [delay, duration, staggerDelay, initialY, threshold, children]); // Add children to dep array if its content changes

  return (
    <div ref={sectionRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedSection;
