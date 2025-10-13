"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { User, ShoppingCart, Briefcase, Code } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const services = [
  {
    icon: User,
    title: "Personal Portfolios",
    description: "Showcase your skills and projects with a stunning personal website that stands out.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d1469c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb2RlfGVufDB8fHx8MTc1OTMwMDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "personal website"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Launch your online store with a custom-built, user-friendly e-commerce platform.",
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    imageHint: "online store"
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Establish a professional online presence for your business to attract and inform customers.",
    imageUrl: "https://picsum.photos/seed/business/600/400",
    imageHint: "corporate website"
  },
  {
    icon: Code,
    title: "Custom Web Apps",
    description: "Need something unique? I can build custom web applications tailored to your specific needs.",
    imageUrl: "https://picsum.photos/seed/customapp/600/400",
    imageHint: "web application"
  },
];

export default function CreationsServices() {
  return (
    <motion.section 
      id="services" 
      className="bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Can Build For You</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            From personal pages to full-featured business sites, I can bring your vision to life.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {services.map(({ title, description, icon: Icon, imageUrl, imageHint }) => (
              <CarouselItem key={title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full glass-morphism overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full">
                       <Image src={imageUrl} alt={title} fill objectFit="cover" data-ai-hint={imageHint} />
                    </div>
                    <CardContent className="flex flex-col flex-1 items-center justify-center gap-4 p-6 text-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                      </div>
                      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                      <p className="text-sm text-muted-foreground flex-1">
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
    </motion.section>
  );
}
