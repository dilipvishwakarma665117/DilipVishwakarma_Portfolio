'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";
import { ArrowDownToLine, Send, Sparkles, MousePointer2 } from "lucide-react";
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
    link.href = '/Dilip_Resume_3.pdf';
    link.download = 'Dilip_Resume_3.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-transparent pt-32 pb-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8"
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Available for new opportunities</span>
            </motion.div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline mb-6">
              I'm <span className="text-gradient">Dilip</span>
            </h1>
            
            <div className="mb-8 h-12 md:h-10 flex justify-center md:justify-start">
              <TypingAnimation />
            </div>
            
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground md:mx-0 leading-relaxed">
              {heroData.tagline}
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center md:justify-start">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="lg" className="btn-gradient px-8 h-14 rounded-2xl group border-none text-base font-bold">
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
                    <AlertDialogAction onClick={handleDownload} className="btn-gradient rounded-xl border-none">Download</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all text-base font-bold bg-background/40 backdrop-blur-sm">
                  <Send className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Floating Badge at Top Right */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 glass-card p-4 rounded-2xl shadow-2xl border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center relative">
                    <div className="h-4 w-4 rounded-full bg-primary animate-ping absolute"></div>
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Currently at</p>
                    <p className="text-base font-black">Accenture</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Interaction Hint */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 z-20 bg-accent p-3 rounded-full shadow-lg text-white"
              >
                <MousePointer2 className="h-5 w-5" />
              </motion.div>

              <div className="relative z-10 p-2.5 rounded-[2.5rem] border border-white/20 glass-card shadow-2xl group-hover:rotate-1 transition-transform duration-700">
                <Image
                  src={heroData.portraitUrl}
                  alt="Dilip Vishwakarma"
                  width={400}
                  height={400}
                  priority
                  className="rounded-[2rem] object-cover shadow-2xl transition-all duration-700 group-hover:scale-[1.03] grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}