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
      "fixed top-0 z-50 w-full transition-all duration-300 px-4 pt-4",
    )}>
      <div className={cn(
        "container mx-auto flex h-16 items-center justify-between px-6 rounded-2xl transition-all duration-500 border border-white/5",
        isScrolled ? "bg-background/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group" aria-label="Home">
          <DVLogo className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">DILIP</span>
        </Link>
        
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-sm font-semibold hover:text-primary hover:bg-primary/10 transition-all rounded-xl px-4">
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
          </div>
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-xl border-white/10 bg-white/5">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-background/95 backdrop-blur-2xl">
               <SheetHeader className="mb-8 flex flex-row justify-between items-center">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={closeMobileMenu}>
                    <DVLogo className="h-7 w-7 text-primary" />
                    <span className="text-gradient">Dilip's Domain</span>
                  </Link>
                </SheetHeader>
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={closeMobileMenu} 
                    className="text-lg font-bold px-4 py-3 hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 px-4 flex justify-between items-center py-4 border-t border-white/5">
                  <span className="text-sm font-medium">Switch Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}