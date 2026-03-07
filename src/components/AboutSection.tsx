import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cvData } from '@/data/cvData';
import { Briefcase, GraduationCap, Heart, Users, Zap, ArrowUp } from 'lucide-react';
import profilePic from '@/lib/Photo.png';

const iconMap = {
  Zap: Zap,
  Users: Users,
  ArrowUp: ArrowUp,
};

const AboutSection = () => {
  const { personalInfo, education, coreValues } = cvData;

  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <TypewriterHeading
            text="About Me"
            className="text-3xl md:text-4xl font-headline font-bold text-center mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={250}
                height={250}
                className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-lg shadow-xl border-4 border-primary"
                data-ai-hint="professional portrait"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-lg font-body text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Education Section */}
              <div className="pt-6">
                <h3 className="text-2xl font-headline font-semibold mb-4 text-foreground">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <InfoCard
                    key={index}
                    icon={<GraduationCap className="h-8 w-8 text-primary" />}
                    title={edu.degree}
                    description={`${edu.institution} (${edu.duration})`}
                  />
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {coreValues.map((value, index) => {
                  const IconComponent = iconMap[value.iconName as keyof typeof iconMap] || Zap;
                  return (
                    <InfoCard
                      key={index}
                      icon={<IconComponent className="h-8 w-8 text-primary" />}
                      title={value.title}
                      description={value.description}
                    />
                  );
                })}
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
  <Card className="bg-card shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-none transform hover:scale-105">
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
