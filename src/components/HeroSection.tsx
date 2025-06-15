// components/HeroSection.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const svgElement = svgRef.current;

    if (textElement && svgElement) {
      // Ensure styles are applied and text is measurable
      requestAnimationFrame(() => {
        const length = textElement.getComputedTextLength();
        svgElement.style.width = `${length}px`; // Set SVG width dynamically

        textElement.style.strokeDasharray = `${length}`;
        textElement.style.strokeDashoffset = `${length}`;
        textElement.style.fillOpacity = '0';

        anime.timeline({
          loop: true,
          easing: 'easeInOutQuad', 
          delay: 500, // Initial delay for the entire timeline before first loop
        })
        .add({
          targets: textElement,
          strokeDashoffset: { value: 0, duration: 2000, easing: 'easeInOutQuad' },
        })
        .add({
          targets: textElement,
          fillOpacity: { value: 1, duration: 500, easing: 'linear' },
          offset: '-=500', // Start fill animation 500ms before stroke animation ends
        })
        .add({ // Hold the filled state
          duration: 1500,
        })
        .add({ // Prepare for next loop: make fill transparent and stroke offset back to length
          targets: textElement,
          fillOpacity: { value: 0, duration: 500, easing: 'linear' },
          strokeDashoffset: { value: length, duration: 500, easing: 'linear' }, // Quick reset for stroke
        });
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background"
    >
      <div className="relative z-20 container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center" initialY={20} staggerDelay={200}>
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm{' '}
              <svg 
                ref={svgRef} 
                style={{ 
                  height: "1em", // Match line height
                  display: "inline-block", 
                  verticalAlign: "bottom", // Align with text baseline
                  overflow: "visible" 
                }}
                aria-label="Hardi Patel"
              >
                <text 
                  ref={textRef} 
                  x="0" 
                  y="0.85em" // Adjust for typical font baseline; may need fine-tuning per font
                  className="font-headline font-bold" // Ensured it matches h1 style
                  style={{ 
                    fontSize: "1em", // Inherit font size from h1 parent
                    stroke: "hsl(var(--primary))", 
                    strokeWidth: 1.5, // Adjusted for better visibility
                    fill: "transparent", // Initial fill before animation
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  Hardi Patel
                </text>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl font-body max-w-2xl mb-10 text-muted-foreground">
            Welcome to my personal portfolio. Explore my journey through code, design, and creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="https://1drv.ms/w/c/ae6ee91ec4884036/EWlGJKBoyEJAvVHekkxRPKIBlOnjZfL2ccIhuzpxpFGfYw?e=8Oc9FB" download="Hardi_Patel_CV.docx" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
