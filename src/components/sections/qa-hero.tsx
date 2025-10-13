"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';
import { BookText } from 'lucide-react';

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
            Top 100 Question and Answers for Testers designed by me
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated list of frequently asked interview questions and answers for Software Testers.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/qa/detailed">
              <Button>
                <BookText className="mr-2 h-4 w-4" />
                View Detailed Answers
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
