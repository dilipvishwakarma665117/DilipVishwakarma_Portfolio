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
    <section id="achievements" className="section-padding bg-muted/20 overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Milestones & Recognition</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg px-4">
            Celebrating key professional wins and the certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="relative mt-8 sm:mt-12 px-2 sm:px-12">
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
            <CarouselContent className="-ml-2 sm:-ml-4">
              {achievementsData.map(({ title, description, icon: Icon }) => (
                <CarouselItem key={title} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full rounded-[1.5rem] sm:rounded-2xl border-none glass-card hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="flex flex-col items-center justify-center gap-4 sm:gap-6 p-6 sm:p-8 text-center">
                      <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 sm:p-5 ring-1 ring-white/20">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border-none glass-card hover:bg-primary hover:text-white transition-all -left-6 sm:-left-12" />
              <CarouselNext className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border-none glass-card hover:bg-primary hover:text-white transition-all -right-6 sm:-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
