"use client";

import { motion } from 'framer-motion';

export default function QaHero() {
  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl font-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Top 100 Q&A for Testers
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated list of frequently asked interview questions and answers for Software Testers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
