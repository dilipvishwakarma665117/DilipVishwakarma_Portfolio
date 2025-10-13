"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ShoppingCart, Briefcase, User, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: User,
    title: "Personal Portfolios",
    description: "Showcase your skills and projects with a stunning personal website that stands out.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Launch your online store with a custom-built, user-friendly e-commerce platform.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Establish a professional online presence for your business to attract and inform customers.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Freelance() {
  return (
    <motion.section
      id="freelance"
      className="bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Build Your Website</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            As a part-time web developer, I build modern, responsive websites to bring your vision to life.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass-morphism h-full text-center">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <service.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#contact" passHref>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white transition-all duration-300 hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
