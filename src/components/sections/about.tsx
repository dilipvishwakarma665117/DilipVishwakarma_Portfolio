"use client";

import { aboutData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, UserCircle, Code } from "lucide-react";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <motion.section 
      id="about" 
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            A passionate quality advocate dedicated to delivering flawless software.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8">
          {/* Bio Card */}
          <motion.div variants={cardVariants}>
            <Card className="glass-morphism h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <UserCircle className="h-8 w-8 text-primary"/>
                <CardTitle className="text-2xl">Who I Am</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{aboutData.bio}</p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Education Card */}
            <motion.div variants={cardVariants}>
              <Card className="glass-morphism h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-primary"/>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="font-semibold">{aboutData.education.degree}</h3>
                  <p className="text-sm text-muted-foreground">{aboutData.education.university}</p>
                  <p className="text-sm text-muted-foreground">{aboutData.education.years}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Career Journey Card */}
            <motion.div variants={cardVariants}>
              <Card className="glass-morphism h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Briefcase className="h-8 w-8 text-primary"/>
                  <CardTitle>Career Journey</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {aboutData.career.map((job, index) => (
                            <li key={job.role} className="flex items-center gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{aboutData.career.length - index}</div>
                                <div>
                                    <h3 className="font-semibold">{job.role}</h3>
                                    <p className="text-sm text-muted-foreground">{job.year}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Card */}
            <motion.div variants={cardVariants}>
              <Card className="glass-morphism h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Code className="h-8 w-8 text-primary"/>
                  <CardTitle>Core Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
