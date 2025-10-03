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

export default function Achievements() {
  return (
    <motion.section 
      id="achievements" 
      className="bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements & Milestones</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Proud moments and key accomplishments in my professional journey.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {achievementsData.map(({ title, description, icon: Icon }) => (
                <CarouselItem key={title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full glass-morphism">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                        <div className="rounded-full bg-primary/10 p-4">
                          <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}
