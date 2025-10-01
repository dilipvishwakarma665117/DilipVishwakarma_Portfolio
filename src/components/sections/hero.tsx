'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { ArrowDownToLine, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-transparent py-20 md:min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div 
            className="order-2 text-center md:order-1 md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              {heroData.name}
            </h1>
            <h2 className="mt-2 text-lg font-medium text-foreground/80 sm:text-xl md:text-2xl font-headline">
              {heroData.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground md:mx-0">
              {heroData.tagline}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link href={heroData.resumeUrl} target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105">
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className="btn-gradient-border transition-all duration-300 hover:scale-105">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 flex justify-center md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[312px] w-[312px]">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
              <Image
                src={heroData.portraitUrl}
                alt="Portrait of Dilip Vishwakarma"
                width={312}
                height={312}
                priority
                data-ai-hint="professional portrait"
                className="relative z-10 aspect-square rounded-full object-cover shadow-lg border-4 border-background"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
