// components/SkillsSection.tsx
"use client";
import { Progress } from '@/components/ui/progress';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, PencilRuler } from 'lucide-react'; // Removed TerminalSquare, Server, Settings2

interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'HTML', proficiency: 40 },
      { name: 'Java', proficiency: 60 },
      { name: 'CSS', proficiency: 30 },
      { name: 'DSA', proficiency: 40 },
    ],
  },
  {
    name: 'Databases',
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'SQL', proficiency: 70 },
    ],
  },
  {
    name: 'Design Tools',
    icon: <PencilRuler className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Canva', proficiency: 75 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Skills & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl justify-center">
            {skillsData.map((category) => (
              <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                  {category.icon}
                  <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-body font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs font-code text-primary">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-2 [&>div]:bg-primary" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
