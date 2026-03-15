"use client";

import { aboutData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, UserCircle, Code, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <UserCircle className="h-4 w-4" />
              <span>Who I Am</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Passionate about <span className="text-primary">Software Quality</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutData.bio}
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-none bg-muted/50 p-6 rounded-2xl shadow-none">
                <Star className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">Quality First</h4>
                <p className="text-sm text-muted-foreground">Ensuring every release meets the highest standards of excellence.</p>
              </Card>
              <Card className="border-none bg-muted/50 p-6 rounded-2xl shadow-none">
                <Code className="h-10 w-10 text-secondary mb-4" />
                <h4 className="font-bold text-xl mb-2">Modern Stack</h4>
                <p className="text-sm text-muted-foreground">Leveraging Selenium, Java, and TestNG for robust automation.</p>
              </Card>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                Professional Experience
              </h3>
              <div className="space-y-6 pl-4 border-l-2 border-primary/20 ml-4">
                {aboutData.career.map((job) => (
                  <div key={job.role} className="relative">
                    <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                    <p className="text-xs font-bold text-primary mb-1">{job.year}</p>
                    <h4 className="font-bold text-lg">{job.role}</h4>
                    <p className="text-sm text-muted-foreground">Accenture</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                </div>
                Academic Background
              </h3>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <p className="text-xs font-bold text-secondary mb-1">{aboutData.education.years}</p>
                <h4 className="font-bold text-lg">{aboutData.education.degree}</h4>
                <p className="text-sm text-muted-foreground">{aboutData.education.university}</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="h-4 w-4 text-accent" />
                </div>
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20 hover:bg-accent hover:text-white transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}