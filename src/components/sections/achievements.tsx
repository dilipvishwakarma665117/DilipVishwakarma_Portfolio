"use client";

import { achievementsData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Milestones & Recognition</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Celebrating key professional wins and the certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="mt-12 px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {achievementsData.map(({ title, description, icon: Icon }) => (
                <CarouselItem key={title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full rounded-2xl border-none glass-card hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="flex flex-col items-center justify-center gap-6 p-8 text-center">
                      <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-5 ring-1 ring-white/20">
                        <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-12 w-12 rounded-2xl border-none glass-card hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="h-12 w-12 rounded-2xl border-none glass-card hover:bg-primary hover:text-white transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}