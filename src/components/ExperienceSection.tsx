// components/ExperienceSection.tsx
"use client";
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';
import { cvData } from '@/data/cvData';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <AnimatedSection className="flex flex-col items-center">
                    <TypewriterHeading
                        text="Work Experience"
                        className="text-3xl md:text-4xl font-headline font-bold text-center mb-12"
                    />
                    <div className="space-y-8 w-full max-w-4xl">
                        {cvData.experience.map((exp, index) => (
                            <AnimatedSection key={exp.id} delay={index * 100} initialY={20}>
                                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-out border-l-4 border-l-primary">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    <Briefcase className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <CardTitle className="font-headline text-2xl">{exp.position}</CardTitle>
                                                    <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                                <Calendar className="h-4 w-4" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground font-body">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ExperienceSection;
