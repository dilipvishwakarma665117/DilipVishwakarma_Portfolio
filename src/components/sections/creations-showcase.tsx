"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, GraduationCap, School, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";

const sarthakInstituteProject = {
  title: "Sarthak Institute Nawabganj",
  subtitle: "Modern Educational Portal",
  url: "https://sarthakinstitutenawabganj.vercel.app/",
  description: "A premium, fully responsive CBSE-affiliated academic web application built to connect students, parents, and administration. Features include course registration pipelines, campus infrastructure mockups, leadership messages, and structured fees information.",
  tags: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Vercel"],
  details: [
    {
      icon: GraduationCap,
      label: "Course Registration Flow",
      text: "Interactive 4-step admission guide featuring online registration, document verification, leadership interaction, and online payments."
    },
    {
      icon: School,
      label: "Campus Tours & Infrastructure",
      text: "Detailed showcases for learning facilities, Sarthak hostel, organic mess menu details, and library services."
    },
    {
      icon: ShieldCheck,
      label: "Secure & Robust",
      text: "Optimized for mobile-first views with secured contact forms, SEO best practices, and high-performance Google Fonts integrations."
    },
    {
      icon: HeartHandshake,
      label: "Parent-Teacher Interactivity",
      text: "Interactive schedules and attendance discussion boards to bridge student performance tracking."
    }
  ]
};

export default function CreationsShowcase() {
  return (
    <section id="showcase" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-[#08244C] sm:text-4xl md:text-5xl font-headline">
            Featured <span className="text-[#B89748] italic font-serif font-normal">Creations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            A deep-dive showcase of production-ready applications built to solve real-world problems.
          </p>
        </motion.div>

        {/* Project Layout */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Mockup Showcase */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-900 group">
              <Image
                src="/sarthak_institute.png"
                alt="Sarthak Institute Nawabganj Mockup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B89748]">
                {sarthakInstituteProject.subtitle}
              </span>
              <h3 className="text-3xl font-bold font-headline text-[#08244C] tracking-tight">
                {sarthakInstituteProject.title}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {sarthakInstituteProject.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {sarthakInstituteProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#08244C]/5 border border-[#08244C]/10 px-3 py-1 text-xs font-semibold text-[#08244C]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features List */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-1">
              {sarthakInstituteProject.details.map((detail) => (
                <div key={detail.label} className="flex gap-3">
                  <div className="rounded-xl bg-[#B89748]/10 p-2.5 h-10 w-10 flex items-center justify-center shrink-0">
                    <detail.icon className="h-5 w-5 text-[#B89748]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#08244C]">
                      {detail.label}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-normal">
                      {detail.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={sarthakInstituteProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="bg-[#08244C] hover:bg-[#123058] text-white rounded-full px-6 py-2.5 transition-all duration-300 transform hover:scale-[1.02] shadow-md">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Website
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
