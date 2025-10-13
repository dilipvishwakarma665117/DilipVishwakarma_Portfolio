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
    imageUrl: "https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    imageHint: "portfolio website"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Launch your online store with a custom-built, user-friendly e-commerce platform.",
    imageUrl: "https://media.istockphoto.com/id/1972284692/photo/digital-cart-icon-on-future-tech-background-online-shopping-evolution-futuristic-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=K7G451e5Hrxv-Akc7jFFvO7qdDLbt_zwxoS2Fh1AR9o=",
    imageHint: "online store"
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Establish a professional online presence for your business to attract and inform customers.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    imageHint: "corporate website"
  },
  {
    icon: Code,
    title: "Custom Web Apps",
    description: "Need something unique? I can build custom web applications tailored to your specific needs.",
    imageUrl: "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
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
                       <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} data-ai-hint={imageHint} />
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
