"use client";

import { motion } from 'framer-motion';
import { testimonialsData, Testimonial } from '@/lib/testimonials-data';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // Get initials for avatar (e.g. Chirag Tiwari -> CT)
  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="glass-morphism w-[380px] md:w-[420px] shrink-0 border border-slate-100/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden bg-white/65 backdrop-blur-md rounded-2xl">
      {/* Background quote mark decoration */}
      <Quote className="absolute top-4 right-4 h-16 w-16 text-[#B89748]/10 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

      <CardContent className="p-6 flex flex-col justify-between h-full relative z-10 gap-6">
        {/* Top bar: Stars and Category */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-[#B89748]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#B89748] stroke-[#B89748]" />
            ))}
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#08244C]/50 bg-[#08244C]/5 px-2.5 py-1 rounded-full">
            {testimonial.category}
          </span>
        </div>

        {/* Feedback text */}
        <p className="text-slate-600 italic leading-relaxed text-sm md:text-[15px] flex-1">
          "{testimonial.text}"
        </p>

        {/* Bottom bar: User Info with initials avatar */}
        <div className="flex items-center gap-3.5 border-t border-slate-100 pt-4 mt-auto">
          {/* Initials Avatar */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#08244C] to-[#123058] flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0">
            {initials}
          </div>
          {/* Author Name and Info */}
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-[14px] text-[#08244C]">
              {testimonial.author}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Client & Partner
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <motion.section
      id="testimonials"
      className="bg-transparent py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-[#08244C] sm:text-4xl md:text-5xl font-headline">
            What Others <span className="text-[#B89748] italic font-serif font-normal">Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Feedback from colleagues and partners.
          </p>
        </motion.div>

        <div className="relative mt-12 w-full overflow-hidden py-4">
          {/* Gradient Masks for fade out marquee effect */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
