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
          {/* Gold-Bordered Profile Photo */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[300px] w-[300px] md:h-[320px] md:w-[320px] rounded-full border-2 border-[#B89748]/70 p-2 flex items-center justify-center bg-white dark:bg-slate-950 shadow-lg">
              <div className="absolute inset-0 rounded-full bg-[#B89748]/5 blur-xl -z-10 animate-pulse"></div>
              <div className="relative h-full w-full rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                <Image
                  src={heroData.portraitUrl}
                  alt="Portrait of Dilip Vishwakarma"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 320px"
                />
              </div>
            </div>
          </motion.div>

          {/* Heading and Bio */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tighter text-[#08244C] dark:text-white sm:text-5xl md:text-6xl font-headline leading-tight">
              Web Development <br />
              <span className="text-[#B89748] italic font-serif font-normal">Services</span>
            </h1>
            <p className="mt-4 text-lg text-slate-500 font-medium tracking-wide uppercase">
              By Dilip Vishwakarma
            </p>
            <p className="mx-auto mt-6 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed md:mx-0">
              As a passionate part-time web developer, I create modern, responsive, and user-friendly websites. I built this entire portfolio from the ground up to showcase my skills. Take a look around, and if you'd like a similar high-quality website for your personal brand or business, let's connect.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/#contact" passHref>
                <Button size="lg" className="bg-[#08244C] hover:bg-[#123058] text-white rounded-full px-6 py-2.5 transition-all duration-300 transform hover:scale-[1.02] shadow-md">
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
