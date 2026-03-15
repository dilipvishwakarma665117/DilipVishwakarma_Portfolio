
"use client";

import { motion } from 'framer-motion';
import { testimonialsData, Testimonial } from '@/lib/testimonials-data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="glass-card h-full border-white/10 group hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
    <CardContent className="p-8 flex flex-col h-full relative z-10">
      <div className="mb-6">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 shadow-lg shadow-primary/5">
          <Quote className="h-6 w-6 text-primary" />
        </div>
      </div>
      
      <p className="text-muted-foreground mb-8 text-lg font-medium italic leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-0.5 shadow-xl">
          <div className="h-full w-full rounded-full bg-background flex items-center justify-center font-bold text-primary text-xs">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{testimonial.author}</p>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-accent animate-pulse" />
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-muted/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <Quote className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Trusted by <span className="text-gradient">Clients</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed px-4">
            Hear from the partners I've collaborated with to build high-quality digital solutions.
          </p>
        </motion.div>

        <div className="relative mt-8">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="p-2 h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-6 mt-12">
              <CarouselPrevious className="static h-14 w-14 rounded-2xl glass-card border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all translate-y-0 shadow-lg" />
              <CarouselNext className="static h-14 w-14 rounded-2xl glass-card border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all translate-y-0 shadow-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
