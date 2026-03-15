import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function DVLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("logo-animate overflow-visible", props.className)}
    >
      {/* Outer Geometric Frame (Strong Hexagon) */}
      <path 
        d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" 
        className="opacity-20 stroke-primary" 
        strokeWidth="1.5"
      />
      
      {/* Bold 'D' Monogram - Primary Path */}
      <path 
        d="M8.5 6.5V17.5" 
        className="text-primary"
        strokeWidth="4"
      />
      <path 
        d="M8.5 6.5H13.5C16.5 6.5 19 9 19 12C19 15 16.5 17.5 13.5 17.5H8.5" 
        className="text-primary"
        strokeWidth="4"
      />
      
      {/* Secondary Depth Path */}
      <path 
        d="M10.5 8.5V15.5" 
        className="text-secondary/50" 
        strokeWidth="1"
      />
      
      {/* Quality Check Accent Dot - Bold and Vibrant */}
      <circle 
        cx="8.5" 
        cy="17.5" 
        r="2.8" 
        className="fill-accent stroke-none animate-pulse" 
      />
      
      {/* Internal Glow Effect */}
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        className="fill-primary/10 stroke-none blur-sm" 
      />
    </svg>
  );
}
