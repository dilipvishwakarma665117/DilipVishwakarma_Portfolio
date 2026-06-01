"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["about", "projects", "achievements", "freelance", "contact"];
    
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScrollTop);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(2);
      return pathname === "/" && activeSection === hash;
    }
    return pathname === href;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 bg-[#08244C] border-b",
      isScrolled 
        ? "h-16 border-[#11325d] shadow-lg" 
        : "h-20 border-[#11325d]/50 shadow-md"
    )}>
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group animate-fade-in" aria-label="Home">
          <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center border border-slate-700/50 shadow-sm shrink-0 bg-white">
            <img 
              src="/logo.png" 
              alt="Dilip Logo" 
              className="h-full w-full object-cover scale-[1.3] transition-transform duration-300 group-hover:scale-[1.35]"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1.5 font-headline leading-none">
            <span className="font-extrabold text-lg tracking-wider text-white uppercase">Dilip</span>
            <span className="font-semibold text-lg tracking-wider text-[#B89748] uppercase">Vishwakarma</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden items-center gap-6 md:flex h-full">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1.5 px-0.5 font-headline text-[13px] font-bold tracking-wider uppercase transition-colors duration-300 group",
                  active 
                    ? "text-white" 
                    : "text-slate-400 hover:text-white"
                )}
              >
                <span>{link.name}</span>
                <span className={cn(
                  "absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#B89748] rounded-full transition-transform duration-300 origin-center",
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <Link 
            href="/#contact" 
            className="hidden md:flex items-center gap-2 bg-[#B89748] hover:bg-[#a3833d] text-white font-headline text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            <span>Hire Me</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-[#08244C] border-l border-[#11325d] text-white">
              <SheetHeader className="mb-8 flex flex-row justify-between items-center">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMobileMenu}>
                  <div className="h-9 w-9 rounded-full overflow-hidden flex items-center justify-center border border-slate-700 shadow-sm shrink-0 bg-white">
                    <img 
                      src="/logo.png" 
                      alt="Dilip Logo" 
                      className="h-full w-full object-cover scale-[1.3]"
                    />
                  </div>
                  <div className="flex items-center gap-1 font-headline leading-none">
                    <span className="font-extrabold text-base tracking-wider text-white uppercase">Dilip</span>
                    <span className="font-semibold text-base tracking-wider text-[#B89748] uppercase">V.</span>
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeMobileMenu} className="text-slate-300 hover:text-white">
                  <X />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetHeader>
              <div className="py-4">
                <nav className="flex flex-col items-stretch gap-4">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "relative py-2.5 px-4 font-headline text-sm font-bold tracking-wider uppercase transition-colors duration-300 border-l-4 rounded-r-md",
                          active 
                            ? "text-white bg-white/10 border-[#B89748]" 
                            : "text-slate-300 border-transparent hover:text-white hover:bg-white/5"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <Link 
                    href="/#contact" 
                    onClick={closeMobileMenu}
                    className="mt-6 flex items-center justify-center gap-2 bg-[#B89748] hover:bg-[#a3833d] text-white font-headline text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-all duration-300 shadow-md"
                  >
                    <span>Hire Me</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
