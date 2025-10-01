'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { ArrowDownToLine, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Particle = ({ style }: { style: React.CSSProperties }) => {
  return <div className="particle" style={style}></div>;
};

const Particles = ({ count = 20 }: { count?: number }) => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles: React.CSSProperties[] = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 2; // size between 2px and 7px
      newParticles.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `move-particles ${Math.random() * 40 + 20}s linear infinite`,
        animationDelay: `-${Math.random() * 40}s`,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((style, index) => (
        <Particle key={index} style={style} />
      ))}
    </div>
  );
};


export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-background py-20 md:min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {heroData.name}
            </h1>
            <h2 className="mt-2 text-lg font-medium text-foreground/80 sm:text-xl md:text-2xl">
              {heroData.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground md:mx-0">
              {heroData.tagline}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link href={heroData.resumeUrl} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg">
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
              <Image
                src={heroData.portraitUrl}
                alt="Portrait of Dilip Vishwakarma"
                width={512}
                height={512}
                priority
                data-ai-hint="professional portrait"
                className="relative z-10 aspect-square rounded-full object-cover shadow-lg border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
