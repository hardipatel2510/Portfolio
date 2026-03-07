// src/components/TypewriterHeading.tsx
"use client";

import { useEffect, useRef, type HTMLAttributes } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface TypewriterHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
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
      requestAnimationFrame(() => {
        const length = currentTextRef.getComputedTextLength();
        if (length === 0 && text.length > 0) {
          console.warn(`Computed text length is 0 for: "${text}". Animation might not work as expected.`);
        }

        const padding = 10;
        currentSvgRef.style.width = `${length + padding}px`;
        currentSvgRef.style.height = `1.4em`;

        currentTextRef.setAttribute('x', (length / 2 + padding / 2).toString());
        currentTextRef.style.strokeDasharray = `${length}`;
        currentTextRef.style.strokeDashoffset = `${length}`;
        currentTextRef.style.fillOpacity = '0';

        anime.remove(currentTextRef);

        anime.timeline({
          loop: true,
          easing: 'easeInOutQuad',
          delay: 500,
        })
          .add({
            targets: currentTextRef,
            strokeDashoffset: { value: 0, duration: 2000, easing: 'easeInOutQuad' },
          })
          .add({
            targets: currentTextRef,
            fillOpacity: { value: 1, duration: 500, easing: 'linear' },
            offset: '-=500',
          })
          .add({
            duration: 2000,
          })
          .add({
            targets: currentTextRef,
            fillOpacity: { value: 0, duration: 500, easing: 'linear' },
            strokeDashoffset: { value: length, duration: 500, easing: 'linear' },
          });
      });
    }

    return () => {
      if (currentTextRef) {
        anime.remove(currentTextRef);
      }
    };
  }, [text]);

  return (
    <h2 className={cn("flex justify-center", className)} {...props}>
      <svg
        ref={svgRef}
        className="overflow-visible"
        aria-label={text}
      >
        <text
          ref={textRef}
          x="50%"
          y="50%"
          className="font-headline font-bold"
          style={{
            fontSize: '1em',
            stroke: 'hsl(var(--primary))',
            strokeWidth: 1.2,
            fill: 'transparent',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            dominantBaseline: 'central',
            textAnchor: 'middle',
          }}
        >
          {text}
        </text>
      </svg>
    </h2>
  );
};

export default TypewriterHeading;
