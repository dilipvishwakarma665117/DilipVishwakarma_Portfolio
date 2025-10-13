'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CreationsHero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[350px] w-[350px]">
               <div className="absolute inset-0.5 -m-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-xl"></div>
              <Image
                src={heroData.portraitUrl}
                alt="Portrait of Dilip Vishwakarma"
                width={350}
                height={350}
                priority
                data-ai-hint="professional portrait"
                className="relative z-10 aspect-square rounded-full object-cover shadow-2xl border-4 border-background"
              />
            </div>
          </motion.div>
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl font-headline">
              Web Development Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              By Dilip Vishwakarma
            </p>
            <p className="mx-auto mt-6 max-w-xl text-foreground/80 md:mx-0">
              As a passionate part-time web developer, I create modern, responsive, and user-friendly websites. I built this entire portfolio from the ground up to showcase my skills. Take a look around, and if you'd like a similar high-quality website for your personal brand or business, let's connect.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/#contact" passHref>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
