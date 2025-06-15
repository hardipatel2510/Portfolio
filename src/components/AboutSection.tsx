// components/AboutSection.tsx
"use client";
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center">
              <Image
                src="https://placehold.co/300x300.png"
                alt="Profile Picture"
                width={250}
                height={250}
                className="rounded-full shadow-xl border-4 border-primary"
                data-ai-hint="professional portrait"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Hello! I'm a passionate and creative individual with a strong background in software development and a keen eye for design. My journey in the tech world has been driven by a constant curiosity and a desire to build meaningful and impactful digital solutions.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and enjoy tackling complex challenges. Whether it's crafting elegant code, designing intuitive user interfaces, or exploring new artistic avenues, I approach every task with dedication and enthusiasm.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <InfoCard
                  icon={<Briefcase className="h-8 w-8 text-primary" />}
                  title="Experience"
                  description="Years of hands-on experience in full-stack development, working on diverse projects from concept to deployment."
                />
                <InfoCard
                  icon={<GraduationCap className="h-8 w-8 text-primary" />}
                  title="Education"
                  description="Solid academic foundation in Computer Science, coupled with continuous learning and skill enhancement."
                />
                <InfoCard
                  icon={<Heart className="h-8 w-8 text-primary" />}
                  title="Passion"
                  description="Driven by a love for innovation, problem-solving, and creating aesthetically pleasing and functional products."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <Card className="bg-background shadow-md hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      {icon}
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm font-body text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
