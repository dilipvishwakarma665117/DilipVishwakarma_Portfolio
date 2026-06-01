import Link from "next/link";
import { contactData, footerData, navLinks, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08244C] text-white border-t border-[#11325d]">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
              <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center border border-slate-700 shadow-sm shrink-0 bg-white">
                <img 
                  src="/logo.png" 
                  alt="Dilip Logo" 
                  className="h-full w-full object-cover scale-[1.3] transition-transform duration-300 group-hover:scale-[1.35]"
                />
              </div>
              <div className="flex items-center gap-1.5 font-headline leading-none">
                <span className="font-extrabold text-lg tracking-wider text-white uppercase">Dilip</span>
                <span className="font-semibold text-lg tracking-wider text-[#B89748] uppercase">Vishwakarma</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Turning Bugs into Quality – 2+ Years of Experience in Manual & Automation Testing. Specializing in ServiceNow, Selenium with Java, and Automation Frameworks.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link 
                  href={href} 
                  key={name} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-[#B89748] hover:border-[#B89748] transition-all duration-300 bg-slate-900/30 hover:bg-slate-900/60"
                  aria-label={name}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-base text-[#B89748] tracking-wider uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm w-fit font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-bold text-base text-[#B89748] tracking-wider uppercase">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#B89748] shrink-0" />
                <span>{contactData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#B89748] shrink-0" />
                <a 
                  href="mailto:dileepv9721@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  dileepv9721@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-[#11325d] pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {footerData.madeBy}. All rights reserved. Made with ❤️ for quality assurance.</p>
        </div>
      </div>
    </footer>
  );
}
