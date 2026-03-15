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
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="glass-card h-full border-white/10 group hover:border-primary/50 transition-all duration-500 overflow-hidden">
    <CardContent className="p-8 flex flex-col h-full relative">
      <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="h-12 w-12 text-primary rotate-180" />
      </div>
      
      <p className="text-muted-foreground mb-8 text-base md:text-lg italic leading-relaxed relative z-10">
        "{testimonial.text}"
      </p>
      
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0" />
        <div className="flex flex-col">
          <p className="font-bold text-base sm:text-lg text-primary">{testimonial.author}</p>
          <p className="text-[10px] sm:text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
            {testimonial.company}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-muted/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Client <span className="text-gradient">Voices</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed px-4">
            Stories of successful collaborations and high-quality digital solutions delivered to partners.
          </p>
        </motion.div>

        <div className="relative mt-8 px-2 sm:px-12">
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
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden sm:flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="static h-12 w-12 rounded-2xl glass-card border-white/10 hover:bg-primary hover:text-white transition-all translate-y-0" />
              <CarouselNext className="static h-12 w-12 rounded-2xl glass-card border-white/10 hover:bg-primary hover:text-white transition-all translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
