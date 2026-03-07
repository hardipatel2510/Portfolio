// components/SkillsSection.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, PencilRuler, LucideIcon } from 'lucide-react';
import { cvData } from '@/data/cvData';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Code2: Code2,
  Database: Database,
  PencilRuler: PencilRuler,
};

const categoryColors: Record<string, string> = {
  'Frontend Development': 'shadow-blue-500/20 border-blue-500/20 text-blue-400',
  'Backend & Algorithms': 'shadow-purple-500/20 border-purple-500/20 text-purple-400',
  'Design & UI/UX': 'shadow-indigo-500/20 border-indigo-500/20 text-indigo-400',
};

const SkillCard = ({ name, proficiency, categoryName, index }: { name: string, proficiency: number, categoryName: string, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const colorClass = categoryColors[categoryName] || 'shadow-primary/20 border-primary/20 text-primary';

  useEffect(() => {
    if (!cardRef.current) return;

    // Floating animation
    anime({
      targets: cardRef.current,
      translateY: [0, anime.random(-15, -5), 0],
      translateX: [0, anime.random(-10, 10), 0],
      rotate: [0, anime.random(-2, 2), 0],
      duration: anime.random(3000, 6000),
      delay: anime.random(0, 2000),
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative p-4 rounded-2xl bg-white/5 backdrop-blur-md border transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:-translate-y-2 cursor-default",
        colorClass
      )}
      style={{
        boxShadow: `0 0 ${proficiency / 5}px rgba(var(--primary-rgb), ${proficiency / 400})`
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm md:text-base font-headline font-bold whitespace-nowrap">{name}</span>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-current opacity-60 transition-all duration-1000 group-hover:opacity-100"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 rounded-2xl bg-current opacity-0 blur-xl group-hover:opacity-10 transition-opacity duration-500" />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="flex flex-col items-center">
          <TypewriterHeading
            text="Skills & Expertises"
            className="text-4xl md:text-5xl font-headline font-bold text-center mb-16"
          />

          <div className="space-y-20 w-full max-w-6xl">
            {cvData.technicalSkills.map((category) => {
              const IconComponent = iconMap[category.category] || Code2;

              return (
                <div key={category.category} className="flex flex-col items-center">
                  <div className="flex items-center gap-4 mb-10 group">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {category.skills.map((skillName, idx) => (
                      <SkillCard
                        key={skillName}
                        name={skillName}
                        proficiency={90} // Default proficiency as it's just names now
                        categoryName={category.category}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;