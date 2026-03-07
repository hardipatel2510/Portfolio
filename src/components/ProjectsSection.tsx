// components/ProjectsSection.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { cvData } from '@/data/cvData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <TypewriterHeading
            text="Featured Projects"
            className="text-3xl md:text-4xl font-headline font-bold text-center mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {cvData.projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-none transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    {project.isCompleted ? (
                      <span className="text-xs text-green-500 font-code">(Completed)</span>
                    ) : (
                      <span className="text-xs text-primary font-code animate-blink-text">(Working)</span>
                    )}
                  </div>
                  <CardDescription className="font-body text-muted-foreground pt-1 min-h-[6rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs font-code rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  {(project as any).githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={(project as any).githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {(project as any).liveLink && (
                    <Button variant="default" size="sm" asChild>
                      <Link href={(project as any).liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;