'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { ArrowDownToLine, Send, Briefcase, ShieldCheck, Terminal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = heroData.resumeUrl;
    link.download = 'Dilip_Resume_3.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Header Section */}
        <div className="text-center md:text-left mb-12 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-headline font-bold uppercase tracking-widest text-[#B89748] block mb-3"
          >
            Quality Engineer Analyst
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tighter text-[#08244C] sm:text-5xl md:text-6xl font-headline leading-[1.1] mb-4"
          >
            Quality Engineering <br className="hidden sm:inline" />
            <span className="text-[#B89748] italic font-serif font-normal">and Automation Testing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Delivering robust testing methodologies, automated quality checks, and top-tier software delivery practices to ensure flawless application performance.
          </motion.p>
        </div>

        {/* Profile Card Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start"
        >
          {/* Profile Image Column */}
          <div className="flex-shrink-0">
            <div className="relative h-[260px] w-[260px] md:h-[280px] md:w-[280px] rounded-full border-2 border-[#B89748]/70 p-2 flex items-center justify-center bg-white dark:bg-slate-950 shadow-lg">
              <div className="absolute inset-0 rounded-full bg-[#B89748]/5 blur-xl -z-10 animate-pulse"></div>
              <div className="relative h-full w-full rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
                <Image
                  src={heroData.portraitUrl}
                  alt="Portrait of Dilip Vishwakarma"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 280px"
                />
              </div>
            </div>
          </div>

          {/* Profile Details Column */}
          <div className="flex-grow flex flex-col gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-extrabold text-[#08244C] dark:text-white font-headline tracking-tight">
                Dilip Vishwakarma
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                QA Engineer Analyst at Accenture with 2+ years of experience in Manual and Automation Testing. Skilled in ServiceNow, Selenium with Java, and Automation Frameworks to strengthen software delivery standards.
              </p>
            </div>

            {/* Three Roles/Details Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-3 mt-2">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B89748]/10 text-[#B89748]">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Current Role</span>
                  <span className="text-sm font-bold text-[#08244C] dark:text-white block mt-0.5">QA Engineer</span>
                  <span className="text-xs text-slate-500 block">Accenture</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B89748]/10 text-[#B89748]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Focus</span>
                  <span className="text-sm font-bold text-[#08244C] dark:text-white block mt-0.5">Quality Assurance</span>
                  <span className="text-xs text-slate-500 block">Testing & Automation</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B89748]/10 text-[#B89748]">
                  <Terminal className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Specialization</span>
                  <span className="text-sm font-bold text-[#08244C] dark:text-white block mt-0.5">Selenium & Java</span>
                  <span className="text-xs text-slate-500 block">Framework Design</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="lg" className="bg-[#08244C] hover:bg-[#123058] text-white rounded-full px-6 py-2.5 transition-all duration-300 transform hover:scale-[1.02] shadow-md">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Download</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will download Dilip Vishwakarma's resume. Do you want to continue?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDownload} className="bg-[#08244C] hover:bg-[#123058] text-white">Download</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className="rounded-full px-6 py-2.5 border-slate-200 text-slate-700 hover:text-[#08244C] hover:bg-slate-50 transition-all duration-300 transform hover:scale-[1.02]">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
