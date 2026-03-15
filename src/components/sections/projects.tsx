"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            A curated selection of my projects, showcasing my expertise in manual and automation testing.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 bg-card/50 glass-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-primary-foreground text-sm font-medium">Click to view project details</p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none rounded-lg px-3 py-1">
                      {project.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider rounded-md border-border/60 hover:border-primary hover:text-primary transition-colors">
                            {tag}
                          </Badge>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-white/5">
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" className="w-full">
                      <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-white rounded-xl">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                        <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled variant="outline" className="w-full rounded-xl opacity-50 border-white/10">
                      Internal Corporate Project
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