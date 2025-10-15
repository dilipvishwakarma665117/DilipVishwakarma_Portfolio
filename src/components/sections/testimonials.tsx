"use client";

import { motion } from 'framer-motion';
import { testimonialsData, Testimonial } from '@/lib/testimonials-data';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="glass-morphism w-[350px] md:w-[450px] shrink-0">
    <CardContent className="p-6 flex flex-col justify-center h-full">
      <p className="text-muted-foreground mb-4 text-sm md:text-base">"{testimonial.text}"</p>
      <div>
        <p className="font-semibold text-right">- {testimonial.author}</p>
        <p className="text-sm text-muted-foreground text-right">{testimonial.company}</p>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <motion.section
      id="testimonials"
      className="bg-transparent"
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What others say</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Feedback from colleagues.
          </p>
        </motion.div>

        <div className="relative mt-12 w-full overflow-hidden">
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
