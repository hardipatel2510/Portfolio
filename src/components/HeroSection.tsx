// components/HeroSection.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { ArrowDown, Download } from 'lucide-react';
import { cvData } from '@/data/cvData';

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
        const padding = 8; // Extra space for stroke width
        svgElement.style.width = `${length + padding}px`; // Set SVG width with padding
        textElement.setAttribute('x', (padding / 2).toString()); // Center text within padded SVG

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
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 leading-tight">
            <span className="block">Hi, I'm{' '}
              <svg
                ref={svgRef}
                style={{
                  height: "1.1em", // Slightly taller for stroke
                  display: "inline-block",
                  verticalAlign: "baseline",
                  overflow: "visible"
                }}
                aria-label={cvData.personalInfo.name}
              >
                <text
                  ref={textRef}
                  x="4" // Initial offset for padding
                  y="0.8em"
                  className="font-headline font-bold"
                  style={{
                    fontSize: "1em",
                    stroke: "hsl(var(--primary))",
                    strokeWidth: 2, // Slightly thicker
                    fill: "transparent",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  {cvData.personalInfo.name}
                </text>
              </svg>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6">
            {cvData.personalInfo.title}
          </h2>
          <div className="text-lg md:text-xl font-body max-w-2xl mb-10 text-muted-foreground space-y-4 text-center">
            {cvData.personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href={cvData.personalInfo.resumeLink} download="Hardi_Patel_CV.docx" target="_blank" rel="noopener noreferrer">
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
