"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { testimonialsData, Testimonial } from '@/lib/testimonials-data';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ITEMS_PER_PAGE = 6;

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="glass-morphism h-full">
    <CardContent className="p-6">
      <MessageSquare className="h-8 w-8 text-primary mb-4" />
      <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
      <p className="font-semibold text-right">- {testimonial.author}</p>
      <p className="text-sm text-muted-foreground text-right">{testimonial.company}</p>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();
  const isMobile = useIsMobile();

  const loadMoreTestimonials = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newItems = testimonialsData.slice(0, page * ITEMS_PER_PAGE);
      setItems(newItems);
      setPage(prevPage => prevPage + 1);
      if (newItems.length >= testimonialsData.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, page]);
  
  useEffect(() => {
    loadMoreTestimonials();
  }, []);

  const lastTestimonialElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreTestimonials();
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, loadMoreTestimonials]);


  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? 0 : i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const getColumnCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Hear what my clients have to say about my work on their Personal Portfolios, E-commerce Stores, Business Websites, and Custom Web Apps.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial, index) => (
             <motion.div
                key={testimonial.id}
                custom={index % (page > 1 ? ITEMS_PER_PAGE : items.length) }
                variants={cardVariants}
                ref={items.length === index + 1 ? lastTestimonialElementRef : null}
              >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        {isLoading && (
          <div className="flex justify-center items-center mt-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {!hasMore && items.length > 0 && (
          <div className="text-center text-muted-foreground mt-8">
            <p>You've reached the end of the testimonials.</p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
