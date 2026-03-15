import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function DVLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("logo-animate overflow-visible", props.className)}
    >
      {/* Outer Geometric Frame (Subtle Hexagon) */}
      <path 
        d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" 
        className="opacity-10 stroke-current" 
        strokeWidth="1"
      />
      
      {/* Stylized 'D' Monogram */}
      <path 
        d="M8.5 7V17" 
        className="text-primary"
      />
      <path 
        d="M8.5 7H13.5C15.9853 7 18 9.01472 18 11.5C18 13.9853 15.9853 16 13.5 16H8.5" 
        className="text-primary"
      />
      
      {/* Quality Check Accent Dot */}
      <circle 
        cx="8.5" 
        cy="17" 
        r="1.8" 
        className="fill-accent stroke-none animate-pulse" 
      />
      
      {/* Internal Background Soft Glow */}
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        className="fill-primary/5 stroke-none" 
      />
    </svg>
  );
}
