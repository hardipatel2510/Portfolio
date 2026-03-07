// src/components/TypewriterHeading.tsx
"use client";

import { useEffect, useRef, type HTMLAttributes } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface TypewriterHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  // The old props (speed, pauseInterval, pauseDuration) are no longer used for SVG animation
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  text,
  className,
  ...props
}) => {
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const currentTextRef = textRef.current;
    const currentSvgRef = svgRef.current;

    if (currentTextRef && currentSvgRef) {
      // Ensure styles are applied and text is measurable for getComputedTextLength
      // We use requestAnimationFrame to ensure calculations happen after render and style computation
      requestAnimationFrame(() => {
        const length = currentTextRef.getComputedTextLength();
        if (length === 0 && text.length > 0) {
          console.warn(`Computed text length is 0 for: "${text}". Animation might not work as expected.`);
        }

        const padding = 10; // Padding for stroke
        currentSvgRef.style.width = `${length + padding}px`; // Set SVG width with padding
        currentSvgRef.style.height = `1.4em`; // Slightly more heighten for stroke

        currentTextRef.setAttribute('x', (length / 2 + padding / 2).toString());
        currentTextRef.style.strokeDasharray = `${length}`;
        currentTextRef.style.strokeDashoffset = `${length}`;
        currentTextRef.style.fillOpacity = '0';

        // Clear any previous animations on this element before starting a new one
        anime.remove(currentTextRef);

        anime.timeline({
          loop: true,
          easing: 'easeInOutQuad',
          delay: 500, // Initial delay for the entire timeline before first loop
        })
          .add({
            targets: currentTextRef,
            strokeDashoffset: { value: 0, duration: 2000, easing: 'easeInOutQuad' },
            // Ensure fillOpacity is explicitly set to 0 before its animation starts
            // if it's not already done via style or a previous animation step.
            // fillOpacity: [ { value: 0, duration: 0 }, { value: 1, duration: 500, easing: 'linear' } ] , // This form might be better
          })
          .add({
            targets: currentTextRef,
            fillOpacity: { value: 1, duration: 500, easing: 'linear' },
            offset: '-=500', // Start fill animation 500ms before stroke animation ends
          })
          .add({ // Hold the filled state
            duration: 2000, // Increased hold duration
          })
          .add({ // Prepare for next loop: make fill transparent and stroke offset back to length
            targets: currentTextRef,
            fillOpacity: { value: 0, duration: 500, easing: 'linear' },
            strokeDashoffset: { value: length, duration: 500, easing: 'linear' }, // Quick reset for stroke
          });
      });
    }

    // Cleanup function to remove animation when component unmounts or text changes
    return () => {
      if (currentTextRef) {
        anime.remove(currentTextRef);
      }
    };
  }, [text]); // Rerun effect if text prop changes

  return (
    <h2 className={cn("flex justify-center", className)} {...props}>
      <svg
        ref={svgRef}
        className="overflow-visible" // Ensure entire stroke is visible
        aria-label={text}
      >
        <text
          ref={textRef}
          x="50%"
          y="50%"
          className="font-headline font-bold" // Should match h2 style from parent
          style={{
            fontSize: '1em', // Inherit font size from parent h2
            stroke: 'hsl(var(--primary))',
            strokeWidth: 1.2, // Slightly thinner for headings than the hero name
            fill: 'transparent', // Initial fill before animation
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            dominantBaseline: 'central', // Better centering
            textAnchor: 'middle', // If headings are centered, this helps SVG text alignment
          }}
        >
          {text}
        </text>
      </svg>
    </h2>
  );
};

export default TypewriterHeading;
