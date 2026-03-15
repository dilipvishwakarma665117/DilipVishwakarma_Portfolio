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
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/Dilip_Resume_3.pdf';
      link.download = 'Dilip_Resume_3.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-transparent pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] animate-blob pointer-events-none opacity-60 sm:opacity-100"></div>
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[80px] sm:blur-[120px] animate-blob animation-delay-2000 pointer-events-none opacity-60 sm:opacity-100"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-6 sm:mb-8"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
              <span>Available for new opportunities</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-headline mb-4 sm:mb-6">
              I'm <span className="text-gradient">Dilip Vishwakarma</span>
            </h1>
            
            <div className="mb-6 sm:mb-8 h-10 sm:h-12 flex justify-center lg:justify-start">
              <TypingAnimation />
            </div>
            
            <p className="mx-auto lg:mx-0 mt-4 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              {heroData.tagline}
            </p>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="lg" className="btn-gradient w-full sm:w-auto px-6 sm:px-8 h-12 sm:h-14 rounded-2xl group border-none text-sm sm:text-base font-bold">
                    <ArrowDownToLine className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="glass-card w-[90vw] sm:max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Ready to download?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You are about to download the latest version of Dilip's professional resume.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel className="rounded-xl w-full sm:w-auto m-0">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDownload} className="btn-gradient rounded-xl border-none w-full sm:w-auto">Download</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Link href="#contact" passHref className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 sm:h-14 px-6 sm:px-8 rounded-2xl border-2 border-primary/20 hover:bg-primary/5 hover:border-primary transition-all text-sm sm:text-base font-bold bg-background/40 backdrop-blur-sm">
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
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative group cursor-pointer max-w-[280px] sm:max-w-[400px] w-full">
              <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent blur-2xl sm:blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Floating Badge at Top Left */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 z-20 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-white/20"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-primary/20 flex items-center justify-center relative">
                    <div className="h-2 w-2 sm:h-4 sm:w-4 rounded-full bg-primary animate-ping absolute"></div>
                    <div className="h-2 w-2 sm:h-4 sm:w-4 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Currently at</p>
                    <p className="text-sm sm:text-base font-black">Accenture</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Interaction Hint */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-20 bg-accent p-2 sm:p-3 rounded-full shadow-lg text-white"
              >
                <MousePointer2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>

              <div className="relative z-10 p-2 sm:p-2.5 rounded-[2rem] sm:rounded-[2.5rem] border border-white/20 glass-card shadow-2xl group-hover:rotate-1 transition-transform duration-700 aspect-square overflow-hidden">
                <Image
                  src={heroData.portraitUrl}
                  alt="Dilip Vishwakarma"
                  width={400}
                  height={400}
                  priority
                  className="rounded-[1.8rem] sm:rounded-[2rem] object-cover h-full w-full shadow-2xl transition-all duration-700 group-hover:scale-[1.03] grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
