'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { ArrowDownToLine, Send, Sparkles } from "lucide-react";
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
import TypingAnimation from "@/components/typing-animation";
import { motion } from "framer-motion";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = heroData.resumeUrl;
    link.download = 'Dilip_Vishwakarma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-transparent pt-32 pb-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline mb-4">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{heroData.name.split(' ')[0]}</span>
            </h1>
            
            <div className="mb-6 h-12 md:h-10 flex justify-center md:justify-start">
              <TypingAnimation />
            </div>
            
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground md:mx-0 leading-relaxed">
              {heroData.tagline}
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="lg" className="btn-gradient px-8 h-14 rounded-2xl shadow-lg shadow-primary/20 group">
                    <ArrowDownToLine className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="glass-card">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Ready to download?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You are about to download the latest version of Dilip's professional resume.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDownload} className="btn-gradient rounded-xl">Download</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-2 hover:bg-muted transition-all">
                  <Send className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative z-10 p-2 rounded-3xl border-2 border-white/10 glass-card">
                <Image
                  src={heroData.portraitUrl}
                  alt="Dilip Vishwakarma"
                  width={400}
                  height={400}
                  priority
                  className="rounded-2xl object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Currently at</p>
                    <p className="text-sm font-bold">Accenture</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}