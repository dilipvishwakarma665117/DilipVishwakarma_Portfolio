"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { DVLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500 px-2 py-4 sm:px-4 md:py-6",
      isScrolled ? "py-2" : "py-4 md:py-6"
    )}>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 rounded-[1.25rem] sm:rounded-[1.5rem] transition-all duration-500 border border-white/10 shadow-lg mx-auto",
          isScrolled ? "bg-background/70 backdrop-blur-xl shadow-2xl" : "bg-background/20 backdrop-blur-md"
        )}
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3 font-bold text-lg sm:text-xl group" aria-label="Home">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all"></div>
            <DVLogo className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10" />
          </div>
          <span className="font-headline tracking-tighter text-xl sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">DILIP</span>
        </Link>
        
        <nav className="hidden items-center gap-1 sm:gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-sm font-bold hover:text-primary hover:bg-primary/10 transition-all rounded-xl px-3 sm:px-4 relative group">
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300"></span>
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-xl sm:rounded-2xl border-white/10 bg-white/5 backdrop-blur-md hover:bg-primary/10 transition-colors h-9 w-9 sm:h-10 sm:w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] border-l border-white/10 bg-background/90 backdrop-blur-3xl p-0 overflow-hidden">
               <div className="p-6 sm:p-8 pt-12 space-y-6 sm:space-y-8">
                  <SheetHeader className="mb-4 sm:mb-8 flex flex-row justify-between items-center">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <Link href="/" className="flex items-center gap-3 font-bold text-lg" onClick={closeMobileMenu}>
                      <DVLogo className="h-8 w-8 text-primary" />
                      <span className="text-gradient text-2xl font-black">Dilip's Domain</span>
                    </Link>
                  </SheetHeader>
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link 
                          href={link.href} 
                          onClick={closeMobileMenu} 
                          className="text-lg sm:text-xl font-black px-4 sm:px-5 py-3 sm:py-4 hover:bg-primary/10 hover:text-primary rounded-2xl transition-all flex items-center justify-between group"
                        >
                          {link.name}
                          <span className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="pt-6 sm:pt-8 border-t border-white/10">
                    <div className="flex justify-between items-center px-4 sm:px-5 text-sm text-muted-foreground">
                      <p className="font-bold">Appearance</p>
                      <ThemeToggle />
                    </div>
                  </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
