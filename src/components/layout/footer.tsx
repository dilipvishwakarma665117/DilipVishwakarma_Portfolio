import Link from "next/link";
import { footerData, navLinks, socialLinks } from "@/lib/data";
import { Button } from "../ui/button";
import { DVLogo } from "../icons";

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
             <Link href="/" className="flex items-center gap-2 font-bold text-lg" aria-label="Home">
                <DVLogo className="h-6 w-6 text-primary" />
                <span>Dilip's Digital Domain</span>
              </Link>
            <p className="text-sm text-muted-foreground">
              Quality Engineer Analyst | Software Tester
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground text-sm w-fit">
                    {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="grid gap-2">
             <h3 className="font-semibold">Connect</h3>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link href={href} key={name} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label={name}>
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dilip's Digital Domain. Made with ❤️ by {footerData.madeBy}.</p>
        </div>
      </div>
    </footer>
  );
}
