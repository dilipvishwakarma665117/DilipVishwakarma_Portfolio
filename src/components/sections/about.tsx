import { aboutData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, UserCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            A passionate quality advocate dedicated to delivering flawless software.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Bio Card */}
          <Card className="md:col-span-3">
            <CardHeader className="flex flex-row items-center gap-4">
               <UserCircle className="h-8 w-8 text-primary"/>
              <CardTitle className="text-2xl">Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{aboutData.bio}</p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card>
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

          {/* Career Journey Card */}
          <Card>
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

          {/* Skills Card */}
          <Card>
             <CardHeader>
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
        </div>
      </div>
    </section>
  );
}
