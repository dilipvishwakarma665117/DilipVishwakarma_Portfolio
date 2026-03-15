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
    <section id="projects" className="section-padding relative bg-background">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Showcase</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A curated selection of my projects, showcasing my expertise in manual and automation testing.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-card/30 glass-card hover:border-primary/50 transition-all duration-500 shadow-xl glowing-border">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity"></div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {project.role}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-14 w-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <ArrowUpRight className="h-7 w-7" />
                    </div>
                  </div>
                </div>

                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                      {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-[10px] font-bold uppercase tracking-[0.15em] rounded-xl border-border/60 bg-muted/30 px-3 py-1 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-all">
                            {tag}
                          </Badge>
                      ))}
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-4 border-t border-white/5">
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" className="w-full">
                      <Button variant="ghost" className="w-full h-12 group/btn hover:bg-primary hover:text-white rounded-2xl text-sm font-bold transition-all shadow-sm">
                        <Github className="mr-3 h-5 w-5" />
                        Explore Repository
                        <ExternalLink className="ml-auto h-4 w-4 opacity-50 group-hover/btn:opacity-100 transition-all" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled variant="outline" className="w-full h-12 rounded-2xl opacity-40 border-white/10 text-xs font-bold uppercase tracking-widest">
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