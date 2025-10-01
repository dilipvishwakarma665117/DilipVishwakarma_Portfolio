"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            A glimpse into my work and personal explorations in software quality.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          transition={{ staggerChildren: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 glass-morphism h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}