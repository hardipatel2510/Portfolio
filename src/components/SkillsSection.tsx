// components/SkillsSection.tsx
"use client";
import { Progress } from '@/components/ui/progress';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, PencilRuler, Brain, Heart, Languages } from 'lucide-react';
import { cvData } from '@/data/cvData';

const iconMap: Record<string, any> = {
  'Programming': Code2,
  'Web Development': Code2,
  'Database': Database,
  'Tools': PencilRuler,
  'Soft SkillsSection': Brain, // Helper key
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <TypewriterHeading
            text="Skills & Tools"
            className="text-3xl md:text-4xl font-headline font-bold text-center mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-center">
            {/* Technical Skills */}
            {cvData.technicalSkills.map((category) => {
              const IconComponent = iconMap[category.category] || Code2;
              return (
                <Card key={category.category} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105 bg-card">
                  <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skillName) => (
                      <div key={skillName}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-body font-medium text-foreground">{skillName}</span>
                          <span className="text-xs font-code text-primary">90%</span>
                        </div>
                        <Progress value={90} aria-label={`${skillName} proficiency 90%`} className="h-1.5 [&>div]:bg-primary" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}

            {/* Soft Skills */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105 bg-card">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-xl">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cvData.softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm font-body text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Languages & Interests */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105 bg-card">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Languages className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 mb-6">
                  {cvData.languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-xs text-primary font-code">{lang.level}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="font-headline font-bold">Interests</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.interests.map((interest) => (
                      <span key={interest} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;