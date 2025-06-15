// components/ArtSection.tsx
"use client";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: number;
  imageUrl: string;
  imageHint: string;
  description: string;
}

const artworksData: Artwork[] = [
  {
    id: '1',
    title: 'Cosmic Flow',
    medium: 'Digital Painting',
    year: 2023,
    imageUrl: 'https://placehold.co/500x700.png',
    imageHint: 'abstract cosmic',
    description: 'An exploration of nebulae and cosmic dust, rendered digitally to capture the vibrant chaos of space.',
  },
  {
    id: '2',
    title: 'Urban Dreams',
    medium: 'Acrylic on Canvas',
    year: 2022,
    imageUrl: 'https://placehold.co/600x600.png',
    imageHint: 'cityscape painting',
    description: 'A semi-abstract representation of a bustling cityscape at dusk, focusing on light and movement.',
  },
  {
    id: '3',
    title: 'Nature\'s Whisper',
    medium: 'Watercolor',
    year: 2023,
    imageUrl: 'https://placehold.co/700x500.png',
    imageHint: 'forest watercolor',
    description: 'Delicate watercolor strokes depicting the serene beauty of a misty forest morning.',
  },
];

const ArtSection = () => {
  return (
    <section id="art" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Art & Paintings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworksData.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/4] w-full"> {/* Common aspect ratio for art */}
                      <Image
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={artwork.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                        <h3 className="text-white font-headline text-xl">{artwork.title}</h3>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 bg-background">
                  <div className="relative aspect-video w-full">
                     <Image
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint={artwork.imageHint}
                      />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-2xl mb-2 text-primary">{artwork.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-1">{artwork.medium}, {artwork.year}</p>
                    <p className="font-body text-foreground">{artwork.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ArtSection;
