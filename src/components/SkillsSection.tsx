// components/SkillsSection.tsx
"use client";
import { Progress } from '@/components/ui/progress';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, PencilRuler, Brain, Heart, Terminal, Cpu, HardDrive } from 'lucide-react';
import { cvData } from '@/data/cvData';

const iconMap: Record<string, any> = {
  'Programming': Code2,
  'Web Development': Code2,
  'Database': Database,
  'Tools': PencilRuler,
};

const WorkflowItem = ({ icon: Icon, label, description }: { icon: any; label: string; description: string }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="text-sm font-headline font-bold">{label}</p>
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{description}</p>
    </div>
  </div>
);

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

            {/* Soft Skills Section */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105 bg-card">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-xl">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cvData.softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* New Dev Workflow Component */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105 bg-card border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Terminal className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-xl">Dev Workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-3">
                  <WorkflowItem icon={Code2} label="VS Code & IntelliJ" description="Primary IDEs" />
                  <WorkflowItem icon={Cpu} label="Git & GitHub" description="Version Control" />
                  <WorkflowItem icon={HardDrive} label="Mac & Linux" description="Environments" />
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-headline font-bold text-sm">Passions</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {cvData.interests.map((interest) => (
                      <div key={interest} className="px-8 py-5 bg-white text-slate-900 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] hover:scale-105 transition-all duration-300">
                        <span className="text-base font-headline font-bold tracking-tight">
                          {interest}
                        </span>
                      </div>
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