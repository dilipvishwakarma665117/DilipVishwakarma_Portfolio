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
        "container mx-auto flex h-16 items-center justify-between px-6 rounded-2xl transition-all duration-300",
        isScrolled ? "bg-background/70 backdrop-blur-lg border border-border shadow-lg" : "bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" aria-label="Home">
          <DVLogo className="h-7 w-7 text-primary" />
          <span className="hidden sm:inline font-headline tracking-tighter">DILIP</span>
        </Link>
        
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-border/50 bg-background/95 backdrop-blur-xl">
               <SheetHeader className="mb-8 flex flex-row justify-between items-center">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={closeMobileMenu}>
                    <DVLogo className="h-6 w-6 text-primary" />
                    <span>Dilip's Domain</span>
                  </Link>
                </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="text-lg font-medium px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
