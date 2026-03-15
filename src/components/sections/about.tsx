"use client";

import { aboutData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, UserCircle, Code, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden relative bg-muted/30">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-20 lg:grid-cols-2 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold mb-8">
              <UserCircle className="h-4 w-4" />
              <span>Who I Am</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-8 leading-tight">
              Passionate about <br />
              <span className="text-gradient">Software Quality</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {aboutData.bio}
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div whileHover={{ y: -5 }}>
                <Card className="border border-white/10 bg-card/40 glass-card p-6 rounded-3xl group hover:border-primary/50 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Star className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Quality First</h4>
                  <p className="text-sm text-muted-foreground">Ensuring every release meets the highest standards of excellence.</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="border border-white/10 bg-card/40 glass-card p-6 rounded-3xl group hover:border-secondary/50 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <Code className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Modern Stack</h4>
                  <p className="text-sm text-muted-foreground">Leveraging Selenium, Java, and TestNG for robust automation.</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                Professional Journey
              </h3>
              <div className="space-y-10 pl-5 border-l-2 border-primary/20 ml-6">
                {aboutData.career.map((job, idx) => (
                  <motion.div 
                    key={job.role} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[31px] top-1.5 h-6 w-6 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform shadow-sm"></div>
                    <p className="text-xs font-black text-primary mb-2 uppercase tracking-[0.2em]">{job.year}</p>
                    <h4 className="font-bold text-2xl group-hover:text-primary transition-colors">{job.role}</h4>
                    <p className="text-base text-muted-foreground font-semibold flex items-center gap-2 mt-1">
                      <Sparkles className="h-4 w-4 text-accent" />
                      Accenture India
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-black flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-sm">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                Academic Background
              </h3>
              <Card className="p-8 rounded-3xl bg-card/40 glass-card border border-white/10 hover:border-secondary/40 transition-all group">
                <p className="text-xs font-black text-secondary mb-2 uppercase tracking-[0.2em]">{aboutData.education.years}</p>
                <h4 className="font-bold text-2xl mb-1 group-hover:text-secondary transition-colors">{aboutData.education.degree}</h4>
                <p className="text-base text-muted-foreground font-medium">{aboutData.education.university}</p>
              </Card>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-black flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="px-5 py-2.5 rounded-2xl bg-accent/5 text-accent border border-accent/10 hover:bg-accent hover:text-white transition-all cursor-default text-sm font-bold shadow-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}