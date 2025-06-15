// components/HeroSection.tsx
"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background"
    >
      {/* Background image and overlay removed */}
      
      <div className="relative z-20 container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center" initialY={20} staggerDelay={200}>
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm <span className="text-primary">Hardi Patel</span></span>
            <span className="block">Crafting Digital Experiences</span>
          </h1>
          <p className="text-lg md:text-xl font-body max-w-2xl mb-10 text-muted-foreground">
            Welcome to my personal portfolio. Explore my journey through code, design, and creativity.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="font-headline shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="#projects">View My Work</Link>
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
