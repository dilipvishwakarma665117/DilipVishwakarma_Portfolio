"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 pointer-events-none opacity-50"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed px-4">
            A curated selection of my projects, showcasing my expertise in manual and automation testing.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-card/30 glass-card hover:border-primary/50 transition-all duration-500 shadow-xl glowing-border">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity"></div>
                  
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {project.role}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4">
                  <CardTitle className="text-xl sm:text-2xl font-black leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] rounded-lg sm:rounded-xl border-border/60 bg-muted/30 px-2 py-0.5 sm:px-3 sm:py-1 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-all whitespace-nowrap">
                            {tag}
                          </Badge>
                      ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 sm:p-8 pt-4 border-t border-white/5 mt-auto">
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" className="w-full">
                      <Button variant="ghost" className="w-full h-10 sm:h-12 group/btn hover:bg-primary hover:text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm">
                        <Github className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        Explore Repository
                        <ExternalLink className="ml-auto h-3 w-3 sm:h-4 sm:w-4 opacity-50 group-hover/btn:opacity-100 transition-all" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled variant="outline" className="w-full h-10 sm:h-12 rounded-xl sm:rounded-2xl opacity-40 border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                      Enterprise Project
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
